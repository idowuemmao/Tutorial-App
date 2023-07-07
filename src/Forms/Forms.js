import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    agree: false,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form className="grid gap-2 m-2" onSubmit={handleSubmit}>
      <input
        className="border border-black p-2"
        placeholder="First name"
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        className="border border-black p-2"
        placeholder="Last name"
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        className="border border-black p-2"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        className="border border-black p-2"
        placeholder="Enter Comment"
        onChange={handleChange}
        name="comment"
        value={formData.comment}
      />
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="agree"
          checked={formData.agree}
          onChange={handleChange}
          name="agree"
        />
        <label htmlFor="agree">Do you agree</label>
      </div>
      <label htmlFor="favColor">What is Your Favourite Color</label>
      <select
        id="favColor"
        onChange={handleChange}
        name="favColor"
        value={formData.favColor}
        className="border border-black"
      >
        <option value="">-----Choose-----</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
      </select>
      <fieldset className="border border-black p-2">
        <legend>Current Employment Status</legend>
        <input
          type="radio"
          id="unemployed"
          value="unemployed"
          onChange={handleChange}
          name="employment"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label> <br />
        <input
          type="radio"
          id="part-time"
          value="part-time"
          onChange={handleChange}
          name="employment"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-Time</label> <br />
        <input
          type="radio"
          id="full-time"
          value="full-time"
          onChange={handleChange}
          name="employment"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-Time</label> <br />
        <br />
      </fieldset>
      <button className="border border-black ">Submit</button>
    </form>
  );
}
