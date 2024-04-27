import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip } from '@mui/material';
import { Container } from '@mui/system';
import "./AlbumCard.css";
import styled from '@emotion/styled';

const QtifyChip = styled(Chip)(()=>({
    backgroundColor: '#121212',
    color: '#FFFFFF',
    alignSelf:'center',
    margin:6
}));

export default function MediaCard({albumImage, albumFollows, albumName}) {
  return (
    <>
        <Card className='qtify-card'>
            {/* <img
                src={albumImage}
                alt={albumName}
                className='qtify-card-img'
            /> */}
            <CardMedia component='img' src={albumImage} sx={{height:170, width:'100%', backgroundSize:'contain'}}/>
            <Box sx={{display:'flex', alignContent:'center', flexWrap:'wrap'}}>
                <QtifyChip size='small' label={albumFollows + " Follows"}/>
            </Box>
        </Card>
        <Box sx={{width:160, paddingX:0, paddingY:1, alignItems:'center', justifyItems:'left'}}>
            <p className='qtify-album-name'>
                {albumName}
            </p>
        </Box>
    </>
  );
}