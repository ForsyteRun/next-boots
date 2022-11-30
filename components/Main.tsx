import { Stack } from "@mui/material";
import { FC, useState } from "react";
import CardItem from "../components/CardItem";
import Search, { InitialType } from "../components/Search";
import { CardType } from "../types/types";
import s from "./../styles/Main.module.scss";

type PropsType = {
  mainData: Array<CardType>
  drawData: Array<CardType>
  onAddToDrawer: (el: CardType) => void
}

const Main: FC<PropsType> = ({mainData, drawData, onAddToDrawer}) => {//todo: поделать компоненты и классы
  const [searchValue, setSearchValue] = useState<InitialType>({search: ''})
  
  return (
    <main className={s.conteiner}>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>{searchValue.search ? `Поиск по запросу: '${searchValue.search}'` : 'Все кроссовки'}</h1>
        <Search setSearchValue={setSearchValue} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' gap="10px">
        {mainData && mainData.filter((el:CardType) => el.title.toLowerCase().includes(searchValue.search.toLowerCase())).map((card: CardType) => (
          <CardItem card={card} key={card.id} onAddToDrawer={onAddToDrawer}  drawData={drawData}/>))}
      </Stack>
    </main>
  )
};

export default Main;
