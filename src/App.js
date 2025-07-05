import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
import Courses from './component/Courses';
import Mocktest from './component/Mocktest';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"mocktest",
          element:<Mocktest/>
        },
        {
          path:"courses",
          element:<Courses/>
        }
      ]
      
    }
  ]
)
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
