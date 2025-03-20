import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Explore Key Concepts</h1>
      <hr />
      <div className="course-topics">
        <div className="course-section">
          <h2 className="course-title">Physics & Mathematics</h2>
          <div className="topics">
            <Link to="/course/jee" className="topic-link">
              <strong>Kinematics</strong> - Understanding motion, velocity, and
              acceleration equations.
            </Link>
            <Link to="/course/jee" className="topic-link">
              <strong>Electrostatics</strong> - Study of electric charges,
              fields, and potentials.
            </Link>
            <Link to="/course/jee" className="topic-link">
              <strong>Integral Calculus</strong> - Solving area problems using
              integration techniques.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Biology & Chemistry</h2>
          <div className="topics">
            <Link to="/course/neet" className="topic-link">
              <strong>Genetics & Evolution</strong> - Mechanisms of heredity and
              evolutionary biology.
            </Link>
            <Link to="/course/neet" className="topic-link">
              <strong>Organic Chemistry</strong> - Understanding biomolecules
              and reaction mechanisms.
            </Link>
            <Link to="/course/neet" className="topic-link">
              <strong>Human Physiology</strong> - Detailed study of organ
              systems and their functions.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">Economics & Logical Reasoning</h2>
          <div className="topics">
            <Link to="/course/upsc" className="topic-link">
              <strong>Economic Survey</strong> - Analysis of economic trends and
              policies.
            </Link>
            <Link to="/course/cat" className="topic-link">
              <strong>Data Interpretation</strong> - Analyzing charts, tables,
              and logical patterns.
            </Link>
            <Link to="/course/cat" className="topic-link">
              <strong>Probability</strong> - Understanding chances and
              predictions in real-world applications.
            </Link>
          </div>
        </div>

        <div className="course-section">
          <h2 className="course-title">General Knowledge & Writing</h2>
          <div className="topics">
            <Link to="/course/upsc" className="topic-link">
              <strong>Indian Judiciary</strong> - Understanding the structure
              and functioning of courts.
            </Link>
            <Link to="/course/gre" className="topic-link">
              <strong>Critical Reasoning</strong> - Analyzing arguments and
              logical reasoning skills.
            </Link>
            <Link to="/course/gre" className="topic-link">
              <strong>Argument Writing</strong> - Developing strong,
              well-structured essays and opinions.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
