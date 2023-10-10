import React, { useState } from "react";
import { EducationItem } from "./EducationItem";
import { v4 as uuidv4 } from "uuid";

export const Education = (props) => {
  const [state, setState] = useState({
    education: [
      {
        key: uuidv4(),
        school: "",
        diploma: "",
        from: "",
        to: "",
      },
    ],
  });

  const handleAddEducation = (e) => {
    e.preventDefault();
    setState({
      education: [
        ...state.education,
        {
          key: uuidv4(),
          school: "",
          diploma: "",
          from: "",
          to: "",
        },
      ],
    });
  };

  const handleDeleteEducation = (e, key) => {
    e.preventDefault();
    const newEducation = state.education.filter(
      (educationItem) => educationItem.key !== key
    );

    setState({
      education: [...newEducation],
    });
  };

  const educationItems = state.education.map((educationItem) => {
    return (
      <EducationItem
        key={educationItem.key}
        id={educationItem.key}
        school={educationItem.school}
        diploma={educationItem.diploma}
        from={educationItem.from}
        to={educationItem.to}
        onDelete={handleDeleteEducation}
      />
    );
  });

  return (
    <div className="education">
      <h2 className="section--title">Education</h2>
      <button className="add" onClick={handleAddEducation}>
        + Add Education Experience
      </button>
      {educationItems}
    </div>
  );
};
