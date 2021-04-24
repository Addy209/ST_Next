import React, { useState, useEffect } from 'react'; // requires a loader
import {Box, AspectRatio, Image,Heading,Text  } from '@chakra-ui/react'
import styles from './header/header.module.css'
import {Carousel} from 'react-bootstrap'

const MainCarousel =()=>{
    const data=[
            {
                image:'./1.jpg',
                head:'Example Head 1',
                subhead:'Example Sub Head 1'
            },
            {
                image:'./2.jpg',
                head:'Example Head 2',
                subhead:'Example Sub Head 2'
            },
            {
                image:'./4.jpg',
                head:'Example Head 3',
                subhead:'Example Sub Head 3'
            }
        ]

    const [renderObj,setRenderObj]=useState(data[0])
    const [index,setIndex]=useState(0)

    setInterval(()=>{
        const i=(index+1)%3
        setRenderObj(data[i])
        setIndex(i)
    },3000)
    
        return (
            <div id='1' className={styles.car_div}>
            <Carousel>
  <Carousel.Item>
      <AspectRatio maxW="100%" ratio={20.5 / 9}>
    <img
      className={styles.img}
      src={data[0].image}
      alt="First slide"
    />
    </AspectRatio>
    <Carousel.Caption id={styles.caption}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <AspectRatio maxW="100%" ratio={20.5 / 9}>
    <img
      className={styles.img}
      src={data[1].image}
      alt="Second slide"
    />
    </AspectRatio>
    <Carousel.Caption id={styles.caption}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <AspectRatio maxW="100%" ratio={20.5 / 9}>
    <img
      className={styles.img}
      src={data[2].image}
      alt="Third slide"
    />
    </AspectRatio>
    <Carousel.Caption id={styles.caption}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        )
            
    }
export default MainCarousel;