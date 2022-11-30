import { Box, Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { FC } from "react";
import { CardType } from "../types/types";
import s from "./../styles/DrawItem.module.scss";
import ClearIcon from "@mui/icons-material/Clear";

type PropsType = {
  onRemoveCardDrawer: (el: number) => void;
  el: CardType
}

const DrawItem: FC<PropsType> = ({ el, onRemoveCardDrawer}) => {

  return (
    <Card className={s.conteiner} >
      <CardContent className={s.content}>
        <Image src={el.img} width={70} height={70} alt="cardDraw" />
        <Box sx={{flexGrow: 1}}>
          <p className={s.title}>{el.title}</p>
          <p className={s.price}>{el.price} uah</p>
        </Box>
        <ClearIcon 
        sx={{cursor: 'pointer', '&:hover': { transform: "scale(1.5)", transition: 'all .2s ease-out' }, transition: 'all .2s ease-out'}}
        onClick={() => onRemoveCardDrawer(el.id)}/>
      </CardContent>
    </Card>

  );
};

export default DrawItem;
