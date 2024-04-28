import AppBar from "@mui/material/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Toolbar } from "@mui/material";
import "./QtifyNavBar.css";
import logo from "./../assets/logo.png";
import searchIcon from './../assets/search-icon.svg';

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
            <IconButton type="button" className='qtify-search-icon' aria-label="search an album of your choice">
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

export default function QtifyNavBar(){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="qtify-navbar">
                    <QtifyLogo imgSrc={logo}/>
                    <QtifySearchBar/>
                    <QtifyButton>Give Feedback</QtifyButton>
                </Toolbar>
            </AppBar>
        </Box>
    )

}