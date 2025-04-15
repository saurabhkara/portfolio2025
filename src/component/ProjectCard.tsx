import React from 'react';
import styles from "./projectSection.module.css";
import TechTag from './TechTag';



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
            <p className={styles.prejectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>
            <TechTag  label='Javascript'/>

            
        </div>
    </div>
  )
}
