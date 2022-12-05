import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import classNames from "classnames";
import { KeyboardEvent, MouseEvent, useContext, useState } from "react";
import { CardType } from "../types/types";
import s from './../styles/Draw.module.scss';
import { Context, ContextType } from "./AppContext";
import DrawerFooter from "./DrawerFooter";
import DrawItem from "./DrawItem";
import EmptyDrawer from "./EmptyDrawer";

const Draw = () => {//todo: - memo
  const {item, shop, order,addedOrder, setShop} = useContext<ContextType>(Context)

  const itemData = item.find((el: CardType)=> el.chacked === true)

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
              <Stack className={classNames(s.content, {[s.contentEmpty]: !itemData || order})} role="presentation" direction='column'>
              <h2 className={s.title}>Корзина</h2>
              <>
                  <Box className={itemData ? s.itemTrue : s.itemFalse}>
                    {itemData
                    ? item.filter((el: CardType)=> el.chacked === true).map((el: CardType) => <DrawItem el={el} key={el.id}/> ) 
                    : <EmptyDrawer 
                    path={order ? '/orderDone.jpg' : '/card/empty.jpg'} 
                    title={order ? `Заказ #  принят!` : 'Корзина пустая'} 
                    subTitle={order ? 'Заказ в обработке' : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'}
                    />}
                  </Box>
                  {itemData
                  ? <DrawerFooter />
                  : <span style={{opacity: 0}}>1</span>}
                </>
              </Stack>
            </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
};

export default Draw;
