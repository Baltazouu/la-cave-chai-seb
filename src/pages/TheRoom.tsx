import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Container from "@mui/material/Container";
import TheRoomGrid from "../components/the-room/TheRoomGrid";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import {Chip} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ShowMore from "../components/show-more/ShowMore";
import {description} from "../data/the-room/TheRoomDescription";

export default function TheRoom(){
    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{
                display: 'flex', flexDirection: 'column',
                my: 2, gap: 4,
                justifyContent: 'center'
            }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                    <Typography variant="h1" gutterBottom>
                        La Salle
                    </Typography>
                    <Typography >Découvrez notre salle de récéption disponible pour tout vos évènements, située à l'étage de la cave</Typography>
            </Box>


            <TheRoomGrid/>

            <Divider>Découvrez la salle</Divider>

            <Box>
                <Stack direction="row" spacing={1}>
                    <Chip size='medium' icon={<Groups2Icon />} label="60 Personnes" variant="outlined" />

                    <Chip size='medium' icon={<ZoomOutMapIcon />} label="80 M²" variant="outlined" />

                </Stack>
            </Box>

            <ShowMore text={description} maxLength={400}/>

        </Container>
    );
}