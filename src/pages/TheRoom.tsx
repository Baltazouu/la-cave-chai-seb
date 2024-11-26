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
import ShowMore from "../components/ShowMore";
import {description} from "../data/the-room/TheRoomDescription";
import AccordionPrices from "../components/the-room/AccordionPrices";
import KitchenIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';


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
                    <Box display={'flex'} flexDirection={'row'}
                         alignItems={'center'}
                         justifyContent={'space-between'}>
                        <Box>
                        <Typography variant="h1" gutterBottom>
                            La Salle
                        </Typography>
                        <Typography >Découvrez notre salle de récéption disponible pour tout vos évènements, située à l'étage de la cave</Typography>
                        </Box>
                        <Box sx={{backgroundColor:'hsl(0, 0%, 99%)', borderRadius:2}}>
                        <img
                            style={{
                                width: '150px',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            alt={'logo cave'} src={'/salle/logo.png'}
                        />
                        </Box>
                    </Box>
            </Box>

            <TheRoomGrid/>

            <Divider>Découvrez la salle</Divider>

                <Stack direction="row" spacing={2} gap={2}  justifyContent={'center'} flexWrap={'wrap'} >
                    <Chip size='medium' icon={<Groups2Icon />} label="60 Personnes" variant="outlined" />

                    <Chip size='medium' icon={<ZoomOutMapIcon />} label="80 M²" variant="outlined" />

                    <Chip size={'medium'} icon={<KitchenIcon />} label="Cuisine équipée" variant="outlined" />

                    <Chip size={'medium'} icon={<WifiIcon />} label="Wifi" variant="outlined" />

                    <Chip size={'medium'} icon={<VideoCameraBackIcon />} label="Vidéo projecteur" variant="outlined" />
                </Stack>

            <ShowMore text={description} maxLength={400}/>

            <Divider>Tarifs</Divider>

            <AccordionPrices/>

        </Container>
    );
}