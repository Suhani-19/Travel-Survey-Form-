import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Home() {
  return (
    <div className="page-container">
      <div className="content-box">
      <h1>Hi there! Welcome to the Chamber of Travel Experiences </h1>
      <p> Thank you for taking the time to share your travel experiences. This form is part of a research initiative to better understand travel behavior, preferences, and challenges faced by travelers across India and abroad.</p>
      <p>
        Every day, millions of people travel in communities across the Nation.Help us understand how you travel.This important survey helps to build a snapshot of how, when, and why people travel in their daily lives, whether you travel by car, public transit, bicycle or on foot or do not travel at all.

        Collecting information from the public can help understand how people travel and identify ways to provide better access to jobs and housing, reduce traffic congestion and make travel easier. It also can help understand how to minimize environmental impacts leading to improved air quality for a healthier lifestyle. 
        </p>
        <p>
        This is a student project aiming to understand travel behavior better.
        "Your data will not be shared publicly. It is only used for research and analysis."
      </p>

      <Link to="/form">Start the Survey.</Link>
    </div>
</div>
  );
}

export default Home;
