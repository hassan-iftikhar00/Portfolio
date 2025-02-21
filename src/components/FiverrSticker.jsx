import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";
import { FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const FiverrSticker = ({ onClick, isOpen }) => {
  return (
    <motion.div
      className="fixed right-0 top-[60%] transform -translate-y-1/2 cursor-pointer z-50"
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
      <div className="bg-[#1dbf73] p-4 rounded-l-lg shadow-lg hover:bg-[#19a463] transition-all">
        {isOpen ? (
          <FaTimes className="text-white text-3xl" />
        ) : (
          <SiFiverr className="text-white text-3xl" />
        )}
      </div>
    </motion.div>
  );
};

export default FiverrSticker;
