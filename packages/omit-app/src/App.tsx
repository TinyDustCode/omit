import { useState } from "react";
import { OmitStyles, OmitProvider } from "omit-ui";
import { Route, Routes, Link } from "react-router-dom";
import ButtonPage from "./ pages/button/button";
import LinkPage from "./ pages/link/link";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <OmitProvider config={{ themeMode: mode }}>
      <OmitStyles />
      <div
        style={{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          boxSizing: "border-box",
          padding: 100,
          background: mode === "light" ? "white" : "rgb(36,36,36)",
          transition: "all 0.5s",
        }}
      >
        <div>
          {mode === "dark" ? (
            <button onClick={() => setMode("light")}>light</button>
          ) : (
            <button onClick={() => setMode("dark")}>dark</button>
          )}
        </div>
        <div className="route-list">
          <Link to="/butoon">ButtonPage</Link>
          <Link to="/link">Link</Link>
        </div>
        <Routes>
          <Route path="/link" element={<LinkPage />} />
          <Route path="/butoon" element={<ButtonPage />} />
        </Routes>
      </div>
    </OmitProvider>
  );
}

export default App;
