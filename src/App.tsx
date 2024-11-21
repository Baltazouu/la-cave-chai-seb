import React from 'react';
import './App.css';
import AppTheme from "./theme/AppTheme";
import {CssBaseline} from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Container from "@mui/material/Container";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import TheRoom from "./pages/the-room/TheRoom";

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

              
              {/*<Latest />*/}
          </Container>
          <Footer />
      </AppTheme>
  );
}

export default App;
