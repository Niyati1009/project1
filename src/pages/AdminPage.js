import React, { useState, useEffect } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [projectForm, setProjectForm] = useState({
    name: "",
    head: "",
    members: "",
    skills: "",
  });

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  const handleChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    const newProject = {
      ...projectForm,
      members: projectForm.members.split(",").map(m => m.trim()),
      skills: projectForm.skills.split(",").map(s => s.trim()),
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setProjectForm({ name: "", head: "", members: "", skills: "" });
  };

  const handleDelete = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-form">
        <input name="name" placeholder="Project Name" value={projectForm.name} onChange={handleChange} />
        <input name="head" placeholder="Project Head" value={projectForm.head} onChange={handleChange} />
        <input name="members" placeholder="Project Members (comma separated)" value={projectForm.members} onChange={handleChange} />
        <input name="skills" placeholder="Project Skills (comma separated)" value={projectForm.skills} onChange={handleChange} />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <div className="admin-projects">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h2>{project.name}</h2>
            <p><strong>Head:</strong> {project.head}</p>
            <p><strong>Members:</strong> {project.members.join(", ")}</p>
            <p><strong>Skills:</strong> {project.skills.join(", ")}</p>
            <button className="delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
