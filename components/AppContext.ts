import {createContext} from 'react';
import { CardType, OrderType } from '../types/types';

export type ContextType = {
   item: Array<CardType>;
   sceleton: boolean;
   shop: boolean
   order: boolean
   addedOrder: OrderType | null
   finishOrders: () => void
   setAddedOrder:  (obj: OrderType | null) => void
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
   addedOrder: {id: ''},
   finishOrders: () => {},
   setAddedOrder: () => {},
   setOrder: () => {},
   setShop: () => {},
   onRemoveDrawerItem: () => {},
   onAddDrawerItem: () => {},
   onAddFavoriteItem: () => {},
   onRemoveFavoriteItem: () => {},
 };
 
 export const Context = createContext<ContextType>(contextDefaultValues);
 