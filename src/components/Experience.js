import React, { useState } from "react";
import { ExperienceItem } from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export const Experience = (props) => {
  const [state, setState] = useState({
    experience: [
      {
        key: uuidv4(),
        company: "",
        title: "",
        tasks: "",
        from: "",
        to: "",
      },
    ],
  });

  const handleAddExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: [
        ...state.experience,
        {
          key: uuidv4(),
          company: "",
          title: "",
          tasks: "",
          from: "",
          to: "",
        },
      ],
    });
  };

  const handleDeleteExperience = (e, key) => {
    e.preventDefault();
    const newExperience = state.experience.filter(
      (experienceItem) => experienceItem.key !== key
    );

    setState({
      experience: [...newExperience],
    });
  };

  const experienceItems = state.experience.map((experienceItem) => {
    return (
      <ExperienceItem
        key={experienceItem.key}
        id={experienceItem.key}
        company={experienceItem.company}
        title={experienceItem.title}
        tasks={experienceItem.tasks}
        from={experienceItem.from}
        to={experienceItem.to}
        onDelete={handleDeleteExperience}
      />
    );
  });

  return (
    <div>
      <h2 className="section--title">Experience</h2>
      <button onClick={handleAddExperience}>+ Add Work Experience</button>
      {experienceItems}
    </div>
  );
};
