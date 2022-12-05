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
      {loading 
      ? <Stack justifyContent='center' alignItems='center' sx={{height: '100%'}}>
          <CircularProgress size={100}/> 
        </Stack>
      : (addedOrder.length 
        ? (
        <Stack direction="row" flexWrap="wrap" gap="20px">
          {addedOrder.map((el: OrderType) => (
            <div key={el.order}>
              {el.content?.map((card: CardType) => (
                <CardItem card={card} key={card.id} disBtn={true} />
              ))}
            </div>
          ))}
        </Stack>) 
        : (
        <EmptyDrawer
          btnBack
          bigSize
          path="/sleepSmile.png"
          title="У вас нет заказов"
          subTitle="Вы нищеброд? Оформите хотя бы один заказ."
        />
      ))}
    </>
  );
};

export default Orders;
