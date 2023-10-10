import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Skills = (props) => {

  const [state, setState] = useState({
    skill: {
      text: "",
      id: uuidv4(),
    },
    skills: [],
    isSubmitted: false,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      skill: {
        text: e.target.value,
        id: state.skill.id,
      },
    });
  };

  const onSubmitSkill = (e) => {
    e.preventDefault();
    setState({
      skills: state.skills.concat(state.skill),
      skill: {
        text: "",
        id: uuidv4(),
      },
    });
  };

  const onDeleteSkill = (e, key) => {
    e.preventDefault();
    const newSkills = state.skills.filter((skillItem) => skillItem.id !== key);

    setState({ ...state, skills: [...newSkills] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: true });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: false });
  };

  const { skill, skills } = state;
  let form = (
    <div>
      <ul>
        {state.skills.map((skill) => {
          return (
            <li key={skill.id}>
              {skill.text}
              <button
                className="skill--delete"
                onClick={(e) => onDeleteSkill(e, skill.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={onSubmitSkill}>
        <label htmlFor="skillInput">Enter Skill: </label>
        <input
          onChange={handleChange}
          value={skill.text}
          type="text"
          id="skillInput"
        />
        &nbsp;
        <button type="submit">+ Add Skill</button>
      </form>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );

  let final = (
    <div>
      <ul>
        {state.skills.map((skill) => {
          return <li key={skill.id}>{skill.text}</li>;
        })}
      </ul>
      <button onClick={(e) => handleEdit(e)}>Edit</button>
    </div>
  );
  return (
    <div>
      <h2 className="section--title">Skills</h2>
      {!state.isSubmitted && form}
      {state.isSubmitted && final}
    </div>
  );
};
