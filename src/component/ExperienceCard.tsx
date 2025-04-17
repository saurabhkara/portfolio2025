import React from 'react'
import styles from "./experience.module.css";

interface IProp{
  item:{
    companyName:string,
    desination:string,
    duration:string,
    role:string[]
  }
}
export default function ExperienceCard({item}:IProp) {
  return (
    <div className={styles.expericeCard}>
        <div className={styles.companyDetails}>
            <p className={styles.companyName}>{item.companyName}</p>
            <p className={styles.desination}>{item.desination}</p>
            <p className={styles.year}>{item.duration}</p>
        </div>
        <div className={styles.companyRolesContainer}>
            {
              item.role.map((roleItem)=>{
                return(
                  <li className={styles.rolePoints}>{roleItem}</li>
                )
              })
            }
        </div>
    </div>
  )
}
