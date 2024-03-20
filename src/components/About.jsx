import React, { useState } from "react";
import EmircanImg from "../assets/Emircan.png";
import AtaImg from "../assets/Ata.jpg";
import MustafaImg from "../assets/Mustafa.jpg";
import "./About.css"; // Adjust the path if your file structure is different
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const TeamMemberCard = ({
  name,
  position,
  imgSrc,
  quote,
  linkedinUrl,
  major,
}) => {
  // Assuming 'major' is the new piece of information
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flip" : ""}`} onClick={handleClick}>
      <div className="card__face card__face--front">
        <img src={imgSrc} alt={`${name} profile`} />
        <div className="text-overlay">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="card__face card__face--back">
        <p>{quote}</p>
        <p>{major}</p> {/* Displaying the additional information */}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <img src={imgSrc} alt={`${name} profile`} />
      </div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "Emircan Kartal",
      position: "App Developer",
      imgSrc: EmircanImg,
      quote: "''Interlinked.''",
      linkedinUrl: "https://www.linkedin.com/in/emircankartal/",
      major: "Computer Science",
    },
    {
      name: "Ata Tan Dağıdır",
      position: "Web Developer",
      imgSrc: AtaImg,
      quote: "''F*ck Society''",
      linkedinUrl: "https://www.linkedin.com/in/ata-dagidir/",
      major: "Computer Science and Industrial Design",
    },
    {
      name: "Mustafa Garip",
      position: "Game Developer",
      imgSrc: MustafaImg,
      quote:
        "''A good plan violently executed now is better than a perfect plan executed next week. ''",
      linkedinUrl: "https://www.linkedin.com/in/mustafgarip/",
      major: "Computer Science",
    },
  ];

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Introductory Text Section */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. We are Euphor, happy to see you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              On Science, Tech, Society, Philosophy, Entrepreneurship, and
              Internet Culture. Our podcast brings these topics to life through
              entertaining discussions, ranging from daily experiences to
              meticulously researched subjects.
            </p>
          </div>
        </div>
        {/* Team Members Section */}
        <div className="team-members-section">
          <h2 className="text-3xl font-bold text-center my-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
