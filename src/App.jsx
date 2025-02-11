import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home';
import Pastes from './components/Pastes';
import ViewPaste from './components/ViewPaste';
import Nav from './components/nav';
// import Nav from './components/Nav';
// import Nav from './components/Nav';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <Nav />
        <Home />
      </div>
    },
    {
      path:"/pastes",
      element: <div>
        <Nav/>
        <Pastes/>
      </div>
    },
    {
      path:"/pastes/:id",
      element: <div>
        <Nav/>
        <ViewPaste/>
      </div>
    },
  ]
);


function App() {
 

  return (
    <>
     {/* <RouterProvider router={router}/> */}
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
