import {createContext} from 'react';
import { CardType, OrderType } from '../types/types';

export type ContextType = {
   item: Array<CardType>;
   sceleton: boolean;
   shop: boolean
   order: boolean
   addedOrder: Array<OrderType>
   loading: boolean
   disBtn: boolean
   totalCards: number
   setAddedOrder: (el: Array<OrderType>) => void
   finishOrders: () => void
   setOrder: (el: boolean) => void
   setShop:(el: boolean) => void
   onRemoveDrawerItem: (obj: CardType) => void;
   onAddDrawerItem: (obj: CardType) => void;
   onAddFavoriteItem: (obj: CardType) => void;
   onRemoveFavoriteItem: (obj: CardType) => void;
 };

export const contextDefaultValues: ContextType = {
   item: [],
   sceleton: true,
   shop: false,
   order: false,
   addedOrder: [],
   loading: true,
   disBtn: false,
   totalCards: 0,
   setAddedOrder: () => {},
   finishOrders: () => {},
   setOrder: () => {},
   setShop: () => {},
   onRemoveDrawerItem: () => {},
   onAddDrawerItem: () => {},
   onAddFavoriteItem: () => {},
   onRemoveFavoriteItem: () => {},
 };
 
 export const Context = createContext<ContextType>(contextDefaultValues);
 