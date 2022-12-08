import { Stack } from "@mui/material";
import { useContext } from "react";
import { Context, ContextType } from "../components/AppContext";
import CardItem from "../components/CardItem";
import EmptyDrawer from "../components/EmptyDrawer";
import { CardType, OrderType } from "../types/types";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

const Orders = () => {
  const { addedOrder, loading } = useContext<ContextType>(Context);
  
  return (
    <>
      <Head>
         <title>Orders</title>
         <meta name="description" content="Orders" />
      </Head>
      {/* крутилка перед загрузкой */}
      {loading && 
        <Stack justifyContent='center' alignItems='center' sx={{height: '100%'}}>
          <CircularProgress size={100}/> 
        </Stack>
      }
      {addedOrder.length > 0 
      ? //подъём массива в массиве на уровень вверх
        <Stack direction="row" flexWrap="wrap" gap="20px">
          {addedOrder.map((el:OrderType) => el.content).flat().map((obj: CardType) => 
            <CardItem card={obj} key={obj.id} disBtn={true} />)
          }
        </Stack>
      : <EmptyDrawer
          btnBack
          bigSize
          path="/sleepSmile.png"
          title="У вас нет заказов"
          subTitle="Вы нищеброд? Оформите хотя бы один заказ."
        />
      }
    </>
  );
};

export default Orders;
