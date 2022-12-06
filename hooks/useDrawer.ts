import { useContext } from "react"
import { Context, ContextType } from "../components/AppContext"
import { CardType } from "../types/types"

type BackType = {
   totalPrice: number
}

export const useDrawer = (): BackType => {
   const {item} = useContext<ContextType>(Context)
   const getChacked = item.filter((el: CardType)=> el.chacked === true)
   const totalPrice = getChacked.reduce((sum, el)=> sum + Number(el.price), 0)

   return {totalPrice}
}