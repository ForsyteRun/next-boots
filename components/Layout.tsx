import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { CardType, OrderType } from "../types/types";
import { Context } from "./AppContext";
import s from "./../styles/Main.module.scss";
import { toggleAddBtn, toggleFavoriteBtn } from "../common/toogleBtn";
import { instansMockaAPI } from "../common/instansFetch";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const [item, setItem] = useState<Array<CardType>>([]);
  const [itemPagi, setItemPagi] = useState<Array<CardType>>([]);
  const [sceleton, setSceleton] = useState<boolean>(true);
  const [shop, setShop] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [addedOrder, setAddedOrder] = useState<Array<OrderType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [disBtn, setDisBtn] = useState<boolean>(false);
  const [totalCards, setTotalCards] = useState<number>(0);
  const [limitPageInWindow, _setLimitPageInWindow] = useState<number>(8);

  useEffect(() => {
    const initData = async () => {
      try {

        //инициализация стартовой страницы. Загрузка карточек товара
        const res: Array<CardType> = await (
          await fetch(instansMockaAPI + "users")
        ).json();
        setItem(res);
        setSceleton(false);
        setTotalCards(res.length - 1);

        const resAPI: Array<CardType> = await (
          await fetch(instansMockaAPI + `users?page=1&limit=${limitPageInWindow}`)
        ).json();
        setItemPagi(resAPI);

        //загрузка init ордеров после подтверждения о покупке
        const resAddedOrders: Array<OrderType> = await (
          await fetch(instansMockaAPI + "orders")
        ).json();
        setAddedOrder(resAddedOrders);
        addedOrder.length && setOrder((prev) => (prev = true));
        setLoading((prev) => (prev = false));
      } catch (error) {
        throw new Error(`Error in init useEffect: ${error}`);
      }
    };
    initData();
  }, []);

  const onAddDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(instansMockaAPI + `users/${obj.id}`, {
        method: "PUT",
        body: JSON.stringify({ chacked: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: CardType = await res.json();

      const mainArr = toggleAddBtn(item, data, true);
      const secArr = toggleAddBtn(itemPagi, data, true);

      setItem(mainArr.changeCheck);
      setItemPagi(secArr.changeCheck);
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  };

  const onRemoveDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(instansMockaAPI + `users/${obj.id}`, {
        method: "PUT",
        body: JSON.stringify({ chacked: false }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: CardType = await res.json();

      const mainArr = toggleAddBtn(item, data, false);
      const secArr = toggleAddBtn(itemPagi, data, false);

      setItem(mainArr.changeCheck);
      setItemPagi(secArr.changeCheck);
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  };

  const onAddFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(instansMockaAPI + `users/${obj.id}`, {
        method: "PUT",
        body: JSON.stringify({ like: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: CardType = await res.json();

      const mainArr = toggleFavoriteBtn(item, data, true);
      const secArr = toggleFavoriteBtn(itemPagi, data, true);

      setItem(mainArr.favoriteCheck);
      setItemPagi(secArr.favoriteCheck);
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  };

  const onRemoveFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(instansMockaAPI + `users/${obj.id}`, {
        method: "PUT",
        body: JSON.stringify({ like: false }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: CardType = await res.json();

      const mainArr = toggleFavoriteBtn(item, data, false);
      const secArr = toggleFavoriteBtn(itemPagi, data, false);

      setItem(mainArr.favoriteCheck);
      setItemPagi(secArr.favoriteCheck);
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  };

  const finishOrders = async () => {
    try {
      const content = item.filter((el: CardType) => el.chacked === true);

      //В новый массив на МockApi добавляем объект с id
      //и ключём content (это массив отфильтрованных данных по флагу chacked: true)
      setDisBtn((prev) => !prev);
      const resOrders = await fetch(instansMockaAPI + "orders", {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataOrders: OrderType = await resOrders.json();
      setAddedOrder((prev) => [...prev, dataOrders]);

      //после подтверждения заказа меняем флаг chacked: true на chacked: false
      //в init массиве у каждого выбраного элемента массива. Перебор по циклу for...
      //если через ForEach, то await не будет ожидатся
      for (let i of content) {
        await fetch(instansMockaAPI + `users/${i.id}`, {
          method: "PUT",
          body: JSON.stringify({ chacked: false }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      //возвращаем основной массив с актуальными данными, тоесть с флагом chacked: false,
      //так как элемениы с chacked: true добавлены в новый массив addedOrder в state
      //и  на МockApi в объект orders
      const res = await fetch(instansMockaAPI + "users");
      const data = await res.json();
      setOrder((prev) => (prev = true));
      setItem(data);
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
    setDisBtn((prev) => !prev);
  };

  const value = {
    item,
    sceleton,
    shop,
    order,
    addedOrder,
    loading,
    disBtn,
    itemPagi,
    totalCards,
    limitPageInWindow, 
    setItem,
    setItemPagi,
    setTotalCards,
    setAddedOrder,
    onAddDrawerItem,
    onRemoveDrawerItem,
    onAddFavoriteItem,
    onRemoveFavoriteItem,
    setShop,
    setOrder,
    finishOrders,
  };

  return (
    <>
      <Context.Provider value={value}>
        <Header />
        <main className={s.conteiner}>{children}</main>
      </Context.Provider>
    </>
  );
};

export default Layout;
