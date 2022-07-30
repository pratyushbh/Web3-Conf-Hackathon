import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layouts'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import data from '../utils/data'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { dbref } from '../utils/firebase'
import { get } from 'firebase/database'
import IPFS from '../utils/ipfs'
import useStyles from '../utils/styles'
const ipfsFunc= IPFS();
let sampdata= JSON.stringify(data);
export default function Home() {
  const classes=useStyles();
  const getData=()=>{
      get(dbref).then(async (snapshot)=>{
          let results= await ipfsFunc[0].cat(snapshot.val().hash);
          for await(const data of results){
            handleProducts(Buffer.from(data).toString());
        }
      })
  }
  let dat
  useEffect(()=>{
    getData();
  },[])
  function handleProducts(value){
    dat= value;
    if(dat!=undefined){
      data=JSON.parse(dat);
    }
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className={styles.container}>
      <Header/>
      <Layout>
        <h1 className={classes.index_title}>Campaign</h1>
        <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
    <Grid className='gridList' container spacing={3}>
          {data.products.map((product)=>{
            return(
            <Grid item md={4} key={product.name}>
              <motion.li className="item" variants={item} >
              <Card>
                <Link href={`/product/${product.slug}`}>
                <CardActionArea>
                  <CardMedia component="img" image={product.image} title={product.name}/>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                </Link>
                <Typography>by:{product.owner_address}</Typography>
              </Card>
              </motion.li>
            </Grid>)
          })}
        </Grid>
        </motion.ul>
      </Layout>
      
    </div>
  )
        
}
