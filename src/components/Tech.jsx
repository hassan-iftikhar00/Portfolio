import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useMediaQuery } from "react-responsive"; // Add this import

const Tech = () => {
  const isLowEndDevice = useMediaQuery({ maxWidth: 768 }); // Define the media query

  // Select a subset of technologies for low-end devices
  const displayedTechnologies = isLowEndDevice
    ? technologies.slice(0, 4) // Display only the first 4 technologies on low-end devices
    : technologies;

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {displayedTechnologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {isLowEndDevice && (
        <p className="neon-text mt-5 p-3 text-center">
          You are missing something!!! Switch to a high-end device to see the
          rest of the technologies.
        </p>
      )}
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
