import AppBar from "@mui/material/AppBar";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Box, Button, Toolbar } from "@mui/material";
import "./QtifyNavBar.css";
import logo from "./../assets/logo.png";

const QtifyLogo = ({imgSrc}) => {

    return (
        <Box>
            <img src={imgSrc} className='qtify-logo' alt='Qtify Logo'/>
        </Box>
    )
}

const QtifySearchBar = ()=>{

    return (
        <Paper className="qtify-search-bar" component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
                sx={{ ml: 1, width:250, textAlign:'center'}}
                placeholder="Search an album of your choice"
                inputProps={{ 'aria-label': 'search an album of your choice' }}
            />
            <IconButton type="button" sx={{ p: '10px', borderColor:'grey' }} aria-label="search an album of your choice">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
const QtifyButton = ({btnText})=>{
    return (
        <button className='qtify-button'>{btnText}</button>
    )
}

// const QtifyButton = styled(Button)(({ theme }) => ({
//     backgroundColor: "#121212",
//     color: "#34C94B",
//     fontSize: 16,
//     fontFamily:"Poppins",
//     fontWeight:700,
//     textTransform:'none'    
// }));

export default function QtifyNavBar(){

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="qtify-navbar">
                    <QtifyLogo imgSrc={logo}/>
                    <QtifySearchBar/>
                    <QtifyButton btnText={"Give Feedback"}/>
                </Toolbar>
            </AppBar>
        </Box>
    )

}