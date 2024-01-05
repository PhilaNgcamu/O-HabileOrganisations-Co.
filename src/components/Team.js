import React from "react";
import "./Team.css";

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
    {
      name: "About Us",
      position: "",
      bio: `At O-Habile Organisations & Co, we are more than just designers, planners, and architects; we are storytellers, innovators, and custodians of the future. We are a dynamic and forward-thinking firm committed to pushing the boundaries of creativity, innovation, and sustainability in the realms of planning, design, and architecture. While our journey has just begun, our passion, vision, and commitment to excellence set us apart as emerging leaders in the industry.\n\nWe believe in harnessing the collective expertise, creativity, and insights of our team, clients, and stakeholders to co-create solutions that are innovative, functional, and aesthetically pleasing. By fostering an environment of open communication and shared vision, we ensure that every project is a true reflection of collective excellence. With a focus on continuous learning, innovation, and growth, we are committed to establishing a legacy of excellence, integrity, and innovation. Our journey may have just begun, but our vision, passion, and commitment to excellence set the stage for a future filled with endless possibilities.\n\nO-Habile Organisation & Co. is not just a company; it's a vision, a mission, and a promise to redefine the future of design and architecture. Join us on this exciting journey as we embark on a quest to create spaces that inspire, innovate, and endure, setting new standards of excellence in the industry.`,
    },
  ];

  return (
    <div className="our-team">
      <h1 className="section-heading">Our Team</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="individual-team-member">
            <h2 className="member-name">{member.name}</h2>
            <h3 className="member-position" style={{ color: "black" }}>
              {member.position}
            </h3>
            <p style={{ color: "black" }} className="member-bio">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
