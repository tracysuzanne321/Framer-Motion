import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Animate = () => {
  return (
    <motion.div
      animate={{ rotateZ: 180, marginTop: 200 }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50, color: "#ff2994", x: 100, y: -100 }}>
        Animate
      </motion.h2>
      <Link to="/initial-state">
        <motion.button animate={{ scale: 1.5 }}>Initial State</motion.button>
      </Link>
    </motion.div>
  );
};

export default Animate;
