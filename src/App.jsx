import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ErrorPage from "./pages/Error/ErrorPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import CheckOutPage from "./pages/CheckoutPage/CheckOutPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserDocumentAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.js";
import { setCurrentUser } from "./store/user/user-reducer.js";

//* The "Layout" function is a layout for all pages so that we can have a persistent navbar on all pages
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:category",
        element: <CategoryPage />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentAuth(user);
      }
      console.log(setCurrentUser(user));
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
