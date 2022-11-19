import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import s from "./../styles/Draw.module.scss";
import { FormControlLabel, Slide, Switch } from "@mui/material";

type PropsType = {
  shop: boolean;
  setShop: (el: boolean) => void;
};

const Draw: React.FC<PropsType> = ({ shop, setShop }) => {//todo: - toggleDrawer in ternar operator; - div after return; - memo

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

  const list = () => (
    <Box sx={{ width: 500 }} role="presentation">
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <div key={anchor} >
            <SwipeableDrawer
              anchor={anchor}
              open={shop}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              transitionDuration={500}
            >
              {list()}
            </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
};

export default Draw;
