import { motion } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const GitHubSticker = ({ onClick, isOpen }) => {
  return (
    <motion.div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
      animate={{
        x: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      onClick={onClick}
    >
      <div className="bg-[#915eff] p-4 rounded-l-lg shadow-lg hover:bg-[#7b4de3] transition-all">
        {isOpen ? (
          <FaTimes className="text-white text-3xl" />
        ) : (
          <FaGithub className="text-white text-3xl" />
        )}
      </div>
    </motion.div>
  );
};

export default GitHubSticker;
