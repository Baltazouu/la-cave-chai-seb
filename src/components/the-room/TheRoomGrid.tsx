import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


export default function TheRoomGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <img
                            src={'/salle/qg_1.jpg'}
                            alt={'le qg'}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                            }}
                        />                    </Grid>
                    <Grid size={{xs: 6, md: 4}}>
                        <img
                            src={'/salle/qg_2.jpg'}
                            alt={'le qg'}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                    <Grid size={{xs: 6, md: 4}}>
                        <img
                            src={'/salle/qg_3.jpg'}
                            alt={'le qg'}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                            }}
                        /> </Grid>
                    <Grid size={{xs: 6, md: 8}}>
                        <img
                            src={'/salle/qg_4.jpg'}
                            alt={'le qg'}
                            style={{
                                width: '100%',
                                height: '250px',
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}