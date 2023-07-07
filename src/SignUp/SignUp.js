import React from "react";

export default function SignUp() {
  const [signUpData, setSignUpData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: "",
  });
  //   console.log(signUpData);
  function handleSignUp(event) {
    const { name, value, type, checked } = event.target;
    setSignUpData((prevSignUpData) => {
      return {
        ...prevSignUpData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (signUpData.password === signUpData.confirmPassword) {
      console.log("Successfully Signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
  }
  return (
    <form
      className="border border-black p-2 grid gap-2 "
      onSubmit={handleSubmit}
    >
      <input
        className="border border-black p-2"
        type="email"
        placeholder="Enter Email"
        value={signUpData.email}
        name="email"
        onChange={handleSignUp}
      />
      <input
        className="border border-black p-2"
        type="password"
        placeholder="Enter Password"
        value={signUpData.password}
        name="password"
        onChange={handleSignUp}
      />
      <input
        className="border border-black p-2"
        type="text"
        placeholder="Confirm Password"
        value={signUpData.confirmPassword}
        name="confirmPassword"
        onChange={handleSignUp}
      />
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="joinNewsletter"
          checked={signUpData.newsletter}
          name="newsletter"
          onChange={handleSignUp}
        />
        <label htmlFor="joinNewsletter">I want to join the newsletter</label>
      </div>
      <button className="bg-purple-900 p-2 text-white">Sign up</button>
    </form>
  );
}
