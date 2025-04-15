import React from 'react';
import Styles from "../component/projectSection.module.css"


export default function TechTag({label}:{label:string}) {
  return (
    <div className={Styles.techTagContainer}>
      <p className={Styles.techLabel}>{label}</p>
    </div>
  )
}
