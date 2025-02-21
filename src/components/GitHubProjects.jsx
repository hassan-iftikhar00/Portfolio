import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaCode, FaLink, FaGithub } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import GitHubSticker from "./GitHubSticker";
import GitHubCalendar from "react-github-calendar"; // Add this import
import { useMediaQuery } from "react-responsive"; // Add this import

const GitHubProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = "hassan-iftikhar00";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const togglePanel = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch(
          `https://api.github.com/users/${username}`
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error("GitHub API error:", error);
      }
    };
    fetchGitHubData();
  }, []);

  const theme = {
    light: ["#f0f0f0", "#915eff"],
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  // Add this for responsive scaling
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  const blockSize = isSmallDevice ? 8 : 10;
  const fontSize = isSmallDevice ? 12 : 14;

  return (
    <>
      <GitHubSticker onClick={togglePanel} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-screen w-full md:w-2/3 lg:w-1/2 bg-gradient-to-b from-[#100d25] to-[#050816] overflow-y-auto z-40 border-l border-[#915eff]/30"
          >
            {/* Update the banner message */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="fixed top-0 right-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#915eff] to-[#7b4de3] p-4 z-50"
            >
              <div className="flex items-center justify-center gap-3 text-white">
                <FaGithub className="text-2xl animate-bounce" />
                <p className="text-lg font-medium">
                  🚀 Check out my latest projects! Let&apos;s build something
                  amazing together! ⚡
                </p>
              </div>
            </motion.div>
            {/* Rest of your existing component */}
            <section className="w-full flex flex-col items-center py-10 px-4 pt-28">
              {profile ? (
                <>
                  {/* Profile Section with two columns */}
                  <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mb-12 items-center">
                    {/* Left Column - Profile Info */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="flex flex-col items-center md:items-center space-y-4 md:w-1/3"
                    >
                      <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer flex flex-col items-center"
                      >
                        <div className="w-32 h-32 rounded-full border-4 border-[#915eff] p-1 mb-4 relative group-hover:border-[#7b4de3] transition-colors">
                          <img
                            src={profile.avatar_url}
                            alt="Profile Avatar"
                            className="w-full h-full rounded-full"
                          />
                          <div className="absolute inset-0 rounded-full bg-[#915eff]/20 animate-pulse" />
                        </div>
                        <h2 className="text-white text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#915eff] to-[#7b4de3] group-hover:from-[#7b4de3] group-hover:to-[#915eff] transition-all text-center">
                          {profile.name}
                        </h2>
                      </a>
                      <p className="text-white/80 text-lg text-center">
                        {profile.bio}
                      </p>
                      <div className="bg-black/30 px-6 py-3 rounded-xl backdrop-blur-sm">
                        <p className="text-2xl font-bold text-[#915eff] text-center">
                          {profile.public_repos}
                        </p>
                        <p className="text-white/60">Repositories</p>
                      </div>
                    </motion.div>

                    {/* Updated Contributions Calendar Section */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="w-full md:w-2/3 bg-black/20 p-6 rounded-xl backdrop-blur-sm"
                    >
                      <h3 className="text-white/80 mb-4 text-xl font-semibold">
                        Contributions
                      </h3>
                      <div className="overflow-x-auto contribution-scroll">
                        <div className="min-w-max flex justify-center">
                          <GitHubCalendar
                            username={username}
                            theme={theme}
                            hideColorLegend
                            hideMonthLabels
                            colorScheme="dark"
                            blockSize={blockSize}
                            fontSize={fontSize}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Repositories Grid */}
                  <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
                    {repos.map((repo, index) => (
                      <motion.div
                        key={repo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/30 p-6 rounded-xl backdrop-blur-sm border border-[#915eff]/20 hover:border-[#915eff]/50 transition-all group"
                      >
                        <h3 className="text-[#915eff] text-xl font-semibold mb-3 flex items-center gap-2">
                          <FaCode className="text-white/60" />
                          {repo.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-4">
                          {repo.description || "No description provided."}
                        </p>

                        <div className="flex items-center gap-4 mb-4 text-sm">
                          {repo.language && (
                            <span className="text-white/60 flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full bg-[#915eff]"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="text-white/60 flex items-center gap-1">
                            <FaStar className="text-[#915eff]" />
                            {repo.stargazers_count}
                          </span>
                          <span className="text-white/60 flex items-center gap-1">
                            <BiGitRepoForked className="text-[#915eff]" />
                            {repo.forks_count}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {!!repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-[#915eff] to-[#7b4de3] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity"
                            >
                              <FaLink /> Demo
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-white/20 transition-colors"
                          >
                            <FaCode /> Code
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#915eff]"></div>
                </div>
              )}
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GitHubProjects;
