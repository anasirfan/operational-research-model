import React from 'react';
import { Link } from 'react-router-dom';
import videoFile from '../assests/videos/animation.webm';
import './Button.css';

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoFile}
        autoPlay
        loop
        muted
      />
      <div className="text-center relative">
        <h1 className="text-5xl text-red-800 font-bold mb-8 animate-pulse">
          Welcome to the Queueing Model Simulator
        </h1>
        <h2 className="text-3xl text-blue-300 font-semibold mb-4">
          Presented by Anas Bin Irfan
        </h2>
        
        <p className="text-white glowing-text text-xl mb-8 w-2/3 mx-auto">
  Introducing the Queueing Model Simulator project! This interactive tool brings the power of MM1, GG1, MM2, and GG2 queueing models to your fingertips. Explore the dynamics of different queueing systems, analyze arrival rates, service times, and queue lengths. Gain insights into performance measures and optimize resource allocation. Whether you're studying operations research or analyzing real-world scenarios, our simulator offers a user-friendly interface for understanding and simulating queueing models effectively. Dive into the world of queueing theory with this educational and practical tool.
</p>

<div className="space-x-4 space-y-16">
  <div className="flex flex-wrap space-x-8 justify-center">
    <Link to="/mm1">
      <button className="glowing-btn">
        <span className="glowing-word">
          MM<span className="faulty-letter">1</span> Model
        </span>
      </button>
    </Link>
    <Link to="/mg1">
      <button className="glowing-btn">
        <span className="glowing-word">
          MG<span className="faulty-letter">1</span> Model
        </span>
      </button>
    </Link>
    <Link to="/gg1">
      <button className="glowing-btn">
        <span className="glowing-word">
          GG<span className="faulty-letter">1</span> Model
        </span>
      </button>
    </Link>
  </div>
  <div className="flex flex-wrap space-x-8  justify-center">
    <Link to="/mm2">
      <button className="glowing-btn">
        <span className="glowing-word">
          MM<span className="faulty-letter">2</span> Model
        </span>
      </button>
    </Link>
    <Link to="/mg2">
      <button className="glowing-btn">
        <span className="glowing-word">
          MG<span className="faulty-letter">2</span> Model
        </span>
      </button>
    </Link>
    <Link to="/gg2">
      <button className="glowing-btn">
        <span className="glowing-word">
          GG<span className="faulty-letter">2</span> Model
        </span>
      </button>
    </Link>
  </div>
</div>

      </div>
    </div>
  );
}

export default LandingPage;
