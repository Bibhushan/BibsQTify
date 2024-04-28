import QtifyNavBar from "./QtifyNavBar";
import HeroSection from "./QtifyHeroSection";
import QtifyContainer from "./QtifyContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import hero_headphones from "./../assets/hero_headphones.png";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";

const QtifyHorizontalDivider = styled(Divider)(()=>({
    borderStyle:'solid',
    border: 1,
    borderColor: '#34C94B'    
}))

export default function QtifyMainPage(){

    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [allSongs, setAllSongs] = useState([]);

    const fetchAlbums = async(albumType)=>{

        try{
            const fetchAlbums = await axios.get('https://qtify-backend-labs.crio.do/albums/' + albumType);
            // console.log(albumType, " Albums: ", fetchAlbums);
            return fetchAlbums.data;
        }
        catch (e){
            console.log(`Error fetching ${albumType} albums`, e);
        }

    }

    const fetchSongs = async()=>{

        try{
            const fetchSongs = await axios.get('https://qtify-backend-labs.crio.do/songs/');
            return fetchSongs.data;
        }
        catch (e){
            console.log('Error fetching top songs', e);
        }

    }

    useEffect(()=>{
        const topAlbumsFunc = async()=>{
            var album = await fetchAlbums('top');
            setTopAlbums(album);
        }

        topAlbumsFunc();

        // console.log('Top Albums updated:', topAlbums);

        const newAlbumsFunc = async()=>{
            var album = await fetchAlbums('new');
            setNewAlbums(album);
        }

        newAlbumsFunc();

        console.log('New Albums updated:', newAlbums);

        const allSongsFunc = async()=>{
            var songs = await fetchSongs();
            setAllSongs(songs);
        }

        allSongsFunc();

        console.log('All Songs updated:', allSongs);

    }, []);

    return (
        <div>
            <QtifyNavBar />
            <HeroSection 
                heading='100 Thousand Songs, ad-free' 
                subheading='Over thousands podcast episodes' 
                hero_image={hero_headphones}
            />
            <QtifyContainer qtifyContainerData={topAlbums} qtifyContainerName='Top Albums'/>
            <QtifyHorizontalDivider />
            <QtifyContainer qtifyContainerData={newAlbums} qtifyContainerName='New Albums'/>
            <QtifyHorizontalDivider />
            <QtifyContainer qtifyContainerData={allSongs} qtifyContainerName="Songs" qtifyContainerHasSongs={true}/>
        </div>
    )
}