// src/components/About.jsx
import React from 'react';
import './Section.css'; // Create a general CSS for sections

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
      Hello! I’m Pavlos Adamakis, a passionate AI and Robotics Engineer currently based in Copenhagen, Denmark.
      . My work revolves around developing smart, autonomous systems with a strong focus on Reinforcement Learning and robotics simulation environments. 
      I specialize in autonomous drone navigation, multi-agent systems, and integrating technologies like ROS2, Gazebo, and Machine Learning into intelligent robotic pipelines. 
      I enjoy working at the intersection of AI, control systems, and simulation to bring abstract models into real-world behavior.
       I spent most of my recent projects looking at ways to make drones and robots smarter—whether that's using deep RL to navigate through complex environments, simulating multi-robot systems, or developing agentic AI. 
       When I am not writing code, I like to document my story, building fun side projects, and keeping up with the newest trends in AI and robotics.
        {/* Add more about yourself, your journey, your interests */}
      </p>
      {/* You could add a profile picture here */}
      {<img src="/images/linkedinprofile.jpg" alt="Pavlos Adamakis" className="profile-pic" />
}
    </section>
  );
}

export default About;
