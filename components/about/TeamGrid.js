import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const TeamMember = ({ image, name, position, socials }) => {
  return (
    <div className="relative group overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-customGray/70 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="flex space-x-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {socials.facebook && (
                <a href={socials.facebook} className="text-white hover:text-blue-400 transition-colors">
                  <Facebook size={24} />
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} className="text-white hover:text-blue-400 transition-colors">
                  <Twitter size={24} />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} className="text-white hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              )}
            </div>
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
              <p className="text-white/80">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = () => {
  const teamMembers = [
    {
      image: "/images/team/Yinghui.jpg",
      name: "Yinghui (Amy) Wang",
      position: "Licensed Immigration Adviser",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      image: "/images/team/Manj.jpg",
      name: "Manj Nagra",
      position: "Licensed Immigration Adviser",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      image: "/images/team/Yin.jpg",
      name: "Yin Hom (Angela) Li",
      position: "Administrative Manager/ Licensed Immigration Adviser",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="bg-[url('/images/map.png')] bg-cover bg-center bg-no-repeat relative py-16">
      {/* Content */}
      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-customRed mx-auto mt-4"></div>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                position={member.position}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;