import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//Transition attribute
//type of transition tween, inertia, spring

const Transition = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
      className="home container"
    >
      <motion.h2
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Transition
      </motion.h2>
      <Link to="/">
        <motion.button
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Transition
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Transition;
