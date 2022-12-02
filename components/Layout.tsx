import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { CardType } from "../types/types";
import { Context } from "./AppContext";
import s from "./../styles/Main.module.scss";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {

  const [item, setItem] = useState<Array<CardType>>([])
  console.log(item);
  
  useEffect(() => {
    try {
      fetch('https://630f1ba6498924524a860c3f.mockapi.io/users')
      .then(res => res.json())
      .then(data => setItem(data))
    } catch (error) {
      throw new Error(`Error in: ${error}`);
    }
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
      const data = await res.json()
      const arr = item.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {chacked: true}) : el)
      setItem(arr)
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
      const data = await res.json()
      const arr = item.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {chacked: false}) : el)
      setItem(arr)
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
      const data = await res.json()
      const arr = item.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {like: true}) : el)
      setItem(arr)
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
      const data = await res.json()
      const arr = item.map((el: CardType)=> el.id === data.id ? Object.assign({}, el, {like: false}) : el)
      setItem(arr)
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  }
  
  
  return (
    <>
    <Context.Provider value={{item, onAddDrawerItem, onRemoveDrawerItem, onAddFavoriteItem, onRemoveFavoriteItem}}>
      <Header />
        <main className={s.conteiner}>
            {children}
        </main>
    </Context.Provider>
    </>
  )}

export default Layout;