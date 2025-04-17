import React from 'react'
import ExperienceCard from './ExperienceCard'
import styles from "../app/page.module.css"

const experienceData=[
    {
        companyName:'Wovv Tech',
        desination:'React Native Developer',
        duration:'Mar 2023 - Till now',
        role:[
            'Responsible for bla bla bla',
            'Responsible for jaksjjjjjjj'
        ]
    },
    {
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
            return( <ExperienceCard  item={item}/>)
        })
       }
    </div>
  )
}
