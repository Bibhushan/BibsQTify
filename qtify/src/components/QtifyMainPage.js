import QtifyNavBar from "./QtifyNavBar";
import HeroSection from "./HeroSection";
import AlbumContainer from "./AlbumContainer";
import { useState, useEffect } from "react";
import axios from "axios";

export default function QtifyMainPage(){

    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    const fetchAlbums = async(albumType)=>{

        try{
            const fetchAlbums = await axios.get('https://qtify-backend-labs.crio.do/albums/' + albumType);
            // console.log(albumType, " Albums: ", fetchAlbums);
            return fetchAlbums.data;
        }
        catch (e){
            console.log('Error fetching top albums', e);
        }

    }

    useEffect(()=>{
        const topAlbumsFunc = async()=>{
            var album = await fetchAlbums('top');
            setTopAlbums(album);
        }

        topAlbumsFunc();

        console.log('Top Albums updated:', topAlbums);

        const newAlbumsFunc = async()=>{
            var album = await fetchAlbums('new');
            setNewAlbums(album);
        }

        newAlbumsFunc();

        console.log('New Albums updated:', newAlbums);


    }, []);

    return (
        <div>
            <QtifyNavBar />
            <HeroSection />
            <AlbumContainer albumData={topAlbums} albumName='Top Albums'/>
            <AlbumContainer albumData={newAlbums} albumName='New Albums'/>
        </div>
    )
}