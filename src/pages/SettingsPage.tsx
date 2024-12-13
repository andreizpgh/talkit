import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SettingsPage = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween" }}
    >
      <h1>Settings Page</h1>
      <Link to="/">
        <button>Back</button>
      </Link>
    </motion.div>
  );
};

export default SettingsPage;
