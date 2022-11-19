import { Stack } from "@mui/material"
import Image from "next/image"
import { FC, useState} from "react"
import logo from './../public/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import s from './../styles/Header.module.scss'
import Draw from "./Draw";

const Header: FC = () => {//todo: 1.Stack to components; 2.memo; 3.add classNames to Stack
  const [shop, setShop] = useState<boolean>(false)

  //appear modal window drawer right side
  const drawerToogle = () => {
    setShop(!shop)
}

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
          <div onClick={drawerToogle} >
            <ShoppingCartOutlinedIcon color="primary" sx={{cursor: 'pointer'}}/>  
          </div>
          <span>1205uah</span>          
        </Stack>
        <FavoriteBorderOutlinedIcon color="primary"/>
        <AccountCircleOutlinedIcon color="primary"/>
      </Stack>
    </Stack>
    <Draw setShop={setShop} shop={shop}/>
   </header>
  )
}

export default Header