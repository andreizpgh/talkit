import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";
import { AnimatePresence } from "motion/react";
import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";
import GamePage from "../pages/GamePage";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  const [exitDirection, setExitDirection] = useState(null);

  const getAnimationProps = (pathname, exitDirection) => {
    if (exitDirection === "settings") {
      return { initial: { x: "100%" }, exit: { x: "100%" } };
    } else if (exitDirection === "game") {
      return { initial: { x: "-100%" }, exit: { x: "-100%" } };
    } else {
      return { initial: { x: "100%" }, exit: { x: 0 } };
    }
  };

  const { initial, exit } = getAnimationProps(location.pathname, exitDirection);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/"
          element={
            <MainPage
              initial={initial}
              exit={exit}
              setExitDirection={setExitDirection}
            />
          }
        />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </AnimatePresence>
  );
};

const AnimatedRoutes = () => {
  return (
    <Router>
      <div className="container">
        <App />
      </div>
    </Router>
  );
};

export default AnimatedRoutes;
