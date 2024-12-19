import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const MainPage = ({ initial, exit, setExitDirection }) => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    setExitDirection("settings");
    navigate("/settings");
  };

  const handleGameClick = () => {
    setExitDirection("game");
    navigate("/game");
  };

  return (
    <motion.div
      className="page"
      initial={initial}
      animate={{ x: 0 }}
      exit={exit}
      transition={{ type: "tween" }}
    >
      <div>
        <h1>Main Page</h1>
        <button onClick={handleSettingsClick}>Settings</button>
        <button onClick={handleGameClick}>Start</button>
      </div>
    </motion.div>
  );
};

export default MainPage;
