import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroImage from '../components/carousel'
import Header from '../components/header/header'
import MainCarousel from '../components/carousel'
import About from '../components/about/about'
import Portfolio from '../components/Portfolio/portfolio'
import {AspectRatio} from '@chakra-ui/react'


import {Box,Text} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <About />
      <Portfolio />
      </>   )
}
