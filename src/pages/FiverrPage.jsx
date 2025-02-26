/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Head from "next/head"; // Add this import
import FiverrProjects from "../components/FiverrProjects";

const FiverrPage = () => {
  const username = "Pasha";
  const profileUrl = "https://www.fiverr.com/pasha_hassan";

  return (
    <>
      <Head>
        <title>{username}'s Fiverr Profile</title>
        <meta
          name="description"
          content={`Check out ${username}'s Fiverr profile and gigs.`}
        />
        <meta
          name="keywords"
          content="Fiverr, gigs, projects, developer, portfolio"
        />
        <meta name="author" content={username} />
        <meta property="og:title" content={`${username}'s Fiverr Profile`} />
        <meta
          property="og:description"
          content={`Check out ${username}'s Fiverr profile and gigs.`}
        />
        <meta property="og:image" content="/default-avatar.png" />
        <meta property="og:url" content={profileUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${username}'s Fiverr Profile`} />
        <meta
          name="twitter:description"
          content={`Check out ${username}'s Fiverr profile and gigs.`}
        />
        <meta name="twitter:image" content="/default-avatar.png" />
      </Head>
      <FiverrProjects />
    </>
  );
};

export default FiverrPage;
