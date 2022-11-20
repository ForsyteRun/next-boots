import { FC, useState } from "react";
import { CardType } from "../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import s from "./../styles/CardItem.module.scss";
import unLike from "public/card/unLike.png";
import like from "public/card/like.png";
import add from "public/card/add.svg";
import notAdd from "public/card/notAdd.svg";

const CardItem: FC<CardType> = ({img, title, price}) => {//todo: 1.add classNames;
  const [favorite, setFavorite] = useState<boolean>(false)
  const [takeCard, setTakeCard] = useState<boolean>(false)

  return (
    <Card className={s.conteiner} sx={{':hover': {transform: 'translateY(-0.5px)', boxShadow: '7px 7px 15px #999'}}}>
      <CardContent className={s.content}>
      <Image  onClick={()=>setFavorite(!favorite)} className={s.like} src={favorite ? like : unLike} alt="like" />
        <Image src={img} width={133} height={114} alt="card" />
        <p className={s.title}>{title}</p>
        <div className={s.titlePrice}>цена</div>
        <p className={s.price}>{price} uah</p>
        <Image onClick={()=>setTakeCard(!takeCard)} className={s.add} src={takeCard ? notAdd : add} alt="add" />
      </CardContent>
    </Card>
  );
};

export default CardItem;
