import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { CardType } from "../types/types";
import s from "./../styles/DrawItem.module.scss";
import ClearIcon from "@mui/icons-material/Clear";

type PropsType = {
  onRemoveDrawerItem: (obj: CardType) => void;
  el: CardType
}

const DrawItem: FC<PropsType> = ({ el, onRemoveDrawerItem}) => {

  return (
    <Card className={s.conteiner} >
      <CardContent className={s.content}>
        <Image src={el.img} width={70} height={70} alt="cardDraw" />
        <Box sx={{flexGrow: 1}}>
          <p className={s.title}>{el.title}</p>
          <p className={s.price}>{el.price} uah</p>
        </Box>
        <ClearIcon 
        className={s.removeBtn}
        onClick={() => onRemoveDrawerItem(el)}/>
      </CardContent>
    </Card>
  );
};

export default DrawItem;
