import React, { FC } from "react";
import s from "./../styles/DrawerFooter.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Stack } from "@mui/material";
import ButtonGreen from "./ButtonGreen";

const DrawerFooter: FC = () => {
  return (
    <div className={s.conteiner}>
      <Stack direction='row' sx={{marginBottom: '20px'}}>
        <span>Итого:</span>
        <div className={s.doted}></div>
        <span>0 uah</span>
      </Stack>
      <Stack  direction='row'  sx={{marginBottom: '15px'}}>
        <span>Налог 5%:</span>
        <div className={s.doted}></div>
        <span>0 uah</span>
      </Stack>
      <ButtonGreen/>
    </div>
  );
};

export default DrawerFooter;
