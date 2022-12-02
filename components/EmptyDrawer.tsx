import { Stack } from "@mui/material"
import Image from "next/image"
import s from './../styles/EmptyDrawer.module.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FC } from "react";

type PropsType = {
  setShop: (el: boolean) => void
}

const EmptyDrawer: FC<PropsType> = ({setShop}) => {

  return (
    <Stack className={s.conteiner}>
       <Image src='/card/empty.jpg' width={120} height={120} alt='empty drawer' className={s.empty}/>
       <h3>Корзина пустая</h3>
       <h5>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</h5>
       <button className={s.btn} onClick={()=>setShop(false)}>
        <Stack direction='row' justifyContent='center'>
          <KeyboardBackspaceIcon className={s.arrow}/>
          <span style={{alignSelf: 'center'}}>Вернуться назад</span>
        </Stack>
      </button>
    </Stack>
  )
}

export default EmptyDrawer