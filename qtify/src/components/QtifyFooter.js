import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { mediaContext } from "./customHooks";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import Slider from '@mui/material/Slider';
import sample_audio_file from './../assets/sample_music_file.mp3';
import { MilliSecondsToDuration, SecondsToDuration } from "./UtilityFunctions";
import { fontWeight } from "@mui/system";
import useSound from "use-sound";

const PlayerText = styled(Typography)(({
    whiteSpace: 'nowrap',
    fontSize: '0.75rem',
    fontWeight: 500,
}))

export default function QtifyFooter({selectedSong, albumName}){

    const [isPlaying, setIsPlaying] = useState(false);

    const [currentLength, setCurrentLength] = useState(0);

    const [play, {pause, duration, sound}] = useSound(sample_audio_file);

    const sampleMusic = new Audio(sample_audio_file);

    const handleSongScroll = (e)=>{
        if (sound){
            sound.seek([e.target.value]);
        }        
    }

    const handleSongPlay = ()=>{
        if (isPlaying){
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying)
    }

    useEffect(()=>{
        const interval= setInterval(()=>{
            if (sound) {
                setCurrentLength(Math.round(sound.seek([])));
                // console.log('audio current time: ', currentLength)
                // console.log(sound.seek([]));
            }
        }, 33);
        return ()=>clearInterval(interval);        
    }, [sound]);

    return (
        <div>
            {selectedSong && 
                <Grid container sx={{backgroundColor:'#121212', color:'#FFFFFF', padding:'1rem', height:'130px'}}>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={3} sx={{justifyContent:'right', margin:'4px'}}>
                                <img src={selectedSong.image} alt='Song image' height={82} width='auto'/>
                            </Grid>
                            <Grid item xs={8} sx={{justifyContent:'left', margin:'4px'}}>
                                <h5>{selectedSong.title}</h5>
                                {albumName.length > 0 && (<h6>{albumName}</h6>)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={7} justifyContent='center' margin='8px'>
                        <Box onClick={handleSongPlay} display="flex" alignItems='center' justifyContent='center'>
                            {isPlaying ? 
                                <PauseCircleFilledIcon sx={{fontSize:'3rem'}}/> : 
                                <PlayCircleFilledIcon sx={{fontSize:'3rem'}}/>}
                        </Box>                       
                        <Stack spacing={2} direction='row' alignItems='center'>
                            <PlayerText> {SecondsToDuration(currentLength)}</PlayerText>
                            <Slider value={currentLength} min={0} max={Math.floor(duration/1000)} step={1} onChange={handleSongScroll}/>
                            <PlayerText>{MilliSecondsToDuration(duration)}</PlayerText>
                        </Stack>
                    </Grid>
                </Grid>
            }
        </div>
    )
}