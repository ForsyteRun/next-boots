import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { CardType, OrderType } from "../types/types";
import { Context } from "./AppContext";
import s from "./../styles/Main.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {

  const [item, setItem] = useState<Array<CardType>>([]);
  const [sceleton, setSceleton] = useState<boolean>(true);
  const [shop, setShop] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [addedOrder, setAddedOrder] = useState<Array<OrderType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [disBtn, setDisBtn] = useState<boolean>(false);

  useEffect(() => {
    const initData = async () => {
      try {

        //инициализация стартовой страницы. Загрузка карточек товара по дефолту
        const res: Array<CardType> = await (
          await fetch("https://630f1ba6498924524a860c3f.mockapi.io/users")
        ).json();
        setItem(res);
        setSceleton(false);

        //загрузка init ордеров после подтверждения о покупке
        const resAddedOrders: Array<OrderType> = 
        await (await fetch("https://630f1ba6498924524a860c3f.mockapi.io/orders")
          ).json();
          setAddedOrder(resAddedOrders)
          setOrder(prev => prev = true)
          setLoading(prev => prev = false)
      } catch (error) {
        throw new Error(`Error in: ${error}`);
      }
    };
    initData();
  }, []);

  const onAddDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ chacked: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: CardType = await res.json();
      setItem((prev) =>
        prev.map((el: CardType) =>
          el.id === data.id ? Object.assign({}, el, { chacked: true }) : el
        )
      );
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  };

  const onRemoveDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ chacked: false }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: CardType = await res.json();
      setItem((prev) =>
        prev.map((el: CardType) =>
          el.id === data.id ? Object.assign({}, el, { chacked: false }) : el
        )
      );
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  };

  const onAddFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ like: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: CardType = await res.json();
      setItem((prev) =>
        prev.map((el: CardType) =>
          el.id === data.id ? Object.assign({}, el, { like: true }) : el
        )
      );
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  };

  const onRemoveFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ like: false }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data: CardType = await res.json();
      setItem((prev) =>
        prev.map((el: CardType) =>
          el.id === data.id ? Object.assign({}, el, { like: false }) : el
        )
      );
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  };

  const finishOrders = async () => {
    try {
      const content = item.filter((el: CardType) => el.chacked === true);

      //В новый массив на МockApi добавляем объект с id
      //и ключём content (это массив отфильтрованных данных по флагу chacked: true)
      setDisBtn(prev => !prev)
      const resOrders = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/orders`,
        {
          method: "POST",
          body: JSON.stringify({ content }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        const dataOrders: OrderType = await resOrders.json();
        setAddedOrder(prev => [...prev, dataOrders])
        
      //после подтверждения заказа меняем флаг chacked: true на chacked: false
      //в init массиве у каждого выбраного элемента массива. Перебор по циклу
      for (let i of content) {
        await fetch(
          `https://630f1ba6498924524a860c3f.mockapi.io/users/${i.id}`,
          {
            method: "PUT",
            body: JSON.stringify({ chacked: false }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      //возвращаем основной массив с актуальными данными, тоесть с флагом chacked: false,
      //так как элемениы с chacked: true добавлены в новый массив addedOrder в state
      //и  на МockApi в объект orders
      const res = await fetch(
        `https://630f1ba6498924524a860c3f.mockapi.io/users`
      );
      const data = await res.json();
      setOrder((prev) => !prev);
      setItem(data);
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
    setDisBtn(prev => !prev)
  };

  const value = {
    item,
    sceleton,
    shop,
    order,
    addedOrder,
    loading,
    disBtn,
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
