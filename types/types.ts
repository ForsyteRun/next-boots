export type CardType = {
   id: number
   title: string
   img: string
   price: number
   like: boolean
   chacked: boolean
}

export type OrderType = {
   order?: string;
   content?: CardType[];
 };