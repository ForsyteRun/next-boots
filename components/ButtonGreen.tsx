import React, { useContext } from "react";
import s from "./../styles/ButtonGreen.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, Stack } from "@mui/material";
import { Context, ContextType } from "./AppContext";

const ButtonGreen = () => {
  const {finishOrders, disBtn} = useContext<ContextType>(Context)
  
  return (
    <>
      <Button onClick={()=>finishOrders()} className={s.btn} disabled={disBtn}>
        <Stack direction='row' justifyContent='center'>
          <span style={{alignSelf: 'center'}}>Оформить заказ</span>
          <ArrowRightAltIcon className={s.arrow}/>
        </Stack>
      </Button>
    </>
  );
};

export default ButtonGreen;
