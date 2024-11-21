import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		}}>
			<StyledEngineProvider injectFirst>
				<ScrollToTop />
				<App />
			</StyledEngineProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
