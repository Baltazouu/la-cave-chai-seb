import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function About(){
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                <Typography variant="h1" gutterBottom>
                    À Propos
                </Typography>
                <Typography>Ici vous en saurez plus !</Typography>
        </Box>
    );
}