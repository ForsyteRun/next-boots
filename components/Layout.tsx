import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { CardType, OrderType } from "../types/types";
import { Context } from "./AppContext";
import s from "./../styles/Main.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {

  const [item, setItem] = useState<Array<CardType>>([])
  const [sceleton, setSceleton] = useState<boolean>(true)
  const [shop, setShop] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false)
  const [addedOrder, setAddedOrder] = useState<OrderType | null>(null)
  console.log(addedOrder);

  useEffect(() => {
    const initData = async () => {
      try {
        const res: Array<CardType> = await (await fetch('https://630f1ba6498924524a860c3f.mockapi.io/users')).json()
        setItem(res) 
        setSceleton(false)
      } catch (error) {
        throw new Error(`Error in: ${error}`);
      }
    }
    initData()
  }, [])
  
  const onAddDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({chacked: true}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data: CardType = await res.json()
      setItem(prev => prev.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {chacked: true}) : el))
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  }
  
  const onRemoveDrawerItem = async (obj: CardType) => {
    try {
      const res = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({chacked: false}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data: CardType = await res.json()
      setItem(prev => prev.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {chacked: false}) : el))
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  }
  
  const onAddFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({like: true}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data: CardType = await res.json()
      setItem(prev => prev.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {like: true}) : el))
    } catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  }

  const onRemoveFavoriteItem = async (obj: CardType) => {
    try {
      const res = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify({like: false}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data: CardType = await res.json()
      setItem(prev => prev.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {like: false}) : el))
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  }

  const finishOrders = async () => {
    try {
      const el = item.filter((el: CardType)=> el.chacked === true) 
      const res = await fetch('https://630f1ba6498924524a860c3f.mockapi.io/orders', {
        method: "POST",
        body: JSON.stringify(el),
        headers: {                             
          "Content-Type": "application/json"   
        }                                      
      })
      const data: OrderType = await res.json()
      setOrder(prev => !prev)
      setAddedOrder(data)
    }
    catch (error) {
      throw new Error(`Error in onAddToDrawer: ${error}`);
    }
  }
  
  const value = {item, sceleton, shop, order, addedOrder,
    onAddDrawerItem, onRemoveDrawerItem, onAddFavoriteItem, 
    onRemoveFavoriteItem, setShop, setOrder, setAddedOrder, finishOrders}

  return (
    <>
    <Context.Provider value={value}>
      <Header />
        <main className={s.conteiner}>
            {children}
        </main>
    </Context.Provider>
    </>
  )}

export default Layout;