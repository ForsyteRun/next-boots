import React, { FC } from "react";
import s from "./../styles/ButtonGreen.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Stack } from "@mui/material";

const ButtonGreen: FC = () => {
  return (
    <>
      <button className={s.btn}>
        <Stack direction='row' justifyContent='center'>
          <span style={{alignSelf: 'center'}}>Оформить заказ</span>
          <ArrowRightAltIcon className={s.arrow}/>
        </Stack>
      </button>
    </>
  );
};

export default ButtonGreen;
