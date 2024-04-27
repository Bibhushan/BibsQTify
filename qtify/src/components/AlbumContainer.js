import { Box, Button, Grid, Typography } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { fontFamily, fontSize } from "@mui/system";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./AlbumContainer.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CollapseButton = styled(Button)(()=>({
    textTransform:'none',
    color:'#34C94B',
    fontSize:16,
    fontWeight:500
}));

export default function AlbumContainer({albumData, albumName}){

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapse = ()=>{
        setIsCollapsed(!isCollapsed);
    }

    return (
        <Box sx={{backgroundColor:'#121212', padding:'2rem'}}>
            <Box display='flex' sx={{justifyContent:'space-between', paddingY:'6px'}}>
                <Typography variant='h6' sx={{color:'#FFFFFF'}}>
                    {albumName}
                </Typography>
                <CollapseButton variant="text" onClick={handleCollapse}>
                    {isCollapsed ? 'Show all' : 'Collapse'}
                </CollapseButton>                
            </Box>
            {isCollapsed ? 
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    navigation
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        albumData.map((album)=>(
                            <SwiperSlide key={album.id}>
                                <AlbumCard albumImage={album.image} albumName={album.title} albumFollows={album.follows}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                :
                <Grid container spacing={4}>
                    {albumData.map((album)=>{
                        return (
                            <Grid item key={album.id}>
                                <AlbumCard albumImage={album.image} albumName={album.title} albumFollows={album.follows}/>
                            </Grid>
                        )
                    })}
                </Grid>
            }
        </Box>
    )
}