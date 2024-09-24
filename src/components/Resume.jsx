import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import PDFViewer from "./PDFViewer";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  const pdfUrl = "/CV/Hassan_Iftikhar_Resume.pdf";
  return (
    <>
      <motion.div variants={textVariant()} className="mt-40">
        <p className={styles.sectionSubText}>
          Ready to explore my professional journey? Check out my
        </p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>
      <div className=" inset-x-0 bottom-[200px] w-full flex justify-center items-center flex-col mt-20">
        <PDFViewer pdfUrl={pdfUrl} rounded-xl />

        <a
          href={pdfUrl}
          download="Hassan_Iftikhar_Resume.pdf"
          className="mt-4 bg-[#915eff] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#7b4de3] transition-all"
        >
          Download My Resume
        </a>
      </div>
      {/* cards */}
      <div className="mt-20 flex flex-wrap gap-10 lg:gap-20"></div>
    </>
  );
};

const WrappedResume = SectionWrapper(Resume, "resume");
export default WrappedResume;
