import React from 'react'
import styles from "../app/page.module.css"

export default function SocialIconComponent() {
  return (
    <div className={styles.introLocation}>
        <img src="./github.png"  className={styles.socialIcon}/>
        <img src="./x.png"  className={styles.socialIcon}/>
        <img src="./linkedin.png" className={styles.socialIcon}/>
    </div> 
  )
}
