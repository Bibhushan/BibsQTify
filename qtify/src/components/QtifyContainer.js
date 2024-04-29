import { Box, Button, CircularProgress, Grid, Typography, Tab, Tabs } from "@mui/material";
import QtifyCard from "./QtifyCard";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./QtifyContainer.css";
import PropTypes from 'prop-types';
import React from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { borderBottom, borderColor } from "@mui/system";

const CollapseButton = styled(Button)(()=>({
    textTransform:'none',
    color:'#34C94B',
    fontSize:16,
    fontWeight:500
}));

const QtifyTabs = styled(Tabs)(()=>({
    indicatorColor: '#34C94B',
    // color:'#FFFFFF',
    '&.Mui-selected': {
        color:'#FFFFFF'
    }

}));

const QtifyTab = styled(Tab)(()=>({
    textTransform:'none',
    fontSize: 12,
    fontWeight: 500,
    color: '#FFFFFF',
    paddingY:0,
    marginY:0,
    // '&.Mui-selected': { 
    //     color:'#FFFFFF'
    // }
}))

function QtifyTabPanel(props) {
    const { children, value, tabIndex, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== tabIndex}
        id={`simple-tabpanel-${tabIndex}`}
        aria-labelledby={`simple-tab-${tabIndex}`}
        {...other}
      >
        {value === tabIndex && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}

QtifyTabPanel.propTypes = {
    children: PropTypes.node,
    tabIndex: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const getSongsByGenre = (allSongs, genre)=>{
    // console.log('getting songs for ', genre, ' genre')
    const songs = allSongs.filter((song)=>{
        return song.genre.key === genre;
    })
    // console.log('fitered songs for ', genre, ' genre: ', songs);
    return songs;
}

const QtifyCarousel = ({carouselData, hasSongs})=>{

    return (
        carouselData.length > 0 
        ?
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={'auto'}
            spaceBetween={30}
        >
            {hasSongs ? 

                carouselData.map((song)=>(
                    <SwiperSlide key={song.id}>
                        <QtifyCard 
                            qtifyCardData={song} 
                            qtifyCardType='song' 
                        />
                    </SwiperSlide>
                ))                                        
                :
                carouselData.map((content)=>(
                    <SwiperSlide key={content.id}>                                    
                        <QtifyCard 
                            qtifyCardData={content}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        :
        <CircularProgress/>
    )
}

export default function QtifyContainer({qtifyContainerData, qtifyContainerName, qtifyContainerHasSongs=false}){

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [genre, setGenre] = useState('all');
    // const [songs, setSongs] = useState(qtifyContainerHasSongs ? qtifyContainerData : []);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleCollapse = ()=>{
        setIsCollapsed(!isCollapsed);
    }

    const handleTabSelect = (e)=>{
        const selectedGenre = e.target.innerText.toLowerCase()
        setGenre(e.target.innerText.toLowerCase());
        // console.log('selected tab ', e.target, e.target.tabIndex);
        setSelectedTab(e.target.tabIndex);
    }

    // useEffect(()=>{
    //     console.log('songs before genre change:', qtifyContainerData)
    //     if(genre === 'all'){
    //         setSongs([...qtifyContainerData]);
    //     } else {
    //         const genreSongs = qtifyContainerData.filter((song)=>{
    //             return song.genre.key === genre;
    //         })
    //         console.log('filtered songs', genreSongs);
    //         setSongs(genreSongs);
    //     }        
    //     console.log('updated song selection, Genre=', genre, ', #Songs=', songs.length);

    // }, [genre]);

    return (
        <Box sx={{backgroundColor:'#121212', padding:'0.5rem 2rem'}}>
            <Box display='flex' sx={{justifyContent:'space-between', paddingY:'6px'}}>
                <Typography variant='h6' sx={{color:'#FFFFFF'}}>
                    {qtifyContainerName}
                </Typography>
                {!qtifyContainerHasSongs && <CollapseButton variant="text" onClick={handleCollapse}>
                    {isCollapsed ? 'Show all' : 'Collapse'}
                </CollapseButton>}                
            </Box>
            {qtifyContainerHasSongs &&  (                          
                <Box sx= {{ width:'100%'}}>
                    <Tabs 
                        value={selectedTab} 
                        onClick={handleTabSelect}
                        textColor='inherit'
                        TabIndicatorProps={{ 
                            style: {background:'#34C94B'}
                        }} 
                    >
                        <QtifyTab label='All' tabIndex={0}/>
                        <QtifyTab label='Rock' tabIndex={1}/>
                        <QtifyTab label='Pop' tabIndex={2}/>
                        <QtifyTab label='Jazz' tabIndex={3}/>
                        <QtifyTab label='Blues' tabIndex={4}/>
                    </Tabs>
                    <QtifyTabPanel value={selectedTab} tabIndex={0}>
                        <QtifyCarousel carouselData={qtifyContainerData}  hasSongs={qtifyContainerHasSongs}/>
                    </QtifyTabPanel>
                    <QtifyTabPanel value={selectedTab} tabIndex={1}>
                        <QtifyCarousel carouselData={getSongsByGenre(qtifyContainerData, 'rock')}  hasSongs={qtifyContainerHasSongs}/>
                    </QtifyTabPanel>
                    <QtifyTabPanel value={selectedTab} tabIndex={2}>
                        <QtifyCarousel carouselData={getSongsByGenre(qtifyContainerData, 'pop')}  hasSongs={qtifyContainerHasSongs}/>
                    </QtifyTabPanel>
                    <QtifyTabPanel value={selectedTab} tabIndex={3}>
                        <QtifyCarousel carouselData={getSongsByGenre(qtifyContainerData, 'jazz')}  hasSongs={qtifyContainerHasSongs}/>
                    </QtifyTabPanel>
                    <QtifyTabPanel value={selectedTab} tabIndex={4}>
                        <QtifyCarousel carouselData={getSongsByGenre(qtifyContainerData, 'blues')}  hasSongs={qtifyContainerHasSongs}/>
                    </QtifyTabPanel>
                </Box>
            )}
            {!qtifyContainerHasSongs &&  
                (isCollapsed ? 
                    <QtifyCarousel carouselData={qtifyContainerData}  hasSongs={qtifyContainerHasSongs}/>
                    :
                    <Grid container spacing={4}>
                        {qtifyContainerData.length > 0 
                            ? 
                            qtifyContainerData.map((content)=>{
                                return (
                                    <Grid item key={content.id}>
                                        <QtifyCard 
                                            qtifyCardData={content}
                                        />
                                    </Grid>
                            )})
                            :
                            <CircularProgress />
                        }
                    </Grid>
                )
            }
        </Box>
    )
}