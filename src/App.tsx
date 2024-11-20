import React from 'react';
import './App.css';
import AppTheme from "./theme/AppTheme";
import {CssBaseline} from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Container from "@mui/material/Container";
import MainContent from "./pages/home-page/MainContent";
import Footer from "./components/footer/Footer";

function App(props: { disableCustomTheme?: boolean }) {
  return (

      <AppTheme {...props}>
          <CssBaseline enableColorScheme />

          <Navbar />
          <Container
              maxWidth="lg"
              component="main"
              sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>

              <MainContent />
              {/*<Latest />*/}
          </Container>
          <Footer />
      </AppTheme>
  );
}

export default App;
