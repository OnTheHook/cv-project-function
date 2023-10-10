import React, { useState } from "react";

export const Profile = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    description: "",
    isSubmitted: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const label = e.target.name;
    const value = e.target.value;
    setState({ ...state, [label]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: true });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setState({ ...state, isSubmitted: false });
  };

  let form = (
    <div>
      <h2 className="section--title">Profile</h2>
      <form action="#">
        <p>
          <label>
            First Name:
            <input
              type="text"
              value={state.firstName}
              onChange={(e) => handleChange(e)}
              name="firstName"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Last Name:
            <input
              type="text"
              value={state.lastName}
              onChange={(e) => handleChange(e)}
              name="lastName"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Address:
            <input
              type="text"
              value={state.address}
              onChange={(e) => handleChange(e)}
              name="address"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email:
            <input
              type="email"
              value={state.email}
              onChange={(e) => handleChange(e)}
              name="email"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Phone:
            <input
              type="tel"
              value={state.phone}
              onChange={(e) => handleChange(e)}
              name="phone"
              required
            />
          </label>
        </p>
        <p>
          Description:
          <textarea
            name="description"
            cols="100"
            rows="20"
            onChange={(e) => handleChange(e)}
            value={state.description}
            required
          ></textarea>
        </p>
        <button className="profile--submit" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );

  let final = (
    <div>
      <h2 className="name">
        {state.firstName} {state.lastName}
      </h2>
      <div className="info">
        {state.phone} <span>&#183;</span> {state.email} <span>&#183;</span>{" "}
        {state.address}
      </div>

      <div className="summary">
        <h2 className="section--title">SUMMARY</h2>
        <p>{state.description}</p>
      </div>

      <button onClick={(e) => handleEdit(e)}>Edit</button>
    </div>
  );

  return (
    <div>
      {!state.isSubmitted && form}
      {state.isSubmitted && final}
    </div>
  );
};
