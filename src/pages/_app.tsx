import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { Header } from '../components/Header'

import '../styles/global.scss'
import '../styles/hamburger.css'
import pages from '.'

function MyApp({ Component, pageProps }: AppProps) {
  // const warningTitleCSS =
  //   'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;'
  // const warningDescCSS = 'font-size: 18px;'

  // console.log('%cEspere!', warningTitleCSS)
  // console.log(
  //   '%cEste é um recurso de navegador voltado para desenvolvedores. Se alguém disse para você copiar e colar algo aqui para ativar um recurso da Numviste ou "invadir" a conta de outra pessoa, isso é uma fraude e você dará a ele acesso à sua conta.',
  //   warningDescCSS
  // )

  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
