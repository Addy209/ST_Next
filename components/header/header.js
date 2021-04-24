import React from 'react'
import {Box,Text} from '@chakra-ui/react'
import {Link} from 'next/link'
import styles from './header.module.css'
import {RiHome3Fill} from 'react-icons/ri'
import {ImBooks} from 'react-icons/im'
import {IoGrid} from 'react-icons/io5'
import {IoMdText} from 'react-icons/io'

const Header=props=>{
    return (
      <nav id={styles.nav}>
          <div id={styles.logo}>
      <Text
  bgGradient="linear(to-tl, #283c86,#45a247)"
  bgClip="text"
  fontSize="4xl"
  fontWeight="extrabold"
>
  Samidha Tech
</Text>
</div>
<div>
    <ul id={styles.ul}>
        <li id={styles.li}><a id={styles.a} href='#1'><span id={styles.span1}><RiHome3Fill id={styles.icon1} fill="#159957" /> Home</span></a></li>
        <li id={styles.li}><a id={styles.a} href='#2'><span id={styles.span1}><ImBooks id={styles.icon1} fill="#155799" /> About</span></a></li>
        <li id={styles.li}><a id={styles.a} href='#3'><span id={styles.span1}><IoGrid id={styles.icon1} fill="#EB5757" /> Portfolio</span></a></li>
        <li id={styles.li}><a id={styles.a} href='#4'><span id={styles.span1}><IoMdText id={styles.icon1} fill="#FF8235" /> Contact</span></a></li>
    </ul>
</div>
</nav>)
}

export default Header