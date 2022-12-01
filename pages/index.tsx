import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { CardType } from "../types/types";

type PropsType = {
    mainData:  Array<CardType>
}

const Home: NextPage<PropsType> = ({mainData}) => {
  const [item, setItem] = useState<any>(mainData)
  console.log(item)
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
      const arr = item.map((el: any)=> el.id === data.id && data)
      console.log(arr);
      setItem((prev: any) => [...prev, {arr: data}])
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
      setItem((prev: any) => [...prev, data])
    } catch (error) {
      throw new Error(`Error in onRemoveCardDrawer: ${error}`);
    }
  }
  
  return (
    <>
      <Head>
        <title>React-boots</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header item={item} onRemoveDrawerItem={onRemoveDrawerItem}/>
      <Main mainData={mainData} onAddDrawerItem={onAddDrawerItem} />
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://630f1ba6498924524a860c3f.mockapi.io/users')
  const mainData = await res.json()
  return {mainData}
}

export default Home;
