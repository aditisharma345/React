import "./App.css";
import React, { useState } from "react";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                key="Business"
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key="Entertainment"
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                setProgress={setProgress}
                key="General"
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                key="Health"
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                key="Science"
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                key="Sports"
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                key="Technology"
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
