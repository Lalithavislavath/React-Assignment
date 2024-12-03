import React, { useState } from 'react';
import './index.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    { title: 'Portfolio Website', description: 'A modern portfolio website built with React.' },
    { title: 'Travel Planner', description: 'A web app for planning trips, including destinations, accommodations, and activities.' },
    { title: 'FoodHub App', description: 'A platform to discover and order food from local restaurants.' },
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ title: '', description: '' });
    }
  };


  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <form onSubmit={handleFormSubmit} className="project-form">
        <label>
          Project Title:
          <input type="text" name="title" value={newProject.title} onChange={handleInputChange}placeholder="Enter project title" required/>
        </label>
        <label>
          Project Description:
          <textarea name="description" value={newProject.description} onChange={handleInputChange}
            placeholder="Enter project description"
            required
          ></textarea>
        </label>
        <button type="submit">Add New Project</button>
      </form>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleDelete(index)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
