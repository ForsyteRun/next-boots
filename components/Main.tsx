import { Stack } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import {Context, ContextType} from "./AppContext";
import Sceleton from "./Sceleton";
import Pagination from '@mui/material/Pagination';

const Main =  () => {
  const [page, setPage] = useState<number>(1)
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  const {sceleton, itemPagi, setItemPagi, totalCards} = useContext<ContextType>(Context)
  const limitPageInWindow = 2
  
  useEffect(() => {
    //get total count cards
    const changePage = async () => {
    const resTotalCards = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users?page=${page}&limit=${limitPageInWindow}`)
    const data: Array<CardType> = await resTotalCards.json()
    setItemPagi(data)
   }
    changePage() 
  }, [page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  };

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
          ? [...Array(limitPageInWindow)].map((card: any) => <Sceleton key={card} />) 
          : itemPagi.filter((el:CardType) => el.title.toLowerCase().includes(searchValue.search.toLowerCase())).map((card: CardType) => <CardItem card={card} key={card.id} />)
          }
        </Stack>
        <Pagination count={totalCards} page={page} onChange={handleChange} size="large" sx={{m: '20px auto 0 auto'}}/> 
      </Stack>
  
    </>
  )
};

export default Main;
