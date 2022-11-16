import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import s from "./../styles/App.module.scss";
import { Inter } from "@next/font/google";

const inter = Inter();
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
} as IThemeOptions);

// theme = responsiveFontSizes(theme)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box className={s.wrapper}>
            <Layout>
              <main>
                <Component {...pageProps} />
              </main>
            </Layout>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
