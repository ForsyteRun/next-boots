import {createContext} from 'react';
import { CardType } from '../types/types';

export type ContextType = {
   item: Array<CardType>;
   sceleton: boolean;
   onRemoveDrawerItem: (obj: CardType) => void;
   onAddDrawerItem: (obj: CardType) => void;
   onAddFavoriteItem: (obj: CardType) => void;
   onRemoveFavoriteItem: (obj: CardType) => void;
 };

export const contextDefaultValues: ContextType = {
   item: [],
   sceleton: true,
   onRemoveDrawerItem: () => {},
   onAddDrawerItem: () => {},
   onAddFavoriteItem: () => {},
   onRemoveFavoriteItem: () => {},
 };
 
 export const Context = createContext<ContextType>(contextDefaultValues);
 