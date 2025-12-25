import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);