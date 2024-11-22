import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function TheRoom(){
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                <Typography variant="h1" gutterBottom>
                    La Salle
                </Typography>
                <Typography>Votre salle de récéption pour toutes vos récéptions</Typography>
        </Box>
    );
}