export type CardType = {
   id: string
   title: string
   img: string
   price: number
   like: boolean
   chacked: boolean
}

export type OrderType = {
   obj: OrderType
   order: string;
   content: CardType[];
 };