import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Event from "./Event";


export default function Events() {
    return(
        <Box>
            <Typography variant="h2" gutterBottom>
                Actualités
            </Typography>
            <Grid container spacing={2} wrap={'wrap'} columns={12}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Event img={'/events/anniversaire_cave.jpg'} alt={'Anniversaire de la cave'} title={'Anniversaire de la cave'} date={''} description={'Venez fêter les 1 an de la cave avec nous'}/>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <Event img={'/events/beaujolais_nouveau.jpg'} alt={'Beaujolais nouveau'} title={'Beaujolais nouveau'} date={''} description={'Dégustation de beaujolais nouveau'}/>
                </Grid>
            </Grid>
        </Box>
    )
}