import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import * as React from "react";
import {Product} from "../../model/Product";
import {StyledCard} from "../styled-card/StyledCard";
import CardMedia from "@mui/material/CardMedia";
import {StyledCardContent} from "../styled-card/StyledCardContent";
import Typography from "@mui/material/Typography";
import {StyledTypography} from "../styled-card/StyledTypoGraphy";

export default function ProductGrid({products}:{products : Product[]}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {products.map((product, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                        <StyledCard
                                variant="outlined"
                                tabIndex={0}
                            >
                                <CardMedia
                                    component="img"
                                    alt={product.name}
                                    image={product.img}
                                    aspect-ratio="16 / 9"
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                        maxHeight: '200px',
                                    }}
                                />
                                <StyledCardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {product.description}
                                    </StyledTypography>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {product.price} €
                                    </Typography>
                                </StyledCardContent>
                            </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}