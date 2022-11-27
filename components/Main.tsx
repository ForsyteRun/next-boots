import { Stack } from "@mui/material";
import { FC, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import s from "./../styles/Main.module.scss";

type PropsType = {
  data: Array<CardType>
  addToDrawer: (el: CardType) => void
}

const Main: FC<PropsType> = ({data, addToDrawer}) => {//todo: поделать компоненты и классы
  const [searchValue, setSearchValue] = useState<InitialType | null>(null)
  
  return (
    <main className={s.conteiner}>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>{searchValue ? `Поиск по запросу: '${searchValue.search}'` : 'Все кроссовки'}</h1>
        <Search setSearchValue={setSearchValue} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
        {data && data.map((card: CardType) => (
          <CardItem card={card} key={card.id} addToDrawer={addToDrawer}/>))}
      </Stack>
    </main>
  )
};

export default Main;
