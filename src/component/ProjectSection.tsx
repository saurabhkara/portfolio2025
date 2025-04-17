import React from 'react';
import styles from "./projectSection.module.css";
import ProjectCard from './ProjectCard';

const projectData=[
  {
    id:'1p',
    projectName:'Project Name',
    projectDesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    repoLink:'https://github.com/saurabhkara',
    projectImg:'/Picture.png',
    technologies:[
      'JavaScript','Typescript','Kotlin','Android','Swift UI','IOS','Java','Node.js'
    ]
  },
]

export default function ProjectSection() {
  return (
    <div className={styles.projectSection}>
       {
        projectData.map((item)=>{
         return(<ProjectCard item={item} key={item.id}/>)
        })
       }
    </div>
  )
}
