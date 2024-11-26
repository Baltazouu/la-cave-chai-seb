import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import ShowMore from "../components/ShowMore";
import {aboutDescription} from "../data/about/aboutDescription";
import Reviews from "../components/Reviews";
import CustomImage from "../components/CustomImage";
import TheRoomGrid from "../components/the-room/TheRoomGrid";


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
                    <CustomImage img={'/cave/photo_2.jpg'} alt={'le qg'}/>
                </Grid>
                <Grid size={4}>
                    <CustomImage img={'/cave/le-qg-chai-seb-21.jpg'} alt={'le qg'}/>
                </Grid>
            </Grid>

            {/*<Grid container spacing={2}>*/}
            {/*    <Grid container spacing={2} wrap={'wrap'} sx={{*/}
            {/*        display:'flex',*/}
            {/*        flexDirection: 'row',*/}
            {/*        justifyContent: 'center',*/}
            {/*    }} columns={{ xs: 4, sm: 8, md: 12 }}>*/}
            {/*        <Grid size={{xs:12,md:5}}>*/}
            {/*            <CustomImage img={'/cave/photo_2.jpg'} alt={'le qg'}/>*/}
            {/*        </Grid>*/}
            {/*        <Grid size={{xs:12, md:7}}>*/}
            {/*            <CustomImage img={'/cave/le-qg-chai-seb-21.jpg'} alt={'le qg'}/>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}

            <ShowMore text={aboutDescription} maxLength={1000} />
            <Reviews/>

        </Container>
    );
}