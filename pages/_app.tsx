import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import "../styles/globals.scss";
import s from "./../styles/App.module.scss";
import { Inter } from "@next/font/google";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

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

// theme = responsiveFontSizes(theme)

const App = ({ Component, pageProps }: AppProps) => {

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{ height: "100vh" }}
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
