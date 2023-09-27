import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="Avatar"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=445&q=80"
      />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <p>
        Should contain one Skill component for each web dev skill that you have,
        customized with props{" "}
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill content="HTML + CSS" icon="👍" backgroundColor="#2662e8" />
      <Skill content="Javascript" icon="✌🏻" backgroundColor="#eed916" />
      <Skill content="Web design" icon="😍" backgroundColor="#c1dcad" />
      <Skill content="Git and GitHub" icon="😎" backgroundColor="#e84e32" />
      <Skill content="React" icon="😋" backgroundColor="#5fd9f8" />
      <Skill content="Svelte" icon="🤓" backgroundColor="#fd3a01" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <p>{props.content}</p>
      <p>{props.icon}</p>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
