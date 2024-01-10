import React from "react";
import { motion } from "framer-motion";

function Example() {
  return (
    <div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="app__container"
      >
        <h1>Dick for CSKA</h1>
      </motion.div>
    </div>
  );
}

export default Example;
