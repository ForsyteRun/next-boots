import { Stack } from "@mui/material";
import { FC, useContext, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import {Context, ContextType} from "./AppContext";
import Sceleton from "./Sceleton";
import Pagination from '@mui/material/Pagination';

const Main =  () => {
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  const {item, sceleton, } = useContext<ContextType>(Context)
  
  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>{searchValue.search ? `Поиск по запросу: '${searchValue.search}'` : 'Все кроссовки'}</h1>
        <Search setSearchValue={setSearchValue} />
      </Stack>
      <Stack  direction="column">
        <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px" flexGrow={1}>
          {
          sceleton 
          ? [...Array(8)].map((card: any) => <Sceleton key={card} />) 
          : item.filter((el:CardType) => el.title.toLowerCase().includes(searchValue.search.toLowerCase())).map((card: CardType) => <CardItem card={card} key={card.id} />)
          }
        </Stack>
        <Pagination count={10} sx={{m: '20px auto 0 auto'}}/> 
      </Stack>
  
    </>
  )
};

export default Main;
