import { useContext } from "react"
import { Context, ContextType } from "../components/AppContext"
import CardItem from "../components/CardItem"
import EmptyDrawer from "../components/EmptyDrawer"
import { CardType } from "../types/types"

const Orders = () => {
  const {order, item} = useContext<ContextType>(Context)
  console.log(order, item);
  
  return (
    <>
    {order 
      ? item.map((card: CardType) => card.chacked === true && <CardItem card={card} key={card.id} />)
      : <EmptyDrawer 
      btnBack
      bigSize
      path='/sleepSmile.png' 
      title='У вас нет заказов' 
      subTitle='Вы нищеброд? Оформите хотя бы один заказ.'/>
    }
    </>
  )
}

export default Orders
