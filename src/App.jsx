// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import About from './pages/About';
import { Movie } from "./pages/Movie";
import { Contact, contactData }from './pages/Contacts.jsx'; // change if it's a default export
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { getMoviesData } from "./api/GetAPIData.jsx";
import { MovieDetails } from "./components/UI/MovieDetails.jsx";
import { getMoviesDetails } from "./api/GetMovieDetails.jsx";

const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "movie",
        element: <Movie />,
        loader: getMoviesData,
      },
      {
        path: "movie/:movieID",
        element: <MovieDetails />,
        loader:getMoviesDetails ,
      },
      {
        path: "contact",
        element: <Contact />,
        action: contactData,
      },
      // {
      //   path: "*",
      //   element: <ErrorPage />
      // }
    ]
  }
]);
  return <RouterProvider router={router} />;
};



export default App;
