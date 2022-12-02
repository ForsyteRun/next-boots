import { Box, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { FC, useContext } from "react";
import { CardType } from "../types/types";
import s from "./../styles/DrawItem.module.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { Context } from "./AppContext";

type PropsType = {
  el: CardType
}

const DrawItem: FC<PropsType> = ({el}) => {
  const {price, title, img} = el
  const {onRemoveDrawerItem} = useContext(Context)

  return (
    <Card className={s.conteiner} >
      <CardContent className={s.content}>
        <Image src={img} width={70} height={70} alt="cardDraw" />
        <Box sx={{flexGrow: 1}}>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price} uah</p>
        </Box>
        <ClearIcon 
        className={s.removeBtn}
        onClick={() => onRemoveDrawerItem(el)}/>
      </CardContent>
    </Card>
  );
};

export default DrawItem;
