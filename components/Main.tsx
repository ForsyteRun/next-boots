import { Stack } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import {Context, ContextType} from "./AppContext";
import Sceleton from "./Sceleton";
import Pagination from '@mui/material/Pagination';

const Main =  () => {
  const [totalCards, setTotalCards] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  const {item, sceleton} = useContext<ContextType>(Context)

  useEffect(() => {
    //get total count cards
    const getTotalCards = async () => {
      const resTotalCards = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users`)
      const data: Array<CardType> = await resTotalCards.json()
      const totalCountCards: number = data.length-1
      setTotalCards(totalCountCards/2)
    }
    getTotalCards()
  }, [])

  // useEffect(() => {
  //   //get total count cards
  //   const changePage = async () => {
  //   const resTotalCards = await fetch(`https://630f1ba6498924524a860c3f.mockapi.io/users?page=${page}&limit=2`)
  //   const data: Array<CardType> = await resTotalCards.json()
  //   console.log(data);
    
  // }
  // changePage() 
  // }, [page])

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
        <Pagination count={totalCards} size="large" sx={{m: '20px auto 0 auto'}}/> 
      </Stack>
  
    </>
  )
};

export default Main;
