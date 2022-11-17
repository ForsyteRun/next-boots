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
    <Stack direction={"row"} className={s.conteiner}>
      <Image src={logo} alt='logo' />
      <Stack className={s.headerCenter}>
        <h3 className={s.title}>REACT SNEAKERS</h3>
        <div className={s.subTitle}>Магазин лучших кроссовок</div>
      </Stack>
      <Stack direction={"row"} justifyContent={'space-between'} width='196px'>
        <Stack width='95px' className={s.shop}>
          <ShoppingCartOutlinedIcon color="primary"/>
          <span>1205uah</span>          
        </Stack>
        <FavoriteBorderOutlinedIcon color="primary"/>
        <AccountCircleOutlinedIcon color="primary"/>
      </Stack>
    </Stack>
   </header>
  )
}

export default Header