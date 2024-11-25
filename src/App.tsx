import React from 'react';
import './App.css';
import AppTheme from "./theme/AppTheme";
import {CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import TheRoom from "./pages/TheRoom";

function App(props: { disableCustomTheme?: boolean }) {
  return (

      <AppTheme {...props}>
          <CssBaseline enableColorScheme />

          <Navbar />
          <Container
              maxWidth="lg"
              component="main"
              sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/products" element={<Products/>} />
                      <Route path="/the-room" element={<TheRoom/>} />
                      <Route path="/about" element={<About/>} />
                  </Routes>
          </Container>
          <Footer />
      </AppTheme>
  );
}

export default App;
