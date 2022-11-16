import { Stack } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import logo from './../public/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import s from './../styles/Header.module.scss'

const Header: FC = () => {
  return (
   <header>
    <Stack direction={"row"}>
      <Image src={logo} alt='logo'></Image>
      <Stack className={s.headerCenter}>
        <h3>REACT SNEAKERS</h3>
        <div>Магазин лучших кроссовок</div>
      </Stack>
      <Stack direction={"row"}>
        <ShoppingCartOutlinedIcon/>
        <span>1205uah</span>
        <FavoriteBorderOutlinedIcon/>
        <AccountCircleOutlinedIcon/>
      </Stack>
    </Stack>
   </header>
  )
}

export default Header