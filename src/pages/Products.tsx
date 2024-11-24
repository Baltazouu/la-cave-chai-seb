import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Chip} from "@mui/material";
import {wines} from "../data/product/Wines";
import {Product} from "../model/Product";
import ProductGrid from "../components/products/ProductGrid";
import Container from "@mui/material/Container";
import {beers} from "../data/product/Beers";
import {whiskies} from "../data/product/Whiskies";
import {spirits} from "../data/product/Spirits";

export default function Products() {

    const [products, setProducts] = React.useState<Product[]>(wines);


    const handleClick = (category: string) => {
        switch (category) {
            case "Vins":
                setProducts(wines);
                break;
            case "Bières":
                setProducts(beers);
                break;
            case "Whiskies":
                setProducts(whiskies);
                break;
            case "Spiritueux":
                setProducts(spirits);
                break;
            default:
                setProducts(wines);
        }
    };

    return (

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 2, gap: 4 }}
        >
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
                    <Chip onClick={() => handleClick("Tout voir")} size="medium" label="Tout voir" />
                    <Chip onClick={() => handleClick("Vins")} size="medium" label="Vins" sx={{ backgroundColor: 'transparent', border: 'none' }} />
                    <Chip onClick={() => handleClick("Bières")} size="medium" label="Bières" sx={{ backgroundColor: 'transparent', border: 'none' }} />
                    <Chip onClick={() => handleClick("Whiskies")} size="medium" label="Whiskies" sx={{ backgroundColor: 'transparent', border: 'none' }} />
                    <Chip onClick={() => handleClick("Spiritueux")} size="medium" label="Spiritueux" sx={{ backgroundColor: 'transparent', border: 'none' }} />

                </Box>
                <ProductGrid products={products}/>
            </Box>
        </Container>
    );
}
