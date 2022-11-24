import { useState, Fragment } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { GlobalProvider } from "omit-design";
import ButtonPage from "./ pages/button/button";
import LinkPage from "./ pages/link/link";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <Fragment>
      <div>
        {mode === "dark" ? (
          <button onClick={() => setMode("light")}>light</button>
        ) : (
          <button onClick={() => setMode("dark")}>dark</button>
        )}
      </div>
      <GlobalProvider
        theme={{
          themeMode: mode,
          palette: { primary: "red" },
        }}
      >
        <div
          style={{
            height: "calc(100vh)",
            position: "absolute",
            left: 0,
            width: "100vw",
            boxSizing: "border-box",
            padding: 100,
            background: mode === "light" ? "white" : "rgb(36,36,36)",
            transition: "all 0.5s",
          }}
        >
          <div className="route-list">
            <Link to="/butoon">ButtonPage</Link>
            <Link to="/link">Link</Link>
          </div>
          <Routes>
            <Route path="/link" element={<LinkPage />} />
            <Route path="/butoon" element={<ButtonPage />} />
          </Routes>
        </div>
      </GlobalProvider>
    </Fragment>
  );
}

export default App;
