import React from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
// import Raajsolar from '../assets/RAAJ-SOLAR.png';
// import Siddhguruimg from '../assets/SIDDHGURU.png';
// import Portfolioimg from '../assets/portfolio.png';
// import Roayltoucheimg from '../assets/royaltouche.png';
// import PvotIMg from '../assets/pvotimg.png';
// import Interiormaata from '../assets/Interiorimg.png';
// import Building from "../assets/image.png";
// import Building1 from "../assets/image2.png";
// import Building2 from "../assets/image3.png";
// import crown from "../assets/image4.png";
// import credai from "../assets/image5.png";

import Toys from '../assets/toys.png';
import Ashin from '../assets/ashin.png';
import Portfolio from '../assets/portfolio.png';
import Game from '../assets/game.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      image_url: Toys,
      project_name: 'My-Toys',
      tech_stack:["React","LocalStorage"],
      source_link: 'https://mytoysone.vercel.app/'
    },
    {
      id: 2,
      image_url: Game,
      project_name: 'MyExclusive',
      tech_stack: ['Html',"css","JS","Bootstrap"],
      source_link: 'https://sankaliyavivek.github.io/game/'
    },
     {
      id: 3,
      image_url: Portfolio,
      project_name: 'My Personal Portfolio',
      tech_stack: ['React'],
      source_link: 'https://sankaliyavivek.github.io/MyPortfolio/'
    },
      {
        id: 9,
        image_url: Ashin,
        project_name: 'Ashin Fashion',
        tech_stack: ['Html',"css","JS"],
        source_link: 'https://sankaliyavivek.github.io/Ashin/'
      },
      // {
      //   id: 10,
      //   image_url: "",
      //   project_name: 'Royal Crown',
      //   tech_stack: ['NextJs'],
      //   source_link: 'https://royalcrownfont.vercel.app/'
      // },
    // {
    //     id: 4,
    //     image_url: "",
    //     project_name: 'My Personal Portfolio',
    //     tech_stack: ['React'],
    //     source_link: 'https://jaykalariya.vercel.app/'
    //   },
      // {
      //   id: 5,
      //   image_url: "",
      //   project_name: 'PVOT Website',
      //   tech_stack: ['React'],
      //   source_link: 'https://humbee-developers.github.io/PVOT/'
      // },
      // {
      //   id: 6,
      //   image_url: "",
      //   project_name: 'InteriorMaata Website',
      //   tech_stack: ['NextJs'],
      //   source_link: 'https://interiormaata.com/'
      // },
      // {
      //   id: 7,
      //   image_url: "",
      //   project_name: 'The Building Company',
      //   tech_stack: ['HTML CSS JS'],
      //   source_link: 'https://thebuildingcompany.vercel.app/'
      // },
      //    {
      //   id: 8,
      //   image_url: "",
      //   project_name: 'Website Template',
      //   tech_stack: ['HTML CSS JS'],
      //   source_link: 'https://website-template-teal.vercel.app/'
      // },
      //  {
      //   id: 11,
      //   image_url: "",
      //   project_name: 'Credai Rera',
      //   tech_stack: ['HTML CSS JS'],
        
      //   source_link: 'https://reraarea.com/'
      // },
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        {/* Deployed 50+ scalable websites and cross-platform mobile applications.
        Collaborated in 100+ projects with 30+ clients all around the world. Looking for next project/role. */}
        Skilled in deploying scalable websites and currently engaged in multiple project collaborations. Actively seeking the next exciting project or role to contribute expertise and drive innovation.
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id} 
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;





// MyToy  website link
// https://mytoysone.vercel.app/


// Ashin project Html,css and js
// https://sankaliyavivek.github.io/Ashin/


// Game project Html,css and js 
// https://sankaliyavivek.github.io/game/


// MyPortfolio with React js 
// https://sankaliyavivek.github.io/MyPortfolio/