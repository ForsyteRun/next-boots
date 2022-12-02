import { Stack } from "@mui/material";
import { FC, useContext, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import s from "./../styles/Main.module.scss";
import { Context } from "./AppContext";

const Main: FC = () => {
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  const {item} = useContext(Context)

  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>{searchValue.search ? `Поиск по запросу: '${searchValue.search}'` : 'Все кроссовки'}</h1>
        <Search setSearchValue={setSearchValue} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
        {item.filter((el:CardType) => el.title.toLowerCase().includes(searchValue.search.toLowerCase())).map((card: CardType) => (
          <CardItem card={card} key={card.id} />))}
      </Stack>
    </>
  )
};

export default Main;
