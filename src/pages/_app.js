import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'

import GlobalStyle from '../assets/styles/global'
import Header from '../components/Header'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer/>
    </>
  )
}