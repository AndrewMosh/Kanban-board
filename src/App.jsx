import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskDetails from "./Components/TaskDetails/TaskDetails";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  //сохраняем каждый state  в LS
  const Backlog = JSON.parse(window.localStorage.getItem("backlog")) || [];
  const [backlog, setBacklog] = useState(Backlog);
  const Ready = JSON.parse(window.localStorage.getItem("ready")) || [];
  const [ready, setReady] = useState(Ready);
  const Progress = JSON.parse(window.localStorage.getItem("progress")) || [];
  const [progress, setProgress] = useState(Progress);
  const Finished = JSON.parse(window.localStorage.getItem("finished")) || [];
  const [finished, setFinished] = useState(Finished);

  useEffect(() => {
    window.localStorage.setItem("backlog", JSON.stringify(backlog));
    window.localStorage.setItem("ready", JSON.stringify(ready));
    window.localStorage.setItem("progress", JSON.stringify(progress));
    window.localStorage.setItem("finished", JSON.stringify(finished));
  }, [backlog, ready, progress, finished]);

  //создаем отдельный адрес для backlog, ready, in progress, finished
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            }
          ></Route>
          <Route
            path="/backlog/:taskId"
            element={
              <TaskDetails
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            }
          ></Route>
          <Route
            path="/ready/:taskId"
            element={
              <TaskDetails
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            }
          ></Route>
          <Route
            path="/progress/:taskId"
            element={
              <TaskDetails
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            }
          ></Route>
          <Route
            path="/finished/:taskId"
            element={
              <TaskDetails
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            }
          ></Route>
        </Routes>
      </Router>
      <Footer backlog={backlog} finished={finished} />
    </div>
  );
}
export default App;
