import React, { useState } from "react";
import "./ProjectSkillForm.css";

function ProjectSkillForm({ onAddProject }) {
  const [form, setForm] = useState({ name: "", head: "", members: "", skills: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject({ ...form });
    setForm({ name: "", head: "", members: "", skills: "" });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Project Name" value={form.name} onChange={handleChange} required />
      <input name="head" placeholder="Project Head" value={form.head} onChange={handleChange} required />
      <input name="members" placeholder="Project Members" value={form.members} onChange={handleChange} required />
      <input name="skills" placeholder="Project Skills" value={form.skills} onChange={handleChange} required />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectSkillForm;
