import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import homelandImg from "@/public/homeland.png";
import gymImg from "@/public/gym.png";
import hotelImg from "@/public/hotel.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated DCI",
    location: "Berlin, Germany",
    description:
      "I graduated after 14 months of studying. did many projects and final project.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Munich,Germany ",
    description:
      "I did attended to extra courses and got to learn typescript and Tailwindcss",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Homeland",
    location: "Berlin , Deutschland",
    description:
      "our final project was full-stack project used very advanced frame works like react native prisma and node js.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Homeland",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "React native", "Prisma"],
    imageUrl: homelandImg,
  },
  {
    title: "gym",
    description:
      "gym web app ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: gymImg,
  },
  {
    title: "MyHolidays",
    description:
      "A public web app for quick Hotel booking",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: hotelImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Postman",
  "Framer Motion",
] as const;
