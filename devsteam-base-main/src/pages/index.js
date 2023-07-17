
import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/index.module.css'
import NavBar from '@/components/navBar/navBar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'


export default function Home() {
  const [cart,setCart] = useState([])


  const handleAddProduct = (info) => {
    setCart([...cart,info])/*Vai adicionar no carrinho o produto, cart é o carrinho, info é o produto*/
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj,posObj) => posObj !== pos))

  }




  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <NavBar cart = {cart} onRemove = {handleRemoveProduct}/>
        <Container>
          <div className={styles.session}>
          <Subtitle>Promoções</Subtitle>
          

          <div className={styles.saleContainer}>
            <SaleCard image={'league-of-legends.jpg'} discount={'10%'} fullPrice={'99,90'} discountPrice={'89,90'} onAdd={() => handleAddProduct({name: 'league-of-legends', price: 99.9, image: 'league-of-legends.jpg'})}/>

            <SaleCard image={'valorant.jpg'} discount={'30%'} fullPrice={'250,00'} discountPrice={'175,00'} onAdd={() => handleAddProduct({name: 'valorant', price: 175.0, image: 'valorant.jpg'})}/>

            <SaleCard image={'dota-2.jpg' } discount={'40%'} fullPrice={'600,00'} discountPrice={'360,00'} onAdd={() => handleAddProduct({name: 'dota-2', price: 360.0, image: 'dota-2.jpg'})}/>
          </div>
          </div>
          
        <div className={styles.session}>
          <Subtitle>Outros jogos</Subtitle>
          <div className={styles.gameContainer}>
            <GameCard onAdd={() => handleAddProduct({name: 'counter-strike', price: 99.90, image: 'counter-strike.jpg'})}/>
            
          </div>
        </div>
        </Container>
      </div>
    </>
  )
}
