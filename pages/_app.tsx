import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Box, Container,CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
declare module '@mui/material/styles' {
  interface Theme {
    breakpoints: {
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number    
     }
   }
  }
   interface ThemeOptions {
    breakpoints?: {
      values?: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number    
      }
    }
  }
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1080,
      xl: 1500
    }, 
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Box sx={{ bgcolor: "#ffff", height: "100vh" }}>
          <Layout>
            <main>
              <Component {...pageProps} />
            </main>
          </Layout>
        </Box>
      </Container>         
      </ThemeProvider>
    </>
  );
};

export default App;
