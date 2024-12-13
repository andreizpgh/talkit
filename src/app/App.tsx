import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router";
import { AnimatePresence } from "framer-motion";
import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";
import GamePage from "../pages/GamePage";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/settings" element={<SettingsPage />} />
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
