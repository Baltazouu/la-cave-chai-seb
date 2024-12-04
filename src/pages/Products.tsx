import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Chip} from "@mui/material";
import {Product} from "../model/Product";
import ProductGrid from "../components/products/ProductGrid";
import Container from "@mui/material/Container";
import {wines} from "../data/products/Wines";
import {beers} from "../data/products/Beers";
import {whiskies} from "../data/products/Whiskies";
import {spirits} from "../data/products/Spirits";
import {useParams} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import {calvados} from "../data/products/Calvados";


export default function Products() {
    const [products, setProducts] = React.useState<Product[]>([...spirits, ...beers, ...wines, ...whiskies]);

    const { type } = useParams();

    React.useEffect(() => {
        switch (type) {
            case "wines":
                setProducts(wines);
                break;
            case "beers":
                setProducts(beers);
                break;
            case "whiskeys":
                setProducts(whiskies);
                break;
            case "spirits":
                setProducts(spirits);
                break;
            case "calvados":
                setProducts(calvados);
                break;
            default:
                const allProducts = [...wines, ...beers, ...whiskies, ...spirits];
                setProducts(allProducts);
        }
    }, [type]);

    const getChipStyles = (category: string) => {
        return type === category ? { backgroundColor: 'primary', color: 'white', cursor:'pointer' } : { backgroundColor: 'transparent', border: 'none', cursor:'pointer' };
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
                        component={RouterLink}
                        to={'/products'}
                        size="medium"
                        label="Tout voir"
                        sx={getChipStyles("all")}
                    />
                    <Chip
                        component={RouterLink}
                        to={'/products/wines'}
                        size="medium"
                        label="Vins"
                        sx={getChipStyles("wines")}
                    />
                    <Chip
                        component={RouterLink}
                        to={'/products/beers'}
                        size="medium"
                        label="Bières"
                        sx={getChipStyles("beers")}
                    />
                    <Chip
                        component={RouterLink}
                        to={'/products/whiskeys'}
                        size="medium"
                        label="Whisky"
                        sx={getChipStyles("whiskeys")}
                    />
                    <Chip
                        component={RouterLink}
                        to={'/products/spirits'}
                        size="medium"
                        label="Spiritueux"
                        sx={getChipStyles("spirits")}
                    />
                    <Chip
                        component={RouterLink}
                        to={'/products/calvados'}
                        size="medium"
                        label="Calvados"
                        sx={getChipStyles("calvados")}
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