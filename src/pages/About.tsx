import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";


export default function About(){
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
        >
        <Box>
            <Grid container spacing={2} columns={12} size={{ xs: 12, md: 6 }}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                     <Typography variant="h1" gutterBottom>
                        À Propos
                    </Typography>
                    <Typography>Ici vous en saurez plus !</Typography>
                </Box>
            </Grid>
        </Box>
        </Container>
    );
}