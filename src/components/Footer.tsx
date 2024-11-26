import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaCaveIcon from './LaCaveIcon';

function Copyright() {
  return (
      <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {'La cave Chai Seb et ses amis Copyright ©'}
          &nbsp;
          {new Date().getFullYear()}
        </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              {'Site réalisé par '}
          <Link color="text.secondary" href="https://www.linkedin.com/in/baptiste-dudonné-68852926b/" target={"_blank"}>
               Baptiste Dudonné
          </Link>
          </Typography>
      </Box>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '60%' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
              <LaCaveIcon />
              <Typography
                variant="body2"
                gutterBottom
                sx={{ fontWeight: 600, mt: 2 }}
              >
                Rejoignez notre newsletter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Tenez vous au courant des évènement organisés
              </Typography>
              <InputLabel htmlFor="email-newsletter">Email</InputLabel>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="email-newsletter"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Entrez votre addresse email"
                  placeholder="Votre addresse email"
                  slotProps={{
                    htmlInput: {
                      autoComplete: 'off',
                      'aria-label': 'Entrez votre addresse email',
                    },
                  }}
                  sx={{ width: '250px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                >
                  S'abonner
                </Button>
              </Stack>
            </Box>
          </Box>
          <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems='flex-start'
              mt={{xs:1,sm:0}}
              justifyContent={'center'}
              gap={1}>
              <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: 600, mt: 2 }}
              >
                  Rejoignez notre newsletter
              </Typography>
            <Link color="text.secondary" variant="body2" href="tel:0231234567">
                02 31 23 45 67
            </Link>
            <Link color="text.secondary" variant="body2" href="mailto:chaisebetsesamis@gmail.com">
                chaisebetsesamis@gmail.com
            </Link>
            <Link color="text.secondary" variant="body2" href={'https://maps.app.goo.gl/Z5ygnz97R5aqhntH6'} target={'_blank'}>
                61 rue du Général Leclerc, Lisieux, France
            </Link>
          </Box>

        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box>

            <Copyright />
          </Box>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://www.facebook.com/profile.php?id=61553453008072"
              aria-label="Facebook"
              target={'_blank'}
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.instagram.com/lacavechaisebetsesamis/"
              aria-label="X"
              sx={{ alignSelf: 'center' }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
