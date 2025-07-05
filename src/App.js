import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';
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
      </div>
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
