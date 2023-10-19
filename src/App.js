import './App.css';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Home from './Components/Home';
import Loading from './Components/Loading';
import Main from './Components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Loading/>
    },
    {
      path:'home',
      element:<Home/>
    },
    {
      path:'/details',
      element:<Details/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
])
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
