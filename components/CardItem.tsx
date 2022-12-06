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
  //todo: 1.add classNames; 2. два раза нажимать для смены toogleDrawItem и setFavoriteItem
  const {chacked, like, img, title, price} = card;
  
  const [drawerItem, setDrawerItem] = useState<boolean>(false)
  const [favorite, setFavorite] = useState<boolean>(false)
  
  const {onAddDrawerItem, onRemoveDrawerItem, onAddFavoriteItem, onRemoveFavoriteItem} = useContext<ContextType>(Context)

  const toogleDrawItem = () => {
    setDrawerItem(!drawerItem)
    drawerItem ? onRemoveDrawerItem(card) : onAddDrawerItem(card)
  }

  const setFavoriteItem = () => {
    setFavorite(!favorite)
    favorite ? onRemoveFavoriteItem(card) : onAddFavoriteItem(card)
  }
  
  
  return (
      <Card className={s.conteiner} sx={{':hover': {transform: 'translateY(-0.5px)', boxShadow: '7px 7px 15px #999'}}}>
      <CardContent className={s.content}>
            {
             disBtn || <Image  onClick={setFavoriteItem} className={s.like} src={like ? liked : unLike} alt="like" />
            }
            <Image src= {img} width={133} height={114} alt="card" />
            <p className={s.title}>{title}</p>
            <div className={s.titlePrice}>цена</div>
            <p className={s.price}>{price} uah</p>
             {
              disBtn || <Image onClick={toogleDrawItem} className={s.add} src={chacked ? notAdd : add} alt="add" />
             }
          </CardContent>
        </Card>
  )
}

export default CardItem;
