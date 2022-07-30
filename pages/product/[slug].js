import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import data from '../../utils/data';
import { ethers } from 'ethers'
import Campaign from '../../artifacts/contracts/Funding.sol/Campaign.json'
import { Card,CardMedia, Typography, useEventCallback } from '@material-ui/core';
import useStyles from '../../utils/styles';
import { motion } from 'framer-motion'

export default function ProductScreen() {
  const classes=useStyles();
  let [amountleft,setAmountleft]=useState();
  let [amountD,setAmountD]=useState();
  const [buttonContent,setButtonContent]=useState('Click to see the Amount Required');
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find((a)=>a.slug==slug)
    if(!product || data==undefined){
        return(<div>FundPage Not Found</div>)
    }
    else{
      const address="0x5FbDB2315678afecb367f032d93F642f64180aa3";
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
    const connectContract=()=>{
      setButtonContent("Amount Required:")
      const provider= new ethers.providers.Web3Provider(window.ethereum);
      const Contract= new ethers.Contract(address,Campaign.abi,provider.getSigner());
      const getCampaignCreation= Contract.filters.CampaignEvent();
      let events= Contract.queryFilter(getCampaignCreation);
      events.then((result)=>{
        for(var i=0;i<result.length;i++){
        setAmountleft(parseInt(result[i].args.amountLeft))
      }
    });
    }
    const Donate= ()=>{
      const provider= new ethers.providers.Web3Provider(window.ethereum);
      const Contract= new ethers.Contract(address,Campaign.abi,provider.getSigner());
      provider.getSigner().sendTransaction({to:product.owner_address,value:ethers.utils.parseEther(amountD, 'ether')});
      const Donation=  Contract.donate(product.owner_address,amountD);
      const getDonation=  Contract.filters.CampaignEvent();
      let events=  Contract.queryFilter(getDonation);
      events.then((result)=>{
        alert("Donation has been made");
        for(var i=0;i<result.length;i++){
        setAmountleft(parseInt(result[i].args.amountLeft))
        } 
      });
      }
    const AccountValueManager=(value)=>{
      setAmountleft('\n'+value+'eth');
    }
    const handleDAmount=(e)=>{
      setAmountD(e.target.value);
    }
  return (
    <div>
      <Header/>
      <div className={classes.Title}>
          <h1>{product.name}</h1>
      </div>
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
      <div className={classes.container}>
      <motion.li  className="item" variants={item} >
        <div className={classes.Page_Left}>
          <Card>
          <CardMedia component="img" image={product.image} title={product.name}/>
          <Typography><h2>About the Fundraiser</h2></Typography>
          <Typography><h3>CATEGORY:{product.category}</h3></Typography>
          <Typography><h3>{product.Story}</h3></Typography>
          </Card>
        </div>
        </motion.li>
        <motion.li  className="item" variants={item} >
        <div className={classes.Page_Right}>
          <h2 onClick={connectContract}>{buttonContent}{amountleft}</h2>
          <form>
            <h3>Amount to donate:(in eth):</h3>
            <input className={classes.InputField} onChange={()=>{handleDAmount(event)}} type="number"/>
            <div className={classes.button} onClick={Donate}><h3>Contribute</h3></div>
          </form>
        </div>
      </motion.li>
      </div>
      </motion.ul>
    </div>
  )
  }
}
export async function getProps(){
  
}