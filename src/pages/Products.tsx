import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Chip } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2"; // Import de Grid2
import { StyledCard } from "../components/StyledCard/StyledCard";
import { StyledCardContent } from "../components/StyledCard/StyledCardContent";
import { StyledTypography } from "../components/StyledCard/StyledTypoGraphy";
import { wines } from "../data/product/Wines";
import { Product } from "../model/Product";

export default function Products() {
    const products: Product[] = wines;

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
                <Typography variant="h1" gutterBottom>
                    Nos Produits
                </Typography>
                <Typography>Découvrez notre large gamme de produits</Typography>
            </Box>
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    gap: 3,
                    overflow: 'auto',
                }}
            >
                <Chip onClick={handleClick} size="medium" label="Tout voir" />
                <Chip
                    onClick={handleClick}
                    size="medium"
                    label="Vins"
                    sx={{
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />
                <Chip
                    onClick={handleClick}
                    size="medium"
                    label="Bières"
                    sx={{
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />
                <Chip
                    onClick={handleClick}
                    size="medium"
                    label="Whiskies"
                    sx={{
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />
                <Chip
                    onClick={handleClick}
                    size="medium"
                    label="Spiritueux"
                    sx={{
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />
            </Box>
            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
                {products.map((product, index) => (
                    <Grid key={index} columns={4} component="div">
                        <StyledCard
                            variant="outlined"
                            tabIndex={0}
                            sx={{ height: '100%' }}
                        >
                            <CardMedia
                                component="img"
                                alt={product.name}
                                image={product.img}
                                sx={{
                                    height: '300px',
                                    width:'300px',// Hauteur fixe pour une meilleure visibilité
                                   // objectFit: 'cover', // Ajuste l'image pour un rendu optimal
                                    borderRadius: 2,
                                }}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {product.description}
                                </StyledTypography>
                            </StyledCardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
