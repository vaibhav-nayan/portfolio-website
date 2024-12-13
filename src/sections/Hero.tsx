import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png"
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg"
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Typewriter from "typewriter-effect";
import Type from "@/components/Type";

const resumeLink = 'https://drive.google.com/file/d/1dsWCgPoUICGqdmXuXDS8cpidEGlUZdp_/view?usp=sharing'

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="hero">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div className="absolute inset-0 z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`
        }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14}
          shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79}
          shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41}
          shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178}
          shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}
          shouldOrbit orbitDuration="38s" shouldSpin spinDuration="10s">
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}
          shouldOrbit orbitDuration="40s" shouldSpin spinDuration="10s">
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5}
          shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144}
          shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85}
          shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>

        <HeroOrbit size={800} rotation={-72}
          shouldOrbit orbitDuration="48s" shouldSpin spinDuration="10s">
          <StarIcon className="size-20 text-emerald-300"/>
        </HeroOrbit>

      </div>
      <div className="container">
        <div className=" flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from begind laptop"/>
          <div className="bg-gray-950 border border-gray-800 active:scale-95 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 size-2.5 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Hola! I&#39;m Vaibhav
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            I&#39;m a
            <Type/>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in full-stack development, 
          problem-solving, and creating exceptional user experiences.
          </p>
          <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 active:scale-95 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold"><a href="#projects">Explore My Work</a></span>
              <ArrowDown className="size-4"/>
            </button>
            <button className="inline-flex items-center gap-2 active:scale-95 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 h-12 px-6 rounded-xl">
              <span className=" font-semibold "><a href={resumeLink} target="_blank">See My Resume</a></span>
              <span>📄</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) 
};
