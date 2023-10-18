import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className="">
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>
);
