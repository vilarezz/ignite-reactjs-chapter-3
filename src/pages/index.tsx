import { GetStaticProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from '../styles/pages/home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | Neji.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section>
          <div className={styles.hero}>
            <span>👏 Olá, seja bem-vindo</span>
            <h1>
              Todas as <span>novidades</span> na palma da sua mão.
            </h1>
            <p>
              Veja notícias, memes, vídeos, postagens de vários blogs angolanos
              em um só sítio. <br />
              <span>Por apenas {product.amount} kz/mês.</span>
            </p>
            <SubscribeButton priceId={product.priceId} />
          </div>
          <img src="/images/avatar.svg" alt="Girl Coding" />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IsQfCJpZQjHa1a6Tdrh4aoG')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'AOA'
    })
      .format(price.unit_amount / 100)
      .replace(/[a-z]{3}/i, '')
      .trim()
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
