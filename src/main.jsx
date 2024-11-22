
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBook from "./component/BrowseBook.jsx";
import AddBook from "./component/AddBook.jsx";
import Hero from "./component/Hero.jsx";
import PopularBookList from "./component/PopularBookList.jsx";
import Error from "./component/Error.jsx";
import MoreDetail from "./component/MoreDetail.jsx";
import CategoryBooks from "./component/CategoryBooks.jsx";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <PopularBookList />
          </>
        ),
      },
      {
        path: "/browsebook",
        element: <BrowseBook />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/books/:id",
        element: <MoreDetail />,
      },
      {
        path: "/browsebook/books/:id",
        element: <MoreDetail />,
      },
      {
        path: "/book/:category/books/:id",
        element: <MoreDetail />,
      },
      {
        path: "/book/:category",
        element: <CategoryBooks />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={approuter} />
);
