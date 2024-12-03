import React, { useState } from 'react';
import './index.css';

const Skills = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React JS']);
  const [newSkill, setNewSkill] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editedSkill, setEditedSkill] = useState(''); 

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  const handleEditSkill = (index) => {
    setEditingIndex(index);
    setEditedSkill(skills[index]);
  };

  const handleSaveEdit = () => {
    if (editedSkill && !skills.includes(editedSkill)) {
      const updatedSkills = [...skills];
      updatedSkills[editingIndex] = editedSkill;
      setSkills(updatedSkills);
    }
    setEditingIndex(null); 
    setEditedSkill('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedSkill('');
  };

  return (
    <div className="skills-section">
      <h2>Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedSkill}
                  onChange={(e) => setEditedSkill(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleSaveEdit} className="save-button">Save</button>
                <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
              </>
            ) : (
              <>
                {skill}
                <button onClick={() => handleEditSkill(index)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteSkill(skill)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddSkill} className="add-skill-form">
        <input type="text" value={newSkill} onChange={handleInputChange} placeholder="Add a new skill" />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default Skills;
