import React, { useState } from "react";

export const ExperienceItem = props => {
  
  const [state, setState] = useState({
    company: props.company,
      title: props.title,
      tasks: props.tasks,
      from: props.from,
      to: props.to,
      isSubmitted: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const label = e.target.name;
    const value = e.target.value;
    setState({ ...state,
      [label]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: true });
  }

  const handleEdit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: false });
  }

  
    let form = (
      <form action="#">
        <p>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={state.company}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Description:
            <input
              type="text"
              name="tasks"
              value={state.tasks}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            From:
            <input
              type="text"
              name="from"
              value={state.from}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            To:
            <input
              type="text"
              name="to"
              value={state.to}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
          <button onClick={(e) => props.onDelete(e, props.id)}>
            Delete
          </button>
        </p>
      </form>
    );

    let final = (
      <div className="experience--item">
        <div>
          <p>
            {state.from} - {state.to}
          </p>
        </div>
        <div className="experience--info">
          <p>
            <span className="bold">{state.title}</span>
          </p>
          <p>{state.company}</p>
          <p>{state.tasks}</p>
        </div>
        <p>
          <button onClick={(e) => handleEdit(e)}>Edit</button>
        </p>
      </div>
    );
    return (
      <div>
        {!state.isSubmitted && form}
        {state.isSubmitted && final}
      </div>
    );
  
}
