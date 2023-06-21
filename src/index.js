import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TaskDetails from "./Components/TaskDetails/TaskDetails";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Kanban-board" element={<Main />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
