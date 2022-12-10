import { CardType } from "../types/types"

//function return object with array of cards whith chacked in boolean state
export const toggleAddBtn = (arr: Array<CardType>, data: CardType, bool: boolean ) => {
   const changeCheck = arr.map((el: CardType) =>
     el.id === data.id ? Object.assign({}, el, { chacked: bool }) : el )
 
     return {changeCheck}
}

//function return object with array of cards whith like in boolean state
export const toggleFavoriteBtn = (arr: Array<CardType>, data: CardType, bool: boolean ) => {
   const favoriteCheck = arr.map((el: CardType) =>
     el.id === data.id ? Object.assign({}, el, {  like: bool }) : el )
 
     return {favoriteCheck}
}