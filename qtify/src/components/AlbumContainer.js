import { Box, Button, Grid, Typography } from "@mui/material";
import AlbumCard from "./AlbumCard";
import { useState } from "react";
import styled from "@emotion/styled";
import { fontFamily, fontSize } from "@mui/system";

const CollapseButton = styled(Button)(()=>({
    textTransform:'none',
    color:'#34C94B',
    fontSize:16,
    fontWeight:500
}));

export default function AlbumContainer({albumData, albumName}){

    const [isCollapsed, setIsCollapsed] = useState(true);

    console.log('AlbumContainer', albumData);

    return (
        <Box sx={{backgroundColor:'black', padding:'1rem'}}>
            <Box display='flex' sx={{justifyContent:'space-between', paddingY:'6px'}}>
                <Typography variant='h6' sx={{color:'#FFFFFF'}}>
                    {albumName}
                </Typography>
                <CollapseButton variant="text" onClick={()=>{setIsCollapsed(!setIsCollapsed)}}>
                    Collapse
                </CollapseButton>                
            </Box>
            <Grid container spacing={3}>
                {albumData.map((album)=>{
                    return (
                        <Grid item key={album.id}>
                            <AlbumCard albumImage={album.image} albumName={album.title} albumFollows={album.follows}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}