import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";


export default function Products(){
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
            <div>
                <Typography variant="h1" gutterBottom>
                    Nos Produits
                </Typography>
                <Typography>Découvrez notre large gamme de produits</Typography>
            </div>
        </Box>
    );
}