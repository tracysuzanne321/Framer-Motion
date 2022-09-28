import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//initial state - set state before animation

const InitialState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="home container"
    >
      <motion.h2 initial={{ y: -250 }} animate={{ y: 0 }}>
        Initital State
      </motion.h2>
      <Link to="/transition">
        <motion.button initial={{ x: "-100vw" }} animate={{ x: 0 }}>
          Transition
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default InitialState;
