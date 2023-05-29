import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import TaskDetails from "./Components/TaskDetails/TaskDetails";
import Main from "./Components/Main/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Main/>
          <Footer />
        </>
      ),
    },
    {
      path: "/tasks/:taskId",
      element: (
        <>
          <Header />
          <TaskDetails />
          <Footer />
        </>
      ),
    }
  ]);


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  );
