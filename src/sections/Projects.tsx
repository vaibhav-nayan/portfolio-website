
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import hosaana from '@/assets/images/hosaana.png'
import gmail from '@/assets/images/gmail.png'
import sorting from '@/assets/images/sorting.png'
import portfolio from '@/assets/images/portfolio.png'
import { toastHandler } from "@/features/toastHandler";

const portfolioProjects = [
  {
    company: "Hosaana",
    year: "2024",
    title: "Hotel Booking Website",
    results: [
      { title: "Built a website for easy hotel booking with price, amenity, and location comparisons." },
      { title: "Designed an admin panel to manage hotel and room listings." },
      { title: "Tech stack: MongoDB, Express JS, Node JS, React JS" },
    ],
    gitlink : "https://github.com/vaibhav-nayan/Hosaana",
    link: "#projects",
    image: hosaana,
  },
  {
    company: "Google",
    year: "2021",
    title: "Gmail Clone",
    results: [
      { title: "Built a Gmail clone with inbox, email composition, and threading features using React.js." },
      { title: "Focused on clean design and seamless functionality for an intuitive user experience." },
      { title: "Tech stack: React JS" },
    ],
    gitlink : "https://github.com/vaibhav-nayan/Gmail_Clone",
    link: "#projects",
    image: gmail,
  },
  {
    company: "Learning",
    year: "2023",
    title: "Sorting Visualizer",
    results: [
      { title: "Created an interactive tool to visualize sorting algorithms like Bubble Sort, Quick Sort, and Merge Sort." },
      { title: "Added adjustable speed and input sizes, enhancing user engagement and comprehension." },
      { title: "Tech Stack: HTML, CSS, JavaScript" },
    ],
    gitlink : "https://github.com/vaibhav-nayan/sorting-visualizer",
    link: "#projects",
    image: sorting,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Portfolio Website",
    results: [
      { title: "Executed complex animations to create a visually engaging and interactive portfolio website." },
      { title: "Enhanced user experience with intuitive design and seamless navigation." },
      { title: "Tech Stack: Next JS, React JS, Tailwind CSS, Framer Motion, CSS" },
    ],
    gitlink : "https://github.com/vaibhav-nayan/portfolio-website/",
    link: "https://portfolio-website-vaibhav-nayans-projects-86b8397c.vercel.app/",
    image: portfolio,
  },
];

export const ProjectsSection = () => {
  

  return <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
      <SectionHeader
        eyebrow="My Projects"
        title="Turning Ideas Into Reality"
        desc="Impactful projects blending creativity and problem-solving."
      />
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects.map((project, projectIndex) =>(
          <Card
            key={project.title}
            className="px-8 pb-0 pt-8 after:pointer-events-none md:pt-12 md:px-10
            lg:pt-16 lg:px-20 sticky top-16"
            style = {{
              top: `calc(64px + ${projectIndex * 40}px`
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to bg-sky-400 inline-flex
                  font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result =>(
                    <li key={result.title} className="flex gap-2 text-sm text-white/50 md:text-base">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex mt-8 gap-4">
                  <a href={project.gitlink}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl 
                    font-semibold inline-flex items-center justify-center gap-2 px-6">
                      <span>Github</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                  <a href={project.link}>
                    <button onClick={toastHandler} className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 w-full md:w-auto rounded-xl 
                    font-semibold inline-flex items-center justify-center gap-2 px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4"/>
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} 
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/vaibhav-nayan/">
        <div className="flex text-lg font-semibold text-white/70 justify-center w-full mt-6 md:mt-8 lg:mt-12">
          <p className="border-b border-white/50">See more Projects</p>
          <ArrowUpRightIcon className="size-4"/>
        </div>
      </a>
    </div>
  </section>;
};
