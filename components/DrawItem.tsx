import { Box, Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { FC } from "react";
import { CardType } from "../types/types";
import s from "./../styles/DrawItem.module.scss";
import ClearIcon from "@mui/icons-material/Clear";

const DrawItem: FC<CardType> = ({ img, title, price }) => {

  return (
    <Card className={s.conteiner} >
      <CardContent className={s.content}>
        <Image src={img} width={70} height={70} alt="cardDraw" />
        <Box sx={{flexGrow: 1}}>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price} uah</p>
        </Box>
        <ClearIcon />
      </CardContent>
    </Card>

  );
};

export default DrawItem;
