import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FC, KeyboardEvent, MouseEvent, useState } from "react";
import { CardType } from "../types/types";
import DrawItem from "./DrawItem";
import s from './../styles/Draw.module.scss'
import { Stack } from "@mui/material";
import Image from "next/image";
import EmptyDrawer from "./EmptyDrawer";
import classNames from "classnames";
import DrawerFooter from "./DrawerFooter";

type PropsType = {
  shop: boolean;
  setShop: (el: boolean) => void;
  onRemoveCardDrawer: (el: number) => void;
  item: Array<CardType>
};

const Draw: FC<PropsType> = ({ shop, setShop, item, onRemoveCardDrawer }) => {//todo: - toggleDrawer in ternar operator; - div after return; - memo
  
  const toggleDrawer = (ancor: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setShop(ancor);
    };

    const itemData = item.length > 0;

  return (
    <div >
      {(["right"] as const).map((anchor) => (
        <div key={anchor} >
            <SwipeableDrawer
              anchor={anchor}
              open={shop}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              transitionDuration={500}
            >
              <Stack className={classNames(s.content, {[s.contentEmpty]: !itemData})} role="presentation" direction='column'>
                <h2 className={s.title}>Корзина</h2>
                <Box className={itemData ? s.itemTrue : s.itemFalse}>
                  {itemData 
                  ? item.map((el: CardType) => <DrawItem el={el} key={el.id} onRemoveCardDrawer={onRemoveCardDrawer}/>) 
                  : <EmptyDrawer/>
                  }
                </Box>
                 {itemData 
                 ? <DrawerFooter />
                 : <span style={{opacity: 0}}>1</span>}
              </Stack>
            </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
};

export default Draw;
