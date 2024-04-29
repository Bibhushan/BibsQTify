import QtifyNavBar from "./QtifyNavBar";
import HeroSection from "./QtifyHeroSection";
import QtifyContainer from "./QtifyContainer";
import { useState, useEffect } from "react";
import axios from "axios";
import hero_headphones from "./../assets/hero_headphones.png";
import { Divider } from "@mui/material";
import styled from "@emotion/styled";
import QtifyFAQ from "./QtifyFAQ";
import QtifyFooter from "./QtifyFooter";
import { mediaContext } from "./customHooks";

const QtifyHorizontalDivider = styled(Divider)(()=>({
    border: '0.5px solid',
    borderColor: '#34C94B'    
}))

export default function QtifyMainPage(){

    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [allSongs, setAllSongs] = useState([]);

    const [currentMedia, setCurrentMedia] = useState({type:'album', data:{}});
    const [currentSong, setCurrentSong] = useState('');
    const [currentAlbum, setCurrentAlbum] = useState('');

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

        // console.log('New Albums updated:', newAlbums);

        const allSongsFunc = async()=>{
            var songs = await fetchSongs();
            setAllSongs(songs);
        }

        allSongsFunc();

        console.log('All Songs updated:', allSongs);

    }, []);

    // Handles media selection
    useEffect(()=>{
        console.log(currentMedia);
        if (currentMedia.type === 'album'){
            setCurrentAlbum(currentMedia.data);
            setCurrentSong('');
        }  
        
        if (currentMedia.type === 'song') {
            setCurrentSong(currentMedia.data);
        }
    }, [currentMedia]);

    return (
        <div>
            <QtifyNavBar />
            <HeroSection 
                heading='100 Thousand Songs, ad-free' 
                subheading='Over thousands podcast episodes' 
                hero_image={hero_headphones}
            />
            <mediaContext.Provider value ={{currentMedia, setCurrentMedia}}>
                <QtifyContainer qtifyContainerData={topAlbums} qtifyContainerName='Top Albums'/>
            </mediaContext.Provider>
            <QtifyHorizontalDivider />
            <mediaContext.Provider value ={{currentMedia, setCurrentMedia}}>
                <QtifyContainer qtifyContainerData={newAlbums} qtifyContainerName='New Albums'/>
            </mediaContext.Provider>
            <QtifyHorizontalDivider />
            <mediaContext.Provider value={{currentMedia, setCurrentMedia}}>
                <QtifyContainer 
                    qtifyContainerData={allSongs} 
                    qtifyContainerName="Songs" 
                    qtifyContainerHasSongs={true} 
                />
            </mediaContext.Provider>
            <QtifyHorizontalDivider />
            <QtifyFAQ/>
            <QtifyHorizontalDivider />
            <QtifyFooter selectedSong={currentSong} albumName={currentAlbum}/>
        </div>
    )
}
