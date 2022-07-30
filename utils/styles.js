import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor:"#55DB9B",
        display:"flex",
        justifyContent:"center",
        '& a':{
            color:'#ffffff',
            marginLeft:10,
        },
    },
    grow:{
        flexGrow:0.6,
    },
    nav_link:{
        paddingLeft:"10px",
    },
    main:{
        minHeight:'80vh'
    },
    footer:{
        textAlign:"center",
    },
    Form:{
        display:"flex",
        justifyContent:"center"
    },
    button:{
        flex:"inline"
    },
    container:{
        display:"flex",
        padding:"5vw",
        justifyContent:"center",
    },
    Title:{
        marginTop:"5vh",
        paddingLeft:"2vw",
        textAlign:"center",
        display:"flex",
        color:"#55DB9B",
        justifyContent:"center"
    },
    Page_Left:{
        marginRight:"15vw"
    },
    Page_Right:{
        color:"#55DB9B",
        padding:"1.5vw",
        borderRadius:"45px",
        marginRight:"7.5vw"
    },
    InputField:{
        borderRadius:"45px",
        padding:"0.5vw",
        paddingLeft:"0.5vw",
        margin:"2vw",
    },
    button:{
        display:"flex",
        justifyContent:"center",
        marginTop:"2.5vh",
        border:"2px solid #55DB9B"
    },
    index_title:{
        color:"#55DB9B"
    },
    nav_button:{
        display:"flex",
        justifyContent:"center",
        border:"2px solid white",
        borderRadius:"45px",
        color:"#55DB9B",
        backgroundColor:"white",
    }
});

export default useStyles;