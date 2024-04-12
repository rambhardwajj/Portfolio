import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full max-w-screen-xl px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
          <ProjectCard
            src="/Video_Streaming_App.png"
            title="Video Streaming App"
            description="Tech stack- ReactJs , NodeJs, ExpressJs, Material UI , JsonWebTokens, JavaScript, RapidApi
			Frontend -  Using React.js and Material UI for responsive and intuitive user Interface.
		  	Backend -  Using Node.js and Express.js to handle YouTube API interaction and database management..
		  	Functionality - A FullStack Application for Streaming Videos using the API of Youtube, with the user having the facility to Signup, SignIn, log out, and explore/search videos and stream videos on the App directly."
			//   link=" https://chat-application-brown-five.vercel.app/"
          />
          <ProjectCard
            src="/RealTimeChatApp.png"
            title="Real Time Chat Application"
            description="Tech stack  - Next.js, TypeScript,, Pusher, Redis, Google OAuth, NextAuth, zod, jwt, websockets
			  Frontend -  Using NextJs and Tailwind CSS for responsive and intuitive user Interface.
			  Backend -  Using Node.js and Express.js to handle database interaction
			  Database - Using Redis for fast cashing and storing and managing user data, information and chat.
			  Authentication - Using NextAuth and Google OAuth credentials, session and JWT.
			  Functionality including - Users can login using Google Authentication; send friend requests to another user; accept requests, and chat in real time."
			//   link=" https://chat-application-brown-five.vercel.app/"
          />
          <ProjectCard
            src="/DelhiMetro.png"
            title="CLI Based Delhi Metro App "
            description="Using Graph Data Structure concepts with PriorityQueues, Maps along with Shortest Path Algorithms.
			  A Metro Assistant is a Command Line tool that helps users to - Find Shortest distance, time between 2 Stations. Functionality also allows you to see the path of the shortest distance."
			//   link=" https://chat-application-brown-five.vercel.app/"
		  />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Portfolio"
            description="My Portfolio."
			// link=" https://chat-application-brown-five.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
