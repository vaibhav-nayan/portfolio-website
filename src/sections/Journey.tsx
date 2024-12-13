import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import ism from '@/assets/images/ism.png'
import chinmaya from '@/assets/images/chinmaya.png'
import dav from '@/assets/images/dav.png'
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { CardTape } from "@/components/CardTape";


const educations = [
  {
    name: "Bachelor of Technology in Electrical Engineering",
    position: "Indian Institute of Technology (ISM) Dhanbad   2021-2025",
    text: "In college, I started with a passion for designing, enjoying the creative process of bringing ideas to life. Over time, my interest shifted towards development as I explored coding and building practical solutions. I also completed engaging coursework like Data Structures and Algorithms, Graph Algorithms, and Probability and Statistics, which deepened my understanding and strengthened my passion for software development.",
    avatar: ism,
  },
  {
    name: "Secondary School Certificate (SSC)",
    position: "DAV Public School, Barora | 2018-2019 | 90.1%",
    text: "I spent 10 wonderful years at this school, where I studied subjects like Mathematics, English, Hindi, and Sanskrit. Alongside academics, I actively participated in extracurricular activities such as chess and football and even won inter-DAV competitions, making my childhood here truly memorable.",
    avatar: dav,
  },
  {
    name: "Intermediate Education",
    position: "Chinmaya Vidyalaya, Bokaro | 2020-2021 | 91%",
    text: "After 10th grade, I faced a tough academic transition but quickly adapted. Alongside my studies, I played football and discovered coding through Python and MySQL. Although it was challenging at first, I worked hard and excelled within two years, making coding my core passion.",
    avatar: chinmaya,
  },
];

const experiences = [
  {
    name: "Freelance Developer",
    position: "Self-Employed, 2023 - Present",
    text: "Collaborated with clients globally to create scalable web and mobile applications. My work has ranged from designing intuitive user interfaces to implementing robust backends for diverse industries.",
    avatar: memojiAvatar1,
  },
  {
    name: "Full Stack Developer Intern",
    position: "Apiero-Medica, May 2024 - Jul 2024",
    text: "Collaborated across the Software Development Lifecycle, implementing secure OAuth logins and optimizing REST APIs with Node.js and Express.js. Enhanced application performance by 15% through efficient MongoDB queries and improved stakeholder communication with regular updates.",
    avatar: memojiAvatar2,
  },
];

export const JourneySection = () => {
  return (
    <div className="py-16 lg:py-24" id="journey">
      <div className="container">
        <SectionHeader 
          eyebrow="My Journey" 
          title="From Learner to Developer" 
          desc="A Path of Growth and Innovation"
        />
        <CardTape
          list={educations}
          title="Education"
          className="animate-move-left"
        />
        <CardTape
          list={experiences}
          title="Experiences"
          className="animate-move-right"
        />
      </div>
    </div>
  )
};
