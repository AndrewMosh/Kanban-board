import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Header } from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
// import TaskDetails from "./Components/TaskDetails/TaskDetails";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/tasks/:taskId" element={<TaskDetails />} /> */}
            </Routes>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
