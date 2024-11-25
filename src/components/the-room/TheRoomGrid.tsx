import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TheRoomImage from "./TheRoomImage";


export default function TheRoomGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid container spacing={2} wrap={'wrap'} sx={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid size={{ xs: 4, md: 8 }}>
                            <TheRoomImage img={'/salle/qg_1.jpg'} alt={'le qg'}/>
                    </Grid>
                    <Grid size={{xs: 4, md: 4}}>
                        <TheRoomImage img={'/salle/qg_2.jpg'} alt={'le qg'}/>
                    </Grid>
                    <Grid size={{xs: 4, md: 4}}>
                        <TheRoomImage img={'/salle/qg_3.jpg'} alt={'le qg'}/>
                    </Grid>
                    <Grid size={{xs: 4, md: 8}}>
                        <TheRoomImage img={'/salle/qg_4.jpg'} alt={'le qg'}/>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
}