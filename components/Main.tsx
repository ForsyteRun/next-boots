import { Stack } from "@mui/material";
import CardItem from "../components/CardItem";
import Search from "../components/Search";
import { cards } from "../public/card/data";
import { CardType } from "../types/types";
import s from "./../styles/Main.module.scss";

const Main = () => {//todo: поделать компоненты и классы
  return (
    <main className={s.conteiner}>
      <Stack direction="row" justifyContent="space-between" mb="30px">
        <h1>Все кроссовки</h1>
        <Search />
      </Stack>
      <Stack direction="row" justifyContent="space-between" gap="10px">
        {cards.map((card: CardType) => {
          return <CardItem card={card} key={card.id} />;
        })}
      </Stack>
    </main>
  )
};

export default Main;
