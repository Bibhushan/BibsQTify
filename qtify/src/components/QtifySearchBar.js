import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import "./QtifyNavBar.css"

const QtifySearchBar = ()=>{

    return (
        <Paper className="qtify-search-bar" component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
                sx={{ ml: 1, minWidth:220, textAlign:'center'}}
                placeholder="Search an album of your choice"
                inputProps={{ 'aria-label': 'search an album of your choice' }}
            />
            <IconButton type="button" sx={{ p: '10px', borderColor:'grey' }} aria-label="search an album of your choice">
                <SearchIcon />
            </IconButton>
        </Paper>
    )

}

export default QtifySearchBar;