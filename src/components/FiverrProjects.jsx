import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaCheck,
  FaUser,
  FaClock,
  FaExternalLinkAlt,
  FaQuoteLeft,
  FaGlobe,
  FaComments,
  FaShoppingCart,
  FaHistory,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import FiverrSticker from "./FiverrSticker";

const FiverrProjects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fiverrData = {
    username: "Pasha",
    profileUrl: "https://www.fiverr.com/pasha_hassan?",
    level: "New",
    rating: 5.0,
    reviews: 6,
    orders: 7,
    responseTime: "1 hour",
    languages: ["English", "German", "French", "Spanish"],
    skills: [
      "Web developer",
      "Software developer ",
      "Node.js expert ",
      "MongoDB expert ",
      "JavaScript developer ",
      "Tailwind CSS expert ",
      "Rest API expert ",
      "Web application developer ",
      "Html expert ",
      "Website developer ",
      "React expert ",
      "Next.js developer ",
      "Vue.js expert ",
      "Three.js developer",
    ],
    gigs: [
      {
        id: 1,
        title:
          "I will build web applications with vuejs, react, nextjs, nodejs, mongodb, mern website",
        description:
          "I offer professional Full Stack Web Development services, including custom website development, e-commerce stores, landing pages, bug fixes, authentication systems, interactive components, SEO optimization, and design-to-code conversions. Using modern technologies like Vue.js, React, Next.js, Node.js, and MongoDB, I ensure fast, responsive, and scalable solutions tailored to your business needs. Let’s build something great—reach out to get started!",
        rating: 5.0,
        reviews: 6,
        startingPrice: 20,
        deliveryTime: "2 days",
        techStack: ["MongoDB", "Express.js", "React/Vue/Nextjs", "Node.js"],
        features: [
          "7 pages",
          "Design customization",
          "Content upload",
          "Responsive design",
          "Source code",
          "Detailed code comments",
        ],
      },
      {
        id: 2,
        title:
          "I will fix bugs and errors in react, vuejs, nextjs, nodejs, mongodb, mern website",
        description:
          "I provide professional bug fixing and debugging services for both front-end and back-end systems, ensuring your website runs smoothly and efficiently. My expertise covers React, Vue.js, Next.js, Node.js, and MongoDB, addressing issues like UI/UX problems, responsiveness, performance optimization, API integration, and deployment errors. With clean, scalable code and SEO-optimized solutions, I deliver fast and reliable fixes without compromising quality. Let’s make your application flawless—reach out now!",

        startingPrice: 10,
        deliveryTime: "1 days",
        techStack: [
          "React.js/Vue.js/Next.js",
          "Tailwind CSS",
          "Framer Motion",
          "MongoDB",
          "Express.js",
          "Node.js",
        ],
        features: [
          "Bug investigation",
          "Fix documentation",
          "Detailed code comments",
        ],
      },
      {
        id: 3,
        title:
          "I will create professional personal portfolio website with interactive 3d animations",
        description:
          "I create high-end, interactive, and 3D-animated portfolio websites tailored for freelancers, artists, designers, and business professionals. My services include custom portfolio designs, cool scroll animations, business and personal portfolios, responsive layouts, and lead-generation features. With creative, mobile-responsive, and SEO-optimized solutions, I ensure your portfolio stands out and attracts clients. Let’s build a portfolio that converts—reach out now!",

        startingPrice: 80,
        deliveryTime: "2 days",
        techStack: ["MongoDB", "Express.js", "React/Vue/Nextjs", "Node.js"],
        features: [
          "Functional website",
          "6 pages",
          "Content upload",
          "8 plugins/extensions",
          "Opt-in form",
          "Speed optimization",
          "Social media icons",
        ],
      },
      {
        id: 4,
        title:
          "I will create a responsive landing page website, high converting, SEO optimized design",
        description:
          "I design high-converting, SEO-optimized, and mobile-responsive landing pages that engage users and maximize conversions. My services include custom landing pages for businesses and products, lead generation pages, sales pages, squeeze pages, and coming soon pages. I also offer SEO optimization, conversion tracking setup, and interactive CTAs to enhance performance. Let’s create a landing page that turns visitors into customers—reach out now!",

        startingPrice: 80,
        deliveryTime: "2 days",
        techStack: ["React/Vue/Nextjs", "Node.js", "Tailwind", "Express.js"],
        features: [
          "Content upload",
          "10 plugins/extensions",
          "E-commerce functionality",
          "Payment Integration",
          "Opt-in form",
          "Autoresponder integration",
          "Speed optimization",
          "Social media icons",
        ],
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "virenpatel25",
      country: "United Kingdom",
      rating: 5,
      review: "It was great working with Pasha.",
      price: "Up to $50",
      duration: "5 weeks",
      gig: "Web Application",
      date: "1 month ago",
    },
    {
      id: 2,
      name: "packetsoutllc",
      country: "Ghana",
      rating: 5,
      review: "Excellent communication skills. Very good at what he does",
      price: "Up to $100",
      duration: "2 weeks",
      gig: "Web Application",
      date: "3 months ago",
    },
    {
      id: 3,
      name: "atifqamar277",
      country: "Canada",
      rating: 5,
      review:
        "It was a wonderful experience working with Pasha. I loved his professionalism in understanding the requirements and delivering the order before time. I will definitely recommend him and look forward to working with him in future as well.",
      price: "Up to $50",
      duration: "1 day",
      gig: "Web Application",
      date: "4 months ago",
    },
    {
      id: 4,
      name: "productshine",
      country: "Turkey",
      rating: 5,
      review:
        "Working with Pasha was a great experience! He integrated backend with mongoDb and cloudinary along with admin panel in my nextjs web app. The delivery was high quality, and exactly how i described. Hoping to work with him again!",
      price: "Up to $50",
      duration: "4 days",
      gig: "Web Application",
      date: "4 months ago",
    },
    {
      id: 5,
      name: "shehzaduppal",
      country: "United Kingdom",
      rating: 5,
      review: "Best Value for money. Very cheap but very good quality.",
      price: "Up to $50",
      duration: "2 days",
      gig: "Web Application",
      date: "4 months ago",
    },
    {
      id: 6,
      name: "haiderjee1",
      country: "United States",
      rating: 5,
      review:
        "It was great to work with Pasha. He is smart person easy to deal with and was able to understand the task quickly and deliver this without wasting any time. Appreciate their workmanship.",
      price: "Up to $50",
      duration: "1 day",
      gig: "Web Application",
      date: "4 months ago",
    },
  ];

  return (
    <>
      <FiverrSticker onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-screen w-full md:w-2/3 lg:w-1/2 bg-[#0A0A0A] overflow-y-auto z-40 border-l border-[#1dbf73]/30"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="fixed top-0 right-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#1dbf73] to-[#19a463] p-4 z-50"
            >
              <div className="flex items-center justify-center gap-3 text-white">
                <SiFiverr className="text-2xl animate-bounce" />
                <p className="text-lg font-medium">
                  ⚡ Ready to transform your ideas into reality? Let&apos;s
                  create something extraordinary! 🎯
                </p>
              </div>
            </motion.div>
            <section className="w-full flex flex-col items-center py-10 px-4 pt-28">
              {/* Profile Section */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-4xl bg-[#141414] p-6 rounded-xl backdrop-blur-sm border border-[#1dbf73]/20 mb-8 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
                  <SiFiverr className="w-full h-full text-[#1dbf73]" />
                </div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {fiverrData.username}
                  </h2>
                  <span className="bg-[#1dbf73] text-white px-3 py-1 rounded-full text-sm mb-4">
                    {fiverrData.level} Seller
                  </span>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full max-w-2xl">
                    <div className="stat-card group">
                      <div className="flex items-center justify-center gap-2">
                        <FaStar className="text-[#1dbf73] text-xl group-hover:scale-110 transition-transform" />
                        <p className="text-2xl font-bold text-[#1dbf73]">
                          {fiverrData.rating}
                        </p>
                      </div>
                      <p className="text-white/60 text-sm">Rating</p>
                    </div>
                    <div className="stat-card group">
                      <div className="flex items-center justify-center gap-2">
                        <FaComments className="text-[#1dbf73] text-xl group-hover:scale-110 transition-transform" />
                        <p className="text-2xl font-bold text-[#1dbf73]">
                          {fiverrData.reviews}
                        </p>
                      </div>
                      <p className="text-white/60 text-sm">Reviews</p>
                    </div>
                    <div className="stat-card group">
                      <div className="flex items-center justify-center gap-2">
                        <FaShoppingCart className="text-[#1dbf73] text-xl group-hover:scale-110 transition-transform" />
                        <p className="text-2xl font-bold text-[#1dbf73]">
                          {fiverrData.orders}
                        </p>
                      </div>
                      <p className="text-white/60 text-sm">Orders</p>
                    </div>
                    <div className="stat-card group">
                      <div className="flex items-center justify-center gap-2">
                        <FaHistory className="text-[#1dbf73] text-xl group-hover:scale-110 transition-transform" />
                        <p className="text-2xl font-bold text-[#1dbf73]">
                          {fiverrData.responseTime}
                        </p>
                      </div>
                      <p className="text-white/60 text-sm">Response Time</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {fiverrData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-[#1dbf73]/10 text-[#1dbf73] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Profile Button */}
                  <a
                    href={fiverrData.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1dbf73] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#19a463] transition-all transform hover:scale-105"
                  >
                    <FaUser /> View Full Profile{" "}
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </motion.div>

              {/* Reviews Section - Add this before the Gigs Grid */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-4xl mb-8"
              >
                <div className="absolute top-10 left-80 w-40 h-40 opacity-10">
                  <SiFiverr className="w-full h-full text-[#1dbf73]" />
                </div>
                <div className="absolute top-40 right-80 w-40 h-40 opacity-10">
                  <SiFiverr className="w-full h-full text-[#1dbf73]" />
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                  <SiFiverr className="w-full h-full text-[#1dbf73]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaStar className="text-[#1dbf73]" />
                  Latest Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: review.id * 0.1 }}
                      className="bg-[#141414] p-6 rounded-xl backdrop-blur-sm border border-[#1dbf73]/20 hover:border-[#1dbf73]/50 transition-all group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-white font-semibold">
                            {review.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-white/60">
                            <FaGlobe className="text-[#1dbf73]" />
                            {review.country}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-[#1dbf73]" />
                          <span className="text-white">{review.rating}.0</span>
                        </div>
                      </div>

                      <div className="relative mb-4">
                        <FaQuoteLeft className="absolute top-0 left-0 text-[#1dbf73]/20 text-xl" />
                        <p className="text-white/70 text-sm pl-7">
                          {review.review}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <FaClock className="text-[#1dbf73]" />
                          {review.duration}
                        </div>
                        <div>{review.date}</div>
                        <div className="text-[#1dbf73]">{review.price}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gigs Section - Added title */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full max-w-4xl mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <SiFiverr className="text-[#1dbf73]" />
                  My Gigs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fiverrData.gigs.map((gig, index) => (
                    <motion.div
                      key={gig.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#141414] p-6 rounded-xl backdrop-blur-sm border border-[#1dbf73]/20 hover:border-[#1dbf73]/50 transition-all group"
                    >
                      <h3 className="text-white text-xl font-semibold mb-3">
                        {gig.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {gig.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {gig.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <ul className="mb-4 space-y-2">
                        {gig.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-white/70 text-sm flex items-center gap-2"
                          >
                            <FaCheck className="text-[#1dbf73] text-xs" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Replace the incorrect if statement with proper conditional rendering */}
                      <div className="flex items-center justify-between mb-4">
                        {gig.rating && (
                          <span className="text-white/60 flex items-center gap-1">
                            <FaStar className="text-[#1dbf73]" />
                            {gig.rating} ({gig.reviews || 0})
                          </span>
                        )}
                        <span className="text-white/60 flex items-center gap-1">
                          <FaClock className="text-[#1dbf73]" />
                          {gig.deliveryTime}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-[#1dbf73] font-semibold">
                          Starting at ${gig.startingPrice}
                        </span>
                        <a
                          href={`${fiverrData.profileUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#1dbf73] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#19a463] transition-all transform hover:scale-105"
                        >
                          Order Now
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FiverrProjects;
