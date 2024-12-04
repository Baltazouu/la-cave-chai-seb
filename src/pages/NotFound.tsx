import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";


export default function NotFound() {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{
                display: 'flex', flexDirection: 'column',
                my: 2, gap: 4,
                justifyContent: 'center'
            }}>

            <Typography variant="h1" gutterBottom>
                Page Introuvable
            </Typography>

            <Typography variant={'body2'}>
                OOOPS ! La page que vous cherchez n'existe pas.
            </Typography>

            <Link component={RouterLink} to={'/'} color="text.secondary" variant="body2">
                Retourner à l'accueil
            </Link>


        </Container>
    )
}