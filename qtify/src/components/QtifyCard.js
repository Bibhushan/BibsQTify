import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Chip } from '@mui/material';
import { Container, fontSize } from '@mui/system';
import "./QtifyCard.css";
import styled from '@emotion/styled';

const QtifyChip = styled(Chip)(()=>({
    backgroundColor: '#121212',
    color: '#FFFFFF',
    alignSelf:'center',
    margin: 6, 
    fontSize: 10,
    fontWeight: 300
}));

export default function QtifyCard({qtifyCardImage, qtifyCardNumber, qtifyCardName, qtifyCardType='album'}) {
    return (
        <>
            <Card className='qtify-card'>
                {/* <img
                    src={albumImage}
                    alt={albumName}
                    className='qtify-card-img'
                /> */}
                <CardMedia component='img' src={qtifyCardImage} sx={{height:170, width:'100%', objectFit:'cover'}}/>
                <Box sx={{display:'flex', alignContent:'center', flexWrap:'wrap'}}>
                    <QtifyChip size='small' label={qtifyCardType === 'album' ? qtifyCardNumber + " Follows" : qtifyCardNumber + " Likes"}/>
                </Box>
            </Card>
            <Box sx={{width:160, paddingX:0, paddingY:1, alignItems:'center', justifyItems:'left'}}>
                <p className='qtify-album-name'>
                    {qtifyCardName}
                </p>
            </Box>
        </>
    );
}