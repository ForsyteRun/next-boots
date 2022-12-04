import { Stack } from "@mui/material"
import Head from "next/head"
import { FC, useContext } from "react"
import { Context } from "../components/AppContext"
import CardItem from "../components/CardItem"
import EmptyDrawer from "../components/EmptyDrawer"
import { CardType } from "../types/types"

const Favorites: FC = () => {
   const {item} = useContext(Context)
   
   return (
   <>
      <Head>
         <title>Favorite</title>
         <meta name="description" content="Favorite" />
      </Head>
      {item.find((el:CardType) => el.like === true) ? 
      <>
         <h2>Мои закладки</h2>
         <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
            {item.filter((el: CardType)=>el.like===true).map((card: CardType) => <CardItem card={card} key={card.id} />)}
         </Stack>
      </>
      :
      <EmptyDrawer 
      btnBack
      bigSize
      path='/sadSmile.png' 
      title='Закладок нет :(' 
      subTitle='Вы ничего не добавляли в закладки'/>
      }
   </>
  )
}

export default Favorites