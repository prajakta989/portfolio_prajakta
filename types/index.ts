import { IconType } from "react-icons";

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

type Technology = {
  Icon: IconType;
  color: string;
};

export interface Project{
  id: number;
  title: string;
  type: string;
  technologies: Technology[];
  description: string;
  image: IconType;
  githubLink:string,
  link: string;
}