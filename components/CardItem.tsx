import { FC, useEffect, useState } from "react";
import { CardType } from "../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import s from "./../styles/CardItem.module.scss";
import unLike from "public/card/unLike.png";
import like from "public/card/like.png";
import add from "public/card/add.svg";
import notAdd from "public/card/notAdd.svg";

type PropsType = {
  drawData: Array<CardType>
  card: CardType
  onAddToDrawer: (el: CardType) => void
}

const CardItem: FC<PropsType> = ({card, onAddToDrawer, drawData}) => {//todo: 1.add classNames;
  
  const [favorite, setFavorite] = useState<boolean>(false)
  const [takeCard, setTakeCard] = useState<boolean>(false)
  
  // useEffect(() => {
  //  console.log(drawData);
  //   // drawData.length > 0 ? setTakeCard(true) : null
  // }, [])

  const addCard = () => {
    onAddToDrawer(card)
    setTakeCard(!takeCard)
  }

  return (
    <Card className={s.conteiner} sx={{':hover': {transform: 'translateY(-0.5px)', boxShadow: '7px 7px 15px #999'}}}>
      <CardContent className={s.content}>
      <Image  onClick={()=>setFavorite(!favorite)} className={s.like} src={favorite ? like : unLike} alt="like" />
        <Image src= {card.img} width={133} height={114} alt="card" />
        <p className={s.title}>{card.title}</p>
        <div className={s.titlePrice}>цена</div>
        <p className={s.price}>{card.price} uah</p>
        <Image onClick={addCard} className={s.add} src={takeCard ? notAdd : add} alt="add" />
      </CardContent>
    </Card>
  );
};

export default CardItem;
