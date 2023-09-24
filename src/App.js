import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Verify from './Component/Verify';
import Login  from './Component/Login/Login';
import Welcome from './Component/Welcome';
function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/verify",
      element: <Verify/>,
    },
    {
      path: "/welcome",
      element: <Welcome/>,
    },
  ]);
  
  return (
    <div>
   <RouterProvider router={router} /> 
    </div>

  );
}

export default App;
