import { useEffect, useState } from "react";

const GitHubStats = () => {
  const [githubData, setGithubData] = useState(null);
  const username = "hassan-iftikhar00";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error("GitHub API error:", error);
      }
    };
    fetchData();
  }, []);

  if (!githubData) {
    return <p className="text-white">Loading GitHub stats...</p>;
  }

  return (
    <div className="flex flex-col items-center gap-3 pt-5">
      <h2 className="text-white text-2xl font-bold">{githubData.login}</h2>
      <img
        src={githubData.avatar_url}
        alt="GitHub Avatar"
        className="w-20 h-20 rounded-full"
      />
      <p className="text-white">Repositories: {githubData.public_repos}</p>
      <p className="text-white">Followers: {githubData.followers}</p>
      <p className="text-white">Following: {githubData.following}</p>
    </div>
  );
};

export default GitHubStats;
