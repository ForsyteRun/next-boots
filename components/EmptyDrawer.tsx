import { Stack } from "@mui/material"
import Image from "next/image"
import s from './../styles/EmptyDrawer.module.scss'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { FC, useContext } from "react";
import { Context, ContextType } from "./AppContext";
import { useRouter } from "next/router";

type PropsType = {
  path: string
  title: string
  subTitle: string
  bigSize?: boolean
  btnBack?: boolean
}

const EmptyDrawer: FC<PropsType> = ({path, title, subTitle, bigSize, btnBack}) => {
  const {setShop} = useContext<ContextType>(Context)
  const router = useRouter()

  return (
    <Stack className={bigSize ? s.bigConteiner  : s.conteiner}>
       <Image src={path} width={bigSize ? 70 : 120} height={bigSize ? 70 : 120} alt='empty drawer' className={s.empty}/>
       <h3>{title}</h3>
       <h5>{subTitle}</h5>
       <button className={s.btn} onClick={ btnBack ? ()=>router.push('/') : ()=>setShop(false)}>
        <Stack direction='row' justifyContent='center'>
          <KeyboardBackspaceIcon className={s.arrow}/>
          <span style={{alignSelf: 'center'}}>Вернуться назад</span>
        </Stack>
      </button>
    </Stack>
  )
}

export default EmptyDrawer