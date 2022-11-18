import { FC } from "react";
import { CardType } from "../types/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Image from "next/image";
import s from "./../styles/CardItem.module.scss";
import like from "public/card/like.svg";
import add from "public/card/add.svg";

type PropsType = {
  card: CardType;
};

const CardItem: FC<PropsType> = ({ card }) => {
  return (
    <Card className={s.conteiner} sx={{':hover': {transform: 'translateY(-0.5px)', boxShadow: '7px 7px 15px #999'}}}>
      <CardContent className={s.content}>
      <Image
            className={s.like}
            src={like}
            alt="like"
          />
        <Image src={card.img} width={133} height={114} alt="card" />
        <h4 className={s.title}>{card.title}</h4>
        <div className={s.titlePrice}>цена</div>
        <p className={s.price}>{card.price} uah</p>
        <Image className={s.add} src={add} alt="add" />
      </CardContent>
    </Card>
  );
};

export default CardItem;
