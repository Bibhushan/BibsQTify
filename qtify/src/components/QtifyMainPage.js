import QtifyNavBar from "./QtifyNavBar";
import HeroSection from "./HeroSection";
import AlbumContainer from "./AlbumContainer";
import { useState, useEffect } from "react";
import axios from "axios";

export default function QtifyMainPage(){

    const [topAlbums, setTopAlbums] = useState([]);

    const fetchTopAlbums = async()=>{

        try{
            const fetchAlbums = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            // console.log(albumType, " Albums: ", fetchAlbums);
            setTopAlbums(fetchAlbums.data);
        }
        catch (e){
            console.log('Error fetching top albums', e);
        }

    }

    useEffect(()=>{
        fetchTopAlbums();
        console.log('Top Albums updated:', topAlbums);
    }, []);

    return (
        <div>
            <QtifyNavBar />
            <HeroSection />
            <AlbumContainer albumData={topAlbums} albumName='Top Albums'/>
        </div>
    )
}