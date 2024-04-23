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
    alignSelf:'left',
    padding: '0px 5px'
}));

export default function MediaCard({albumImage, albumFollows, albumName}) {
  return (
    <>
        <Card className='qtify-card'>
            <img
                src={albumImage}
                alt={albumName}
                className='qtify-card-img'
            />
            <Box sx={{justifyItems:'left', alignContent:'center'}}>
                <QtifyChip size='small' label={albumFollows + " Follows"}/>
            </Box>
        </Card>
        <Box sx={{width:160, paddingX:0, paddingY:1, alignItems:'center', justifyItems:'left'}}>
            <h5 className='qtify-album-name'>
                {albumName}
            </h5>
        </Box>
    </>
  );
}