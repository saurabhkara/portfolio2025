import React from 'react';
import styles from "./projectSection.module.css";
import ProjectCard from './ProjectCard';

export default function ProjectSection() {
  return (
    <div className={styles.projectSection}>
       <ProjectCard />
    </div>
  )
}
