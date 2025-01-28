import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, image, linkedin, github }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-teal-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-gray-800 hover:bg-gray-50 rounded-full transition-colors"
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      image: "/Frame 75.svg",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      image: "/Frame 75.svg",
      linkedin: "https://linkedin.com/in/janesmith",
      github: "https://github.com/janesmith"
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      image: "/Frame 75.svg",
      linkedin: "https://linkedin.com/in/mikejohnson",
      github: "https://github.com/mikejohnson"
    },
    {
      name: "Sarah Williams",
      role: "Full Stack Developer",
      image: "/Frame 75.svg",
      linkedin: "https://linkedin.com/in/sarahwilliams",
      github: "https://github.com/sarahwilliams"
    }
  ];

  return (
    <div className="bg-teal-800/10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Our Team</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Meet our talented team of developers and designers who work together to bring you the best news experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;