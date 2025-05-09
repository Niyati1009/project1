import React, { useEffect, useState } from "react";
import "./MemberPage.css";

const MemberPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  return (
    <div className="member-container">
      <h1>Project Skill Matrix</h1>
      <div className="member-projects">
        {projects.length === 0 ? (
          <p>No projects added yet.</p>
        ) : (
          projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h2>{project.name}</h2>
              <p><strong>Head:</strong> {project.head}</p>
              <p><strong>Members:</strong> {project.members.join(", ")}</p>
              <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MemberPage;
