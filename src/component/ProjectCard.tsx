import React from 'react';
import styles from "./projectSection.module.css";



export default function ProjectCard() {
  return (
    <div className={styles.projectCard}>
        <div className={styles.projectCardImage}>
             <img
                src="/Picture.png"
                alt="project image"
                className={styles.projectImage}
            />
        </div>
        <div className={styles.projectCardDescr}>
            <p className={styles.projectName}>Project Name</p>
        </div>
    </div>
  )
}
