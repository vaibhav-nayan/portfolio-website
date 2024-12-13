"use client"
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png"
import SmileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion'
import { useRef } from "react";
import CppIcon from '@/assets/icons/cpp.svg'
import PythonIcon from '@/assets/icons/python.svg'
import TypeScriptIcon from '@/assets/icons/typescript.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import SqlIcon from '@/assets/icons/sql.svg'
import NextJsIcon from '@/assets/icons/nextjs.svg'
import AngularIcon from '@/assets/icons/angular.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import NodeIcon from '@/assets/icons/nodejs.svg'
import ExpressIcon from '@/assets/icons/express.svg'
import PrismaIcon from '@/assets/icons/prisma.svg'
import PostgresIcon from '@/assets/icons/postgresql.svg'
import MongoDbIcon from '@/assets/icons/mongodb.svg'
import GitIcon from '@/assets/icons/git.svg'
import DockerIcon from '@/assets/icons/docker.svg'
import KubernetesIcon from '@/assets/icons/kubernates.svg'
import PrometheusIcon from '@/assets/icons/prometheus.svg'
import GrafanaIcon from '@/assets/icons/grafana.svg'
import NpmIcon from '@/assets/icons/npm.svg'
import PostmanIcon from '@/assets/icons/postman.svg'
import LinuxIcon from '@/assets/icons/linux.svg'
import AwsIcon from '@/assets/icons/aws.svg'

const toolboxItems = [
  { title: 'C++', iconType: CppIcon },
  { title: 'Python', iconType: PythonIcon },
  { title: 'JavaScript (ES6+)', iconType: JavaScriptIcon },
  { title: 'TypeScript', iconType: TypeScriptIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'SQL', iconType: SqlIcon },
  { title: 'React.js', iconType: ReactIcon },
  { title: 'Next.js', iconType: NextJsIcon },
  { title: 'Angular', iconType: AngularIcon },
  { title: 'Tailwind CSS', iconType: TailwindIcon },
  { title: 'Node.js', iconType: NodeIcon },
  { title: 'Express.js', iconType: ExpressIcon },
  { title: 'Prisma ORM', iconType: PrismaIcon },
  { title: 'PostgreSQL', iconType: PostgresIcon },
  { title: 'MongoDB', iconType: MongoDbIcon },
  { title: 'Git', iconType: GitIcon },
  { title: 'GitHub', iconType: GithubIcon },
  { title: 'Docker', iconType: DockerIcon },
  { title: 'Kubernetes', iconType: KubernetesIcon },
  { title: 'AWS', iconType: AwsIcon },
  { title: 'Prometheus', iconType: PrometheusIcon },
  { title: 'Grafana', iconType: GrafanaIcon },
  { title: 'Postman', iconType: PostmanIcon },
  { title: 'npm', iconType: NpmIcon },
  { title: 'Linux (Ubuntu)', iconType: LinuxIcon },
];

const hobbies = [
  {
    title: "Painting",
    emoji: '🎨',
    left: '5%',
    top: '5%'
  },
  {
    title: "Photography",
    emoji: '📸',
    left: '50%',
    top: '5%'
  },
  {
    title: "Gaming",
    emoji: '🎮',
    left: '10%',
    top: '35%'
  },
  {
    title: "Music",
    emoji: '🎵',
    left: '35%',
    top: '40%'
  },
  {
    title: "Reading",
    emoji: '📗',
    left: '70%',
    top: '45%'
  },
  {
    title: "Football",
    emoji: '⚽',
    left: '5%',
    top: '65%'
  },
  {
    title: "Travel",
    emoji: '🥾',
    left: '45%',
    top: '70%'
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container" >
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          desc="Learn more about who I am, What I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 md:gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="My Reads"
                desc="Explore the books shaping my perspectives."
              />
              <div className="w-48 hover:transition hover:duration-300 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox"
                desc="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="mt-2"
              itemsWrapperClassName="animate-move-left [animation-duration:120s]"/>
              <ToolboxItems items={toolboxItems} 
              className="mt-4" 
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:80s]"/>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Beyond the Code"
                desc="Explore my interest and hobbies beyond the digital world."
                className="px-6 py-6"
              /> 
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby=>(
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r 
                  from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}>
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/v6452d1EdQbuDkrn9">
                <Image src={MapImage} alt="Map"
                  className="h-full w-full object-cover object-left-top"/>
              </a>
              <div className="absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
                after:content-[''] after:absolute after:inset-0
                after:outline after:outline-2
                after:-outline-offset-2 after:rounded-full
                after:outline-gray-950/30 pointer-events-none">
                  <div className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-emerald-300 to-sky-400 -z-20
                  animate-ping [animation-duration:2s]">
                  </div>
                  <div className="absolute inset-0 rounded-full 
                  bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/v6452d1EdQbuDkrn9">
                    <Image src={SmileMemoji} alt="smiling memoji"
                    className="size-20"/>
                  </a>
                
              </div>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  )
};


{/* 
             */}