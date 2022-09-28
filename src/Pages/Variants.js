import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//variants are a way to define multiple states for a component and then animate between them using the animate attribute.

const Variants = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 3 }}
      className="home container"
    >
      <motion.h2
        whileHover={{ scale: 1.3, color: "#f8e112" }}
        transition={{ type: "spring", stiffness: "300" }}
      >
        Hover
      </motion.h2>
      <Link to="/variants">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Variants
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Variants;
