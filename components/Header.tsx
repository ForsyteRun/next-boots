import { Badge, Stack } from "@mui/material";
import Image from "next/image";
import { FC, useContext, useState } from "react";
import logo from "./../public/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import s from "./../styles/Header.module.scss";
import Draw from "./Draw";
import { CardType } from "../types/types";
import { Context } from "./AppContext";
import Link from "next/link";

const Header: FC = () => {  //todo: 1.Stack to components; 2.memo; 3.add classNames to Stack

  const { item, shop, setShop, order } = useContext(Context);

  const countAddDrawItem = item.filter((el: CardType) => el.chacked === true).length;
  const countAddFavoriteItem = item.filter((el: CardType) => el.like === true).length;

  return (
    <header>
      <Stack direction={"row"} className={s.conteiner}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Stack className={s.headerCenter}>
          <h3 className={s.title}>REACT SNEAKERS</h3>
          <div className={s.subTitle}>Магазин лучших кроссовок</div>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} width="196px">
          <Stack width="95px" className={s.shop}>
            <div onClick={()=>setShop(!shop)}>
              <Badge badgeContent={countAddDrawItem} color="error">
                <ShoppingCartOutlinedIcon
                  color="primary"
                  sx={{ cursor: "pointer" }}
                />
              </Badge>
            </div>
            <span style={{ marginLeft: "15px" }}>1205uah</span>
          </Stack>
          <Link href="/favorites">
            <Badge badgeContent={countAddFavoriteItem} color="error">
              <FavoriteBorderOutlinedIcon color="primary" />
            </Badge>
          </Link>
          <Link href='/orders'>
            <Badge badgeContent={order ? countAddDrawItem : null} color="error">
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
