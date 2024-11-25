import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Chip} from "@mui/material";
import {Product} from "../model/Product";
import ProductGrid from "../components/products/ProductGrid";
import Container from "@mui/material/Container";
import {wines} from "../data/product/Wines";
import {beers} from "../data/product/Beers";
import {whiskies} from "../data/product/Whiskies";
import {spirits} from "../data/product/Spirits";

export default function Products() {
    const [products, setProducts] = React.useState<Product[]>([...spirits, ...beers,...wines, ...whiskies]);
    const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

    const handleClick = (category: string) => {
        setSelectedCategory(category);
        switch (category) {
            case "Wines":
                setProducts(wines);
                break;
            case "Beers":
                setProducts(beers);
                break;
            case "Whiskies":
                setProducts(whiskies);
                break;
            case "Spirits":
                setProducts(spirits);
                break;
            default:
                const allProducts = [...wines, ...beers, ...whiskies, ...spirits];
                setProducts(allProducts);
        }
    };

    const getChipStyles = (category: string) => {
        return selectedCategory === category ? { backgroundColor: 'primary', color: 'white' } : { backgroundColor: 'transparent', border: 'none' };
    };

    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex',
                flexDirection: 'column',
                my: 2, gap: 4
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', gap: 4 }}>
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
                    <Chip
                        onClick={() => handleClick("All")}
                        size="medium"
                        label="Tout voir"
                        sx={getChipStyles("All")}
                    />
                    <Chip
                        onClick={() => handleClick("Wines")}
                        size="medium"
                        label="Vins"
                        sx={getChipStyles("Wines")}
                    />
                    <Chip
                        onClick={() => handleClick("Beers")}
                        size="medium"
                        label="Bières"
                        sx={getChipStyles("Beers")}
                    />
                    <Chip
                        onClick={() => handleClick("Whiskies")}
                        size="medium"
                        label="Whiskies"
                        sx={getChipStyles("Whiskies")}
                    />
                    <Chip
                        onClick={() => handleClick("Spirits")}
                        size="medium"
                        label="Spiritueux"
                        sx={getChipStyles("Spirits")}
                    />
                </Box>
                <ProductGrid products={products} />

                <Typography color="text.secondary" variant={'body1'}>
                    Découvrez plus de produits directement à la cave
                </Typography>

            </Box>

        </Container>
    );
}