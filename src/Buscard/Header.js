import profilepic from "../Images/gabriel.jpg";
import "./Buscard.css";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";

export default function Header() {
  return (
    <div className="header">
      <img src={profilepic} className="profilepic" alt="ProfilePic" />
      <h2 className="name">Laura Smith</h2>
      <p className="title">Frontend Developer</p>
      <small>New York, USA</small>
      <div className="buttons">
        <button className="contact email">
          <img src={email} alt="linkedin" className="logo3" />
          Email
        </button>
        <button className="contact linkedin">
          <img src={linkedin} alt="linkedin" className="logo3" /> LinkedIn
        </button>
      </div>
    </div>
  );
}
