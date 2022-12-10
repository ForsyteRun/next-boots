import { FC, useContext, useState } from "react";
import { CardType } from "../types/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import s from "./../styles/CardItem.module.scss";
import unLike from "public/card/unLike.png";
import liked from "public/card/liked.png";
import add from "public/card/add.svg";
import notAdd from "public/card/notAdd.svg";
import { Context, ContextType } from "./AppContext";

type PropsType = {
  card: CardType
  disBtn?: boolean
}

const CardItem: FC<PropsType> = ({card, disBtn = false}) => {
  const {chacked, like, img, title, price} = card;

  console.log(`${card.id}, chacked = ${chacked}, like = ${like}`)

  const [drawerItem, setDrawerItem] = useState<boolean>(!chacked)
  const [favorite, setFavorite] = useState<boolean>(!like)
  
  const {onAddDrawerItem, onRemoveDrawerItem, onAddFavoriteItem, onRemoveFavoriteItem} = useContext<ContextType>(Context)

  //toogle btn addToCard in back and front
  const toogleDrawItem = () => {
    setDrawerItem(prev => !prev)
    drawerItem ? onAddDrawerItem(card) : onRemoveDrawerItem(card)
  }

  //toogle btn addToFavorite in back and front
  const setFavoriteItem = () => {
    setFavorite(prev => !prev)
    favorite ? onAddFavoriteItem(card) : onRemoveFavoriteItem(card)
  }
  
  return (
      <Card className={s.conteiner}>
      <CardContent className={s.content}>
            {disBtn || <Image  onClick={setFavoriteItem} className={s.like} src={like ? liked : unLike} alt="like" />}
            <Image src= {img} width={133} height={114} alt="card" />
            <p className={s.title}>{title}</p>
            <div className={s.titlePrice}>цена</div>
            <p className={s.price}>{price} uah</p>
             {disBtn || <Image onClick={toogleDrawItem} className={s.add} src={chacked ? add : notAdd} alt="add" />}
          </CardContent>
        </Card>
  )
}

export default CardItem;
