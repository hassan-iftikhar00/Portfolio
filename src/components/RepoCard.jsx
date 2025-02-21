/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const RepoCard = ({ repo }) => {
  return (
    <div className="bg-[#1f1f1f] p-4 rounded-lg shadow-md">
      <h3 className="text-white text-xl font-semibold mb-2">{repo.name}</h3>
      <p className="text-gray-300 text-sm mb-2">
        {repo.description || "No description provided."}
      </p>
      <p className="text-gray-400 mb-2">Language: {repo.language || "N/A"}</p>
      <div className="flex gap-2">
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915eff] text-white px-3 py-2 rounded-md hover:bg-[#7b4de3] transition-colors"
          >
            Demo
          </a>
        )}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#915eff] text-white px-3 py-2 rounded-md hover:bg-[#7b4de3] transition-colors"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
