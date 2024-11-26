import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";

export default function AccordionPrices() {


    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>Pour une heure</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>
                        À partir de 70€ TTC.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>Pour une soirée</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>
                        À partir de 310€ TTC avec vaiselle incluse (de 19H jusqu'à 01H)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>Pour la journée</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>
                        À partir de 250€ TTC (de 8h à 18h)
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}