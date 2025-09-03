import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import Favourite from "./components/Favourite/Favourite";
import Categories from "./components/Categories/Categories";
import Register from "./components/Authentication/Register/Register";
import Login from "./components/Authentication/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contacts US/Contact";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Products", element: <Products /> },
        { path: "/Cart", element: <Cart /> },
        { path: "/Brands", element: <Brands /> },
        { path: "/Favourite", element: <Favourite /> },
        { path: "/Categories", element: <Categories /> },
        { path: "/Register", element: <Register /> },
        { path: "/Login", element: <Login /> },
        {path:"/About", element:<About/>},
        {path:"/Contact", element:<Contact/>},
      ],
    },
  ]);
  return (
    <RouterProvider router={routers}>
      <Layout />
    </RouterProvider>
  );
};

export default App;
