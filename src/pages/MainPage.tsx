import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween" }}
    >
      <h1>Main Page</h1>
      <Link to="/settings">
        <button>Settings</button>
      </Link>
      <Link to="/game">
        <button>Start</button>
      </Link>
    </motion.div>
  );
};

export default MainPage;
