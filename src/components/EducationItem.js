import React, { useState } from "react";

export const EducationItem = (props) => {

  const [state, setState] = useState({
    school: props.school,
    diploma: props.diploma,
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({...state, isSubmitted: true });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setState({...state, isSubmitted: false });
  };

  let form = (
    <div>
      <form action="#">
        <p>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={state.school}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Diploma:
            <input
              type="text"
              name="diploma"
              value={state.diploma}
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
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        <button onClick={(e) => props.onDelete(e, props.id)}>Delete</button>
      </form>
    </div>
  );

  let final = (
    <div className="education--item">
      <div>
        <p>
          {state.from} - {state.to}
        </p>
      </div>
      <div className="school--info">
        <p>
          <span className="bold">{state.diploma}</span>
        </p>
        <p>{state.school}</p>
      </div>
      <p className="edit">
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
};
