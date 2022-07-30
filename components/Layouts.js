import React from 'react'
import Head from 'next/head'
import {AppBar,Typography,Container,Toolbar} from '@material-ui/core'
import Link from 'next/link'
import useStyles from '../utils/styles'
import { ethers } from 'ethers'

export default function Layout({children}){
    const classes = useStyles();
    return(<div>
        <Container className={classes.main}>{children}</Container>
        <footer>
            <Typography>All rights reserved</Typography>
        </footer>
    </div>)
}