import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { useDrawer } from "../hooks/useDrawer";
import { CardType, OrderType } from "../types/types";
import logo from "./../public/logo.png";
import s from "./../styles/Header.module.scss";
import { Context } from "./AppContext";
import Draw from "./Draw";

const Header: FC = () => {  //todo: 1.Stack to components; 2.memo; 3.add classNames to Stack
  const {totalPrice} = useDrawer()
  const { item, shop, setShop, addedOrder } = useContext(Context);

  const countAddDrawItem = item.filter((el: CardType) => el.chacked === true).length;
  const countAddFavoriteItem = item.filter((el: CardType) => el.like === true).length;
  const countAddOrderItem = addedOrder.filter((el: OrderType) => !!el.order).length;

  return (
    <header>
      <Stack direction={"row"} className={s.conteiner}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Stack className={s.headerCenter}>
          <h3 className={s.title}>React Boots</h3>
          <div className={s.subTitle}>Магазин лучших кроссовок</div>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} width="196px">
          <Stack direction={"row"} justifyContent={"space-between"} width="95px" className={s.shop}>
            <div onClick={()=>setShop(!shop)}>
              <Badge badgeContent={countAddDrawItem} color="error">
                <ShoppingCartOutlinedIcon
                  color="primary"
                  sx={{ cursor: "pointer" }}
                />
              </Badge>
            </div>
            <span style={{ marginLeft: "15px" }}>{ totalPrice > 0 && `${totalPrice}uah`}</span>
          </Stack>
          <Link href="/favorites">
            <Badge badgeContent={countAddFavoriteItem} color="error">
              <FavoriteBorderOutlinedIcon color="primary" />
            </Badge>
          </Link>
          <Link href='/orders'>
            <Badge badgeContent={countAddOrderItem} color="error">
              <AccountCircleOutlinedIcon color="primary" />
            </Badge>
          </Link>
        </Stack>
      </Stack>
      <Draw />
    </header>
  );
};

export default Header;
