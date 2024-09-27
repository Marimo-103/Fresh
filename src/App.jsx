import React from 'react'
// React router dom........................
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './Pages/Home';
import Products from './Pages/Products';

// Routing setup.............................
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Route>
  )
);
// Routing setup.............................



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App