import { TimelineItem, Project } from "@/types/index";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiDocker, SiShadcnui, SiExpress,  SiGit, SiMysql, SiPython,SiJavascript} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import {
  GraduationCap,
  FolderOpen,
  Trophy,
  Code2,
  Mail,
} from "lucide-react";


export const navItems = [
  { name: "Education", icon: GraduationCap, active: true, id: "experience" },
  { name: "Projects", icon: FolderOpen, id: "projects" },
  { name: "Experience", icon: Trophy, id: "experience" },
  { name: "Skills", icon: Code2, id: "experience" },
  { name: "Contact", icon: Mail, id: "experience" },
];

export const timelineData: TimelineItem[] = [
  {
    date: "2020 - 2024",
    title: "Bachelor of Engineering",
    company: "Computer Engineering",
    description:
      "Promoted to a part-time Full Stack Developer role. Build scalable apps with React.js, Next.js, and Node.js; design PostgreSQL incremental ETL pipelines for a football platform; and contribute to AI-driven hiring evaluation systems within Agile workflows.",
  },
  {
    date: "2024",
    title: "Started Web Development",
    company: "Self Learning",
    description:
      "Learned HTML, CSS, JavaScript and built my first responsive websites.",
  },
  {
    date: "2025",
    title: "Frontend Development",
    company: "React & Next.js",
    description:
      "Built modern web applications using React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    date: "2025 - Present",
    title: "Full Stack Development",
    company: "Personal Projects",
    description:
      "Developing full-stack applications using Node.js, MongoDB and modern frontend technologies.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "DevHub",
    type: "Networking",
    technologies: [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiNodedotjs, color: "#339933" },
      { Icon: SiMongodb, color: "#47A248" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
      { Icon: SiDocker, color: "#4479A1" }
    ],
    description:
      "A developer-focused networking platform that enables professionals to connect, collaborate, engage in discussions, and grow within the tech ecosystem.",
      image:FaNetworkWired,
      githubLink:"https://github.com/prajakta989/devHub_dockerized_app",
      link:""
  },
  {
    id: 2,
    title: "Monitr",
    type: "Monitoring",
    technologies: [
      { Icon: SiNextdotjs, color: "#FFFFFF" },
      { Icon: SiTypescript, color: "#3178C6" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
      { Icon: SiShadcnui, color: "#FFFFFF" }
    ],
    description:
      "Real-time device monitoring dashboard for tracking system health, performance metrics, and operational status from a centralized interface.",
    image: FaChartSimple,
    githubLink:"https://github.com/prajakta989/device_monitoring_dashboard",
    link:"https://device-monitoring-dashboard-sage.vercel.app/login"
  },
  {
    id: 3,
    title: "DevHub",
    type: "Monitoring",
    technologies: [
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiNodedotjs, color: "#339933" },
      { Icon: SiMongodb, color: "#47A248" },
      { Icon: SiTailwindcss, color: "#06B6D4" },
    ],
    description:"Live football analytics platform combining the SportsMonk API with GROQ LLM for real-time match predictions — processing live data to surface insights for fans and analysts.",
    image: FaChartSimple,
    githubLink:"https://github.com/prajakta989/device_monitoring_dashboard",
    link:"https://device-monitoring-dashboard-sage.vercel.app/login"
  },
];

export const icons = [
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiExpress, color: "#FFFFFF" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiDocker, color: "#4479A1" },
  { Icon: SiMysql, color: "#61DAFB" },
  { Icon: SiPython, color: "#3776AB" },
];