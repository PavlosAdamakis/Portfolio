import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'; // We'll create this in a sec

function Home() {
  return (
    <div className="home-container fade-in">
      <h1>👋 Welcome to My Website</h1>
      <p>
        <Typewriter
          words={[
            "Hi, I'm Pavlos — Master's graduate in Autonomous Systems.",
            "Specialized in Robotics, AI, and Machine Learning.",
            "Passionate about building intelligent autonomous tech.",
            "Welcome to my digital space, Enjoy!"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={45}
          delaySpeed={2000}
        />
      </p>

      <Link to="/projects" className="button-link">View My Projects</Link>
    </div>
  );
}

export default Home;
