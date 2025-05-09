import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project, onDelete, isAdmin }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p><strong>Head:</strong> {project.head}</p>
      <p><strong>Members:</strong> {project.members}</p>
      <p><strong>Skills:</strong> {project.skills}</p>
      {isAdmin && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}

export default ProjectCard;
