import React, { useContext } from "react";
import s from "./../styles/DrawerFooter.module.scss";
import { Stack } from "@mui/material";
import ButtonGreen from "./ButtonGreen";
import { Context } from "./AppContext";
import { useDrawer } from "../hooks/useDrawer";

const DrawerFooter = () => {
  const {totalPrice} = useDrawer()

  return (
    <div className={s.conteiner}>
      <Stack direction='row' sx={{marginBottom: '20px'}}>
        <span>Итого:</span>
        <div className={s.doted}></div>
        <span>{totalPrice} uah</span>
      </Stack>
      <Stack  direction='row'  sx={{marginBottom: '15px'}}>
        <span>Налог 5%:</span>
        <div className={s.doted}></div>
        <span>{Math.floor(totalPrice/100*5)} uah</span>
      </Stack>
      <ButtonGreen />
    </div>
  );
};

export default DrawerFooter;
