import React, { useEffect, useState } from 'react'
import useStyles from '../utils/styles'
import FormLeft from './formLeft'
import { ethers } from 'ethers'
import FormRight from './formRight'
// import {create} from 'ipfs-http-client';
import IPFS from '../utils/ipfs'
import data from '../utils/data'
import Campaign from '../artifacts/contracts/Funding.sol/Campaign.json'
let img;
export default function Form() {
  const address="0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const ipfsFunc = IPFS();
  // const ipfs = create({
  //   host:"ipfs.infura.io",
  //   port:5001,
  //   protocol:'https'
  // })
  // ipfs.addAll(data.products.toString,(err,hash)=>{
  //   if(err){
  //     console.log(err)
  //   }
  //   console.log("https://localhost:5001/ipfs/"+hash);
  // })
  let options={
    wrapWithDirectory:true,
    progress:(prog)=>{console.log(`Saved: ${prog}`)}
  }
  async function result(){
    if(window.ethereum){
      const provider= new ethers.providers.Web3Provider(window.ethereum);
      const Contract= new ethers.Contract(address,Campaign.abi,provider.getSigner());
      const CampaignCreation=await Contract.CreateCampaign(rAmount);
      let account = await window.ethereum.request({
        method:"eth_requestAccounts",
      }).then((result)=>{
        return result[0];
      })
      const getCampaignCreation= await Contract.filters.CampaignEvent();
      let events= await Contract.queryFilter(getCampaignCreation);
      let list = await Contract.mapped(account).then((result)=>console.log(parseInt(result)))
      data.products.push({
        id:5,
        name: campaignName,
        slug: slug,
        category: category,
        image: img,
        owner_address:account,
        Story: story    })
      
    }
    let content=await JSON.stringify(data);
    let result = await ipfsFunc[1]({content:content,options});
  }
  
  const classes = useStyles();
  const [campaignName,setCampaignName]=useState('');
  const [rAmount,setRAmount]=useState(0);
  const [slug,setSlug]=useState('');
  const [category,setCategory]=useState('');
  const [story,setStory]=useState('');
  const handleName=(e)=>{
    setCampaignName(e.target.value);
  }
  const handleAmount=(e)=>{
    setRAmount(e.target.value);
  }
  const handleImg=(e)=>{
    img=e.target.value;
  }
  const handleSlug=(e)=>{
    setSlug(e.target.value);
  }
  const handleCategory=(e)=>{
    setCategory(e.target.value);
  }
  const handleStory=(e)=>{
    setStory(e.target.value);
  }
  return (<>
    <div className={classes.Form}>
        <div>
            <h3>Campaign Name:</h3>
                <input type="text" onChange={()=>handleName(event)}/>
                <h3>Required Amount(in eth):</h3>
                <input type="number" onChange={()=>handleAmount(event)}/>
                <h3>Image URL:</h3>
                <input type="text"  onChange={()=>handleImg(event)}/>
                <h3>Slug(url-tag):</h3>
                <input type="text" onChange={()=>handleSlug(event)}/>
                <div className={classes.grow}></div>
                <button classes={classes.nav_button} onClick={()=>{result()}}>Submit</button>
    
        </div>
        <div>
            <h3>Category:</h3>
            <input type="text" onChange={()=>handleCategory(event)}/>
            <h3>Story:</h3>
            <textarea onChange={()=>handleStory(event)}></textarea>
        </div>
        </div>
    </>
  )
}

