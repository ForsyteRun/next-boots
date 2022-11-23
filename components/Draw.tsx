import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";

type PropsType = {
  shop: boolean;
  setShop: (el: boolean) => void;
  item: any
};

const Draw: React.FC<PropsType> = ({ shop, setShop, item }) => {//todo: - toggleDrawer in ternar operator; - div after return; - memo

  const toggleDrawer = (ancor: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
              <Box sx={{ width: 500, p: 2}} role="presentation">
                <h2>Корзина</h2>
                {item && item.map((el: any) => <p key={el.id}>{el.title}</p> )}
              </Box>
            </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
};

export default Draw;
