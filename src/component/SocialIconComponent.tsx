import React from 'react'
import styles from "../app/page.module.css"

const githubLink= 'https://github.com/saurabhkara'
const linkedinLink =  "https://www.linkedin.com/in/saurabh1k"
const xLink= "https://x.com/i____saurabh"

export default function SocialIconComponent() {

  const navigateTo=(link:string)=>{
    window.open(link)
  }
  return (
    <div className={styles.introLocation}>
        <a onClick={()=>navigateTo(githubLink)}><img src="./github.png"  className={styles.socialIcon}/></a>
        <a onClick={()=>navigateTo(xLink)}><img src="./x.png"  className={styles.socialIcon}/></a>
       <a onClick={()=>navigateTo(linkedinLink)}> <img src="./linkedin.png" className={styles.socialIcon}/></a>
    </div> 
  )
}
