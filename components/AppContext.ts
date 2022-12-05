import {createContext} from 'react';
import { CardType, OrderType } from '../types/types';

export type ContextType = {
   item: Array<CardType>;
   sceleton: boolean;
   shop: boolean
   order: boolean
   addedOrder: Array<OrderType>
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
 