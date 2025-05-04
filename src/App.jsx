import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from './Layout/RootLayout';
import Home from './pages/Home';
import 'swiper/css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
