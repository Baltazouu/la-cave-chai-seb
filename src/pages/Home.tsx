import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';

import {HomeCards} from "../data/HomeCards";
import {HomeCardData} from "../model/HomeCardData";
import Container from "@mui/material/Container";
import {StyledCard} from "../components/styled-card/StyledCard";
import {StyledTypography} from "../components/styled-card/StyledTypoGraphy";
import {StyledCardContent} from "../components/styled-card/StyledCardContent";

const cardData : HomeCardData[] = HomeCards();

export default function Home() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
        null,
    );

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };


    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{display: 'flex', flexDirection: 'column', my: 2, gap: 4}}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <div>
                    <Typography variant="h1" gutterBottom>
                        La Cave
                    </Typography>
                    <Typography>Votre spécialiste des vins, bières et spiritueux à lisieux (14100)</Typography>
                </div>
                <Box
                    sx={{
                        display: {xs: 'flex', sm: 'none'},
                        flexDirection: 'row',
                        gap: 1,
                        width: {xs: '100%', md: 'fit-content'},
                        overflow: 'auto',
                    }}
                >
                </Box>

                    {/*<Events/>*/}

                    {/*<Typography variant="h2" gutterBottom>*/}
                    {/*    Découvrez la cave*/}
                    {/*</Typography>*/}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column-reverse', md: 'row'},
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: {xs: 'start', md: 'center'},
                        gap: 4,
                        overflow: 'auto',
                    }}
                >
                </Box>
                <Grid container spacing={2} columns={12}>
                    <Grid size={{xs: 12, md: 6}}>
                        <StyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(0)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[0].img}
                                sx={{
                                    aspectRatio: '16 / 9',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="caption" component="div">
                                    {cardData[0].tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {cardData[0].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {cardData[0].description}
                                </StyledTypography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <StyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(1)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[1].img}
                                aspect-ratio="16 / 9"
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="caption" component="div">
                                    {cardData[1].tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {cardData[1].title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {cardData[1].description}
                                </StyledTypography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <StyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(2)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                            sx={{height: '100%'}}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[2].img}
                                sx={{
                                    height: {sm: 'auto', md: '50%'},
                                    aspectRatio: {sm: '16 / 9', md: ''},
                                }}
                            />
                            <StyledCardContent>
                                <Box>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[2].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[2].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {cardData[2].description}
                                    </StyledTypography>
                                    <Link component={RouterLink} color="inherit" to={'/products/whiskeys'}>
                                        Découvrir nos whiskies
                                    </Link>
                                </Box>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', gap: 2, height: '100%'}}
                        >
                            <StyledCard
                                variant="outlined"
                                onFocus={() => handleFocus(3)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
                                sx={{height: '100%'}}
                            >
                                <StyledCardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                    }}
                                >
                                    <div>
                                        <Typography gutterBottom variant="caption" component="div">
                                            {cardData[3].tag}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {cardData[3].title}
                                        </Typography>
                                        <StyledTypography
                                            variant="body2"
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {cardData[3].description}
                                        </StyledTypography>

                                        <Link component={RouterLink} color="inherit" to={'/the-room'}>
                                            En savoir plus

                                        </Link>
                                    </div>
                                </StyledCardContent>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={cardData[3].img}
                                    sx={{
                                        height: {sm: 'auto', md: '50%'},
                                        aspectRatio: {sm: '16 / 9', md: ''},
                                    }}
                                />
                            </StyledCard>
                        </Box>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <StyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(5)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
                            sx={{height: '100%'}}
                        >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                image={cardData[4].img}
                                sx={{
                                    height: {sm: 'auto', md: '50%'},
                                    aspectRatio: {sm: '16 / 9', md: ''},
                                }}
                            />
                            <StyledCardContent>
                                <Box>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[4].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[4].title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {cardData[4].description}
                                    </StyledTypography>
                                    <Link component={RouterLink} color="inherit" to={'/products/calvados'}>
                                        Découvrir nos calvados
                                    </Link>
                                </Box>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
}