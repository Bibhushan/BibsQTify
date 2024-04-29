import { Box, styled, Typography } from "@mui/material"
import "./QtifyFAQ.css"

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useState } from "react";

const QtifyAccordian = styled(Accordion)(()=>({
    borderRadius: '16px',
    border: '1px solid',
    borderColor: '#FFFFFF',
    width: '70%',
    margin: '8px',
    '&:last-of-type': {
        borderRadius: '16px'
    } , 
    '&.Mui-expanded:last-of-type': {
        marginBottom: '0.5rem'
    }
}))

const QtifyAccordianSummary = styled(AccordionSummary)(()=>({
    borderRadius: '16px',
    backgroundColor: '#121212',
    color: '#FFFFFF'
}))

export default function QtifyFAQ(){

    const [expanded, setExpanded] = useState('ques1')

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return(
        <Box className='qtify-FAQ'>
            <div>
                <p className='qtify-FAQ-heading'>FAQs
                </p>
            </div> 
            <QtifyAccordian 
                defaultExpanded
                expanded={expanded === 'ques1'} 
                onChange={handleChange('ques1')}
            >
                <QtifyAccordianSummary
                    expandIcon={<ExpandMoreIcon className='qtify-FAQ-icon'/>}
                    aria-controls="ques1-content"
                    id="ques1-header"                    
                >
                    Is QTify free to use?
                </QtifyAccordianSummary>
                <AccordionDetails>
                    Yes! It is 100% free, and has 0% ads!
                </AccordionDetails>
            </QtifyAccordian>
            <QtifyAccordian 
                expanded={expanded === 'ques2'} 
                onChange={handleChange('ques2')}
            >
                <QtifyAccordianSummary
                    expandIcon={<ExpandMoreIcon className='qtify-FAQ-icon'/>}
                    aria-controls="ques2-content"
                    id="ques2-header"
                >
                    Can I download and listen to songs offline?
                </QtifyAccordianSummary>
                <AccordionDetails>
                    Sorry, unfortunately we don't provide the service to download any songs.
                </AccordionDetails>
            </QtifyAccordian>           
        </Box>        
    )

}