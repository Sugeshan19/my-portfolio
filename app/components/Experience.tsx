import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    description: "Successfully completed a two-month industrial internship focused on Full Stack Web Development.\n\nGained hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js).\n\nWorked on designing, developing, and deploying responsive and scalable web applications.\n\nEnhanced skills in API integration, database management, and frontend optimization.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "React Developer Intern",
    description: "Collaborated on multiple client projects, developing responsive and dynamic user interfaces using React.js, JavaScript, HTML, and CSS.\n\nAssisted in integrating REST APIs and managing application state using React Hooks and Context API.\n\nWorked closely with senior developers to ensure cross-browser compatibility and optimize front-end performance.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    description: "Built and styled responsive web pages using HTML, CSS, and JavaScript.\n\nGained hands-on experience in front-end development workflows and design principles.\n\nCollaborated with mentors to improve coding practices and optimize web performance.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "1st Place — Data Analytics Hackathon (NIT Trichy)",
    description: "I secured 1st place in the Data Analytics Hackathon conducted at NIT Trichy (RU Skilled, Sept 2025), demonstrating strong problem-solving and technical execution under competitive conditions. Beyond this win, I have actively participated in multiple hackathons and technical events across my college and other institutions, including the IBM Z Datathon, continuously building real-world experience in full-stack development, data analytics, and collaborative project delivery.",
    icon: "/cards/image4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4 whitespace-pre-line">
                 {card.description}
              </p>
              <Link
                href="https://sugeshanportfolio.vercel.app/skills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

