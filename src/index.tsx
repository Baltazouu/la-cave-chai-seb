import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<ScrollToTop />
				<App />
			</StyledEngineProvider>
		</BrowserRouter>
	</React.StrictMode>
);