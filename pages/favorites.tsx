import { Stack } from "@mui/material"
import Head from "next/head"
import { FC, useContext } from "react"
import { Context } from "../components/AppContext"
import CardItem from "../components/CardItem"
import { CardType } from "../types/types"

const Favorites: FC = () => {
   const {item} = useContext(Context)
   return (
   <>
      <Head>
         <title>Favorite</title>
         <meta name="description" content="Favorite" />
      </Head>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
         {item.filter((el: CardType)=>el.like===true).map((card: CardType) => <CardItem card={card} key={card.id} />)}
      </Stack>
   </>
  )
}

export default Favorites