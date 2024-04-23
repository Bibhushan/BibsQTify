import { Box } from "@mui/system";
import "./HeroSection.css";
import hero_headphones from "./../assets/hero_headphones.png";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function HeroSection() {

    return (
        <Grid container className='qtify-hero-section'>
            <Grid container spacing={2} sx={{width:800, height:212}}>
                <Grid item xs={9} sx={{padding:'0px', margin:'0px', textAlign:'center', alignContent:'center'}}>
                    <p className='qtify-hero-text'>
                        100 Thousand Songs, ad-free
                    <br/>
                        Over thousands podcast episodes
                    </p>
                </Grid>
                <Grid item xs={3}>
                    <img src={hero_headphones} alt="hero headphones" className="qtify-hero-image"/>
                </Grid>                
            </Grid>
        </Grid>
    )
    
}