import React from 'react'
import ExperienceCard from './ExperienceCard'
import styles from "../app/page.module.css"

const experienceData=[
    {   
        id:'1e',
        companyName:'Wovv Tech',
        desination:'React Native Developer',
        duration:'Mar 2023 - Till now',
        role:[
            'Responsible for bla bla bla',
            'Responsible for jaksjjjjjjj'
        ]
    },
    {
        id:'2e',
        companyName:'Wovv Tech',
        desination:'React Native Developer',
        duration:'Mar 2023 - Till now',
        role:[
            'Responsible for bla bla bla',
            'Responsible for jaksjjjjjjj'
        ]
    }
]

export default function ExperienceSection() {
  return (
    <div className={styles.expreienceSectionComponent}>
       {
        experienceData.map((item)=>{
            return( <ExperienceCard  item={item} key={item.id}/>)
        })
       }
    </div>
  )
}
