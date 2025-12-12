import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "restaurant/:id", element: <Restaurant /> },
      { 
        path: "cart", 
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ) 
      },
      { path: "login", element: <Login /> },
    ],
  },
]);
