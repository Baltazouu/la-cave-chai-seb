import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Container from "@mui/material/Container";
import TheRoomGrid from "../components/the-room/TheRoomGrid";

export default function TheRoom(){
    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                    <Typography variant="h1" gutterBottom>
                        La Salle
                    </Typography>
                    <Typography>Votre salle de récéption pour tout vos évènements</Typography>
            </Box>
            

            <TheRoomGrid/>

        </Container>
    );
}