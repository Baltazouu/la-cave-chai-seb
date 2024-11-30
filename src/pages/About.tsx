import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import ShowMore from "../components/ShowMore";
import {aboutDescription} from "../data/about/aboutDescription";
import Reviews from "../components/Reviews";
import CustomImage from "../components/CustomImage";
import Map from "../components/map/Map";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";


export default function About(){
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{
                display: 'flex', flexDirection: 'column',
                my: 2, gap: 4,
                justifyContent: 'center'
            }}>
            <Box>
                 <Typography variant="h1" gutterBottom>
                    À Propos
                </Typography>
                <Typography>Ici vous en saurez plus !</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid size={8}>
                    <CustomImage img={'/cave/cave_1.jpg'} alt={'le qg'}/>
                </Grid>
                <Grid size={4}>
                    <CustomImage img={'/outdoor/outdoor_1.jpeg'} alt={'le qg'}/>
                </Grid>
            </Grid>

            <ShowMore text={aboutDescription} maxLength={1000} />
            <Reviews/>

            <Box>
                <Grid container spacing={2}>
                    <Grid size={{sm:12,md:6}} >
                        <Box>
                            <Box mb={1}>
                                <Typography variant="h2" gutterBottom>
                                    Nous retrouver
                                </Typography>
                                <Link color="text.secondary" variant="body2" href={'https://maps.app.goo.gl/Z5ygnz97R5aqhntH6'} target={'_blank'}>
                                    61 rue du Général Leclerc, Lisieux, France
                                </Link>
                            </Box>

                            <Box mb={1}>
                                <Typography variant="h4" gutterBottom>
                                    Horaires
                                </Typography>
                                <Typography variant={'body2'} color="text.secondary">Lundi - Samedi : 10h - 13h / 15h-19h</Typography>
                            </Box>

                            <Box display={'flex'} flexDirection={'column'} mb={1}>
                                <Typography variant="h4" gutterBottom>
                                    Contact
                                </Typography>
                                <Link color="text.secondary" variant="body2" href="tel:0231234567">
                                    02 31 48 88 79
                                </Link>
                                <Link color="text.secondary" variant="body2" href="mailto:chaisebetsesamis@gmail.com">
                                    chaisebetsesamis@gmail.com
                                </Link>
                                <Link color="text.secondary" variant="body2" href={'https://maps.app.goo.gl/Z5ygnz97R5aqhntH6'} target={'_blank'}>
                                    61 rue du Général Leclerc, Lisieux, France
                                </Link>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={1}>
                                    <Typography variant="h4" gutterBottom>Réseaux sociaux</Typography>
                                <Box display={'flex'} flexDirection={'row'} gap={1}>
                                    <IconButton
                                            color="inherit"
                                            size="small"
                                            href="https://www.facebook.com/profile.php?id=61553453008072"
                                            aria-label="Facebook"
                                            target={'_blank'}
                                            sx={{ alignSelf: 'center' }}
                                        >
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton
                                            color="inherit"
                                            size="small"
                                            href="https://www.instagram.com/lacavechaisebetsesamis/"
                                            aria-label="X"
                                            sx={{ alignSelf: 'center' }}
                                        >
                                            <InstagramIcon />
                                        </IconButton>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid size={{xs:12,md:6}} style={{ height: '350px' }}>
                        <Map />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
}