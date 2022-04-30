import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app'

const darkTheme = createTheme({});

function RepeatedCardSystem({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default RepeatedCardSystem
