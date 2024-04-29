import { useContext} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Chip } from '@mui/material';
import { Container, fontSize } from '@mui/system';
import "./QtifyCard.css";
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import { mediaContext, songContext, albumContext } from './customHooks';

const QtifyChip = styled(Chip)(()=>({
    backgroundColor: '#121212',
    color: '#FFFFFF',
    alignSelf:'center',
    margin: 6, 
    fontSize: 10,
    fontWeight: 300
}));

export default function QtifyCard({qtifyCardData, qtifyCardType='album'}) {

    // const {song, setSong} = useContext(songContext);
    // const {album, setAlbum} = useContext(albumContext);
    const { currentMedia, setCurrentMedia } = useContext( mediaContext ); 
    // const [media, setMedia] = qtifyCardType === 'album' ? useContext(albumContext) : useContext(songContext);

    return (
        <Tooltip title={qtifyCardType === 'album' && qtifyCardData ? qtifyCardData.songs.length + ' Songs' : ''} arrow placement='top'>
            <div>
                <Card 
                    className='qtify-card' 
                    onClick={()=>{
                        // console.log('setting handler for card type ', qtifyCardType, qtifyCardData, setCurrentMedia);
                        try {
                            if (qtifyCardType === 'album'){
                                setCurrentMedia({type:'album', data:qtifyCardData});
                            } else if (qtifyCardType === 'song') {
                                setCurrentMedia({type:'song', data:qtifyCardData});
                            } else {
                                console.log(qtifyCardType, ' is not handled on Card click');
                            }
                        } 
                        catch (e){
                            console.log(e);
                        }
                        // console.log(currentMedia.type, ' selected: ', currentMedia.data);
                    }}
                > 
                    {/* <img
                        src={albumImage}
                        alt={albumName}
                        className='qtify-card-img'
                    /> */}
                    <CardMedia component='img' src={qtifyCardData.image} sx={{height:170, width:'100%', objectFit:'cover'}}/>
                    <Box sx={{display:'flex', alignContent:'center', flexWrap:'wrap'}}>
                        <QtifyChip size='small' label={qtifyCardType === 'album' ? qtifyCardData.follows + " Follows" : qtifyCardData.likes + " Likes"}/>
                    </Box>
                </Card>
                <Box sx={{width:160, paddingX:0, paddingY:1, alignItems:'center', justifyItems:'left'}}>
                    <p className='qtify-album-name'>
                        {qtifyCardData.title}
                    </p>
                </Box>
            </div>
        </Tooltip>
    );
}