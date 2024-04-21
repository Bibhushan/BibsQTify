// import { Image } from "@mui/material";

import { Box } from "@mui/system";

const QtifyLogo = ({imgSrc}) => {

    console.log({imgSrc});

    return (
        <Box>
            <img src={imgSrc} alt='Qtify Logo'/>
        </Box>
    )
}

export default QtifyLogo