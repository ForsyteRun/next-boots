import { FC, useContext, useState } from "react";
import { CardType } from "../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import s from "./../styles/CardItem.module.scss";
import unLike from "public/card/unLike.png";
import like from "public/card/like.png";
import add from "public/card/add.svg";
import notAdd from "public/card/notAdd.svg";
import { Context } from "./AppContext";

type PropsType = {
  card: CardType
}

const CardItem: FC<PropsType> = ({card}) => {//todo: 1.add classNames;
  const {chacked, img, title, price} = card;
  
  const [favorite, setFavorite] = useState<boolean>(false)
  const [drawerItem, setDrawerItem] = useState<boolean>(false)
  
  const {onAddDrawerItem, onRemoveDrawerItem} = useContext(Context)

  const toogleBtn = () => {
    setDrawerItem(!drawerItem)
    drawerItem ? onRemoveDrawerItem(card) : onAddDrawerItem(card)
  }
  
  return (
    <Card className={s.conteiner} sx={{':hover': {transform: 'translateY(-0.5px)', boxShadow: '7px 7px 15px #999'}}}>
      <CardContent className={s.content}>
      <Image  onClick={()=>setFavorite(!favorite)} className={s.like} src={favorite ? like : unLike} alt="like" />
        <Image src= {img} width={133} height={114} alt="card" />
        <p className={s.title}>{title}</p>
        <div className={s.titlePrice}>цена</div>
        <p className={s.price}>{price} uah</p>
        <Image onClick={toogleBtn} className={s.add} src={chacked ? notAdd : add} alt="add" />
      </CardContent>
    </Card>
  );
};

export default CardItem;
