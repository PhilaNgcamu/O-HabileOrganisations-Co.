import React from "react";
import "./Team.css"; // Import the CSS file for styling

const Team = () => {
  const teamMembers = [
    {
      name: "Sibongumenzi Sithebe",
      position: "CEO / Founder",
      bio: "Sibongumenzi Sithebe is the visionary leader behind O-Habile Organisations & Co. With a passion for sustainable architecture and innovative design, he leads the company's mission to empower tomorrow's landscapes.",
    },
    {
      name: "Philasande Ngcamu",
      position: "Managing Director",
      bio: "As the Managing Director, Philasande Ngcamu oversees the operational aspects of the company. With a focus on excellence and growth, he plays a vital role in ensuring the company achieves its objectives.",
    },
    // Add more team members as needed
  ];

  return (
    <div className="team-container">
      <h1 className="section-heading">Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h2 className="member-name">{member.name}</h2>
            <h3 className="member-position">{member.position}</h3>
            <p className="member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
