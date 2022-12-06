import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider
} from "@mui/material";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import s from "./../styles/App.module.scss";

//todo: Ошибка в консоли по компоненте Main "не верный пропс по id"
//todo: симбиоз с MuiTheme не осуществлен, брейкпоинты. Какой лучше шрифт: Mui or Next.js. Responsive font
//todo: 'жирный' useContext. Не лучше ли подключить Redux.
//todo: React.Memo
//todo: два раза нажимать для смены toogleDrawItem и setFavoriteItem
//todo: при добавлении заказа в компоненте Orders, если элементов больше одного, то они криво отображаются
//todo: не много ли useState?
//todo: ворнинг на experimental feature (fontLoaders) in next.config.js.
//todo: съезжает высота контейнера при добавлении товаров и при правке на странице favorites лезет вверх

const inter = Inter({ subsets: ["latin"] });
declare module "@mui/material/styles" {
  interface Theme {
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }
  interface ThemeOptions {
    breakpoints?: {
      values?: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }
}

interface IThemeOptions extends ThemeOptions {}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1128,
      xl: 1500,
    },
  },
  typography: {
    fontFamily: [].join(","),
  },
  palette: {
    primary: {
      main: "#9D9D9D",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
} as IThemeOptions);

const App = ({ Component, pageProps }: AppProps) => {

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{ minHeight: "100vh" }}
        className={inter.className}
        >
        <Box className={s.wrapper}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </Container>
    </ThemeProvider>
   )
};

export default App;
