export type CardType = {
   id: number
   title: string
   img: string
   price: number
   like: boolean
   chacked: boolean
}

export type OrderType = {
   id?: string
   ''?: CardType
 }