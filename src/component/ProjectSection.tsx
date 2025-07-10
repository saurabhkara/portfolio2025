import React from "react";
import styles from "./projectSection.module.css";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: "1p",
    projectName: "Total Income & Expense AI agent",
    projectDesc:
      "Build an AI agent that will track all expenses and income. Click on repo link to know more",
    repoLink: "https://github.com/saurabhkara/First-AI-Agent",
    projectImg: "/Picture.png",
    technologies: ["JavaScript", "Typescript", "Llama", "AI", "Node.js"],
  },
  {
    id: "2p",
    projectName: "AI Chat Clone",
    projectDesc:
      "Build an AI Chat clone of ChatGpt using React Native expo to learn and understand the AI integration. Check repo for more details",
    repoLink: "https://github.com/saurabhkara/First-AI-Agent",
    projectImg: "/Picture.png",
    technologies: [
      "JavaScript",
      "Typescript",
      "React Native Expo",
      "Open AI",
      "Node.js",
      "express.js",
      "Expo router",
      "Expo API Routes",
    ],
  },
];

export default function ProjectSection() {
  return (
    <div className={styles.projectSection}>
      {projectData.map((item) => {
        return <ProjectCard item={item} key={item.id} />;
      })}
    </div>
  );
}
