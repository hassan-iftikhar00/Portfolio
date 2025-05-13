import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import PDFViewer from "./PDFViewer";
import { SectionWrapper } from "../hoc";

const Resume = () => {
  const pdfUrl = "/CV/Hassan_Iftikhar_Resume.docx.pdf";
  // const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  // const scaleValue = isSmallDevice ? 0.4 : 1.3;
  return (
    <>
      <Helmet>
        <title>Hassan Iftikhar - Resume | Full Stack Developer</title>
        <meta
          name="description"
          content="View and download Hassan Iftikhar's resume. Experienced Full Stack Developer specializing in MERN and MEVN stacks."
        />
        <meta
          name="keywords"
          content="Resume, CV, Full Stack Developer, Web Development, Hassan Iftikhar"
        />
      </Helmet>
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
          className="mt-4 bg-[#915eff] text-lg text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#7b4de3] transition-all flex flex-row "
        >
          <AiOutlineDownload size={27} className="mx-3" />
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
