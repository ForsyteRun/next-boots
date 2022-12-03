import { Stack } from "@mui/material";
import { FC, useContext, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import { Context, ContextType } from "./AppContext";
import Sceleton from "./Sceleton";

const Main: FC = () => {
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  const {item, sceleton} = useContext<ContextType>(Context)

  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>{searchValue.search ? `Поиск по запросу: '${searchValue.search}'` : 'Все кроссовки'}</h1>
        <Search setSearchValue={setSearchValue} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
        {sceleton 
        ? [...Array(8)].map((card: any) => <Sceleton key={card} />)
        : item.filter((el:CardType) => el.title.toLowerCase().includes(searchValue.search.toLowerCase())).map((card: CardType) => <CardItem card={card} key={card.id} />)
        }
      </Stack>
    </>
  )
};

export default Main;
