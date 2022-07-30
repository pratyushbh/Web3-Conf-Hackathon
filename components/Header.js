import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {AppBar,Typography,Container,Toolbar} from '@material-ui/core'
import Link from 'next/link'
import useStyles from '../utils/styles'
import { m, motion } from 'framer-motion'
import { ethers } from 'ethers'

export default function Header() {
  const classes = useStyles();
  let [connected,setConnected]=useState('Connect');
  async function requestAccount(){
    if(window.ethereum){
     try{
       const account = await window.ethereum.request({
         method:"eth_requestAccounts",
       }).then((result)=>{
         console.log(result[0]);
         setConnected(`Wallet:${result[0]}`);
       });
       alert("Wallet is Connected!");
     } catch(error){
       console.log(error);
     }
    }
  }

  return (
    <div>
      
        <Head>
            <title>CrowdFunding Web3</title>
        </Head>
       
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                <Link href="/">
                <motion.div initial={{ x:0,opacity:0 }} animate={{ x:20,opacity:1  }}>
                  <Typography>CrowdFunding</Typography>
                  </motion.div>
                </Link>
                <div className={classes.grow}></div>
                <div className={classes.nav_link}>
                <Link href="/Create_Campaign"><Typography>Create_campaign</Typography></Link>
                </div>
                <div className={classes.grow}></div>
                <div className={classes.nav_link}>
                <button className={classes.nav_button} onClick={()=>{requestAccount()}}><Typography>{connected}</Typography></button>
                
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}
