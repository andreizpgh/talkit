import { Link } from "react-router-dom";
import { motion } from "motion/react";

const GamePage = () => {
  return (
    <motion.div
      className="page"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
    >
      <div>
        <h1>Game Page</h1>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default GamePage;
