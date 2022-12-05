import { Stack } from "@mui/material"
import { useContext, useEffect } from "react"
import { Context, ContextType } from "../components/AppContext"
import CardItem from "../components/CardItem"
import EmptyDrawer from "../components/EmptyDrawer"
import { CardType, OrderType } from "../types/types"

const Orders = () => {
  const {order, addedOrder, setAddedOrder} = useContext<ContextType>(Context)

  return (
    <>
    {addedOrder.map((el: any) => <div key={el.order}>{el.order}</div>)}
    {/* {addedOrder
      ?
        <Stack direction="row"  flexWrap='wrap' gap="15px">
          { addedOrder.content && addedOrder.content.map((card: CardType) => <CardItem card={card} key={card.id} />)}
        </Stack>
      : 
        <EmptyDrawer 
          btnBack
          bigSize
          path='/sleepSmile.png' 
          title='У вас нет заказов' 
          subTitle='Вы нищеброд? Оформите хотя бы один заказ.'/>
        } */}
    </>
  )
}

export default Orders;