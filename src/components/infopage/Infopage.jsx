import React from "react";
import "./Infopage.css";

const Infopage = () => {
  return (
    <div className="infopage-container">
      <h1>PrioritEase</h1>

      <h2>Smooth Task Management, Easier Than Ever</h2>
      <p>
        Keeping track of your tasks should be simple, not overwhelming.
        <strong>PrioritEase</strong> is the smart to-do list that helps you
        plan, prioritize, and complete your tasks with ease. Whether it's work,
        studies, or everyday chores, PrioritEase gives you a clear overview and
        a structured path toward your goals.
      </p>

      <ul className="infopage-list">
        <li>
          <strong>✅ Simple and intuitive design</strong> – Add, organize, and
          check off tasks with just a few taps.
        </li>
        <li>
          <strong>✅ Smart prioritization</strong> – Highlight important tasks
          and get a clear view of what needs to be done first.
        </li>
        <li>
          <strong>✅ Flexible lists</strong> – Create personal lists for work,
          home, or bigger projects.
        </li>
      </ul>

      <p>
        <strong>
          With PrioritEase, productivity becomes a natural part of your everyday
          life – without stress.
        </strong>
        Plan smarter, work more efficiently, and enjoy the satisfaction of
        getting things done.
      </p>
    </div>
  );
};

export default Infopage;
