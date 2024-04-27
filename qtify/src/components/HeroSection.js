import { Box } from "@mui/system";
import "./HeroSection.css";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function HeroSection({heading, subheading, hero_image}) {

    return (
        <Grid container className='qtify-hero-section'>
            <Grid container spacing={2} sx={{width:800, height:212}}>
                <Grid item xs={9} sx={{padding:'0px', margin:'0px', textAlign:'center', alignContent:'center'}}>
                    <p className='qtify-hero-text'>
                        {heading}
                    </p>
                    <p className='qtify-hero-text'>
                        {subheading}
                    </p>
                </Grid>
                <Grid item xs={3}>
                    <img src={hero_image} alt="hero image" className="qtify-hero-image"/>
                </Grid>                
            </Grid>
        </Grid>
    )
    
}