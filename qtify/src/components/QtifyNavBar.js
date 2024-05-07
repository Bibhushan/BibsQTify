import AppBar from "@mui/material/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Input, TextField, Toolbar, Typography } from "@mui/material";
import "./QtifyNavBar.css";
import logo from "./../assets/logo.png";
import searchIcon from './../assets/search-icon.svg';
import { useState } from "react";
import { borderColor, fontFamily, textTransform } from "@mui/system";


const QtifyLogo = ({imgSrc}) => {

    return (
        <Box>
            <img src={imgSrc} className='qtify-logo' alt='Qtify Logo'/>
        </Box>
    )
}

const QtifySearchBar = ()=>{

    return (
        <Box className="qtify-search-bar" 
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 568 , borderColor:'#121212', borderStyle:'solid'}}>
            <InputBase
                // sx={{ ml: 1, width:250, textAlign:'center'}}
                className='qtify-search-box' 
                placeholder="Search an album of your choice"
                inputProps={{ 'aria-label': 'search an album of your choice' }}
            />
            <Divider orientation="vertical" variant="middle" flexItem sx={{borderColor:'#121212', height: 48, margin:0}}/>
            {/* <IconButton type="button" sx={{ p: '10px', borderColor:'grey' }} aria-label="search an album of your choice"> */}
            <IconButton type="button" aria-label="search an album of your choice" sx={{margin:'6px'}}>
                <img src={searchIcon} />
            </IconButton>
        </Box>
    )
}

const QtifyButton = styled(Button)(() => ({
    backgroundColor: "#121212",
    color: "#34C94B",
    fontSize: 16,    
    fontWeight:700,
    fontFamily:'Poppins',
    textTransform:'none',
    padding: '0.5rem 1rem',
    borderRadius:8,
    '&:hover': {
        backgroundColor: "black"
    }    
}));

const QtifyDialog = styled(Dialog)({
    borderColor: '#34C94B',
    display:"flex",
    justifySelf: 'center',
    justifyItems:'center',
    alignItems:'center',
    padding: '1rem',
    fontFamily: 'Inter'
})

const GreenBorderInput = styled(Input)({
    borderWidth:'thin',
    borderStyle: 'solid',
    borderColor: '#34C94B',
    fontFamily: 'Poppins',
    color: '#121212',
    fontSize: 12,
    borderRadius: '8px',
    padding: '0.25rem 0.75rem',
    margin: '0.5rem 0rem'    
})

const GreenButton = styled(Button)({
    backgroundColor: '#34C94B',
    fontFamily:'Poppins',
    fontSize:12,
    fontWeight: 700,
    color: '#FFFFFF',
    borderRadius: '12px',
    textTransform: 'none',
    padding: '0.5rem 1rem',
    margin: '0 1rem 1rem 1rem',
    '&:hover':{
        backgroundColor:'#34C94B'
    }
})

function QtifyGiveFeedback({open, onClose}){

    const [fullName, setFullName] = useState(''); 
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleFullName = (e)=>{
        console.log('Full Name: ', e.target.value);
        setFullName(e.target.value);
    }

    const handleEmaiID = (e)=>{
        console.log('Email ID: ', e.target.value);
        setEmail(e.target.value);
    }

    const handleSubject = (e)=>{
        console.log('Subject: ', e.target.value);
        setSubject(e.target.value);
    }

    const handleDescription = (e)=>{
        console.log('Description: ', e.target.value);
        setDescription(e.target.value);
    }

    return(
        <QtifyDialog open={open} onClose={onClose}>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', textAlign:'center', margin:'0.5rem 2rem 0rem 2rem'}}
            >   
                <h4></h4>
                <Typography variant='h4' sx={{fontFamily:'Poppins', fontSize:14, fontWeight:500}}>Feedback</Typography>
                <IconButton onClick={onClose} sx={{padding:0}}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <DialogContent sx={{width:430, maxWidth:'100%', margin:'0.5rem 2rem', padding:0}}>
                <GreenBorderInput type='text' placeholder='Full Name'  onChange={handleFullName} fullWidth focussed disableUnderline/>
                <GreenBorderInput type='text' placeholder='Email ID' variant='outlined' onChange={handleEmaiID} fullWidth disableUnderline/>
                <GreenBorderInput type='text' placeholder='Subject' variant='outlined' onChange={handleSubject} fullWidth disableUnderline/>
                <GreenBorderInput type='text' placeholder='Description' variant='outlined' onChange={handleDescription} fullWidth multiline rows={6} disableUnderline/>                
            </DialogContent>
            <DialogActions sx={{display:'flex', justifyContent:'center', padding:0}}>
                <GreenButton onClick={onClose}>Submit Feedback</GreenButton> 
            </DialogActions>
        </QtifyDialog>
    )
}

export default function QtifyNavBar(){

    const [feedbackOpen, setFeedbackOpen] = useState(false);
    
    const handleFeedbackOpen = ()=>{
        setFeedbackOpen(true);
    }

    const handleFeedbackClose = ()=>{
        setFeedbackOpen(false);
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="qtify-navbar">
                    <QtifyLogo imgSrc={logo}/>
                    <QtifySearchBar/>
                    <QtifyButton onClick={handleFeedbackOpen}>Give Feedback</QtifyButton>
                    <QtifyGiveFeedback open={feedbackOpen} onClose={handleFeedbackClose}/>
                </Toolbar>
            </AppBar>
        </Box>
    )

}