'use client'
import styles from "./page.module.css";
import Link from 'next/link';
import { useState,useRef } from "react";

export default function Home() {

  const [hamburgeClicked,setHamburgerClicked] = useState(false);
  const workSectionRef = useRef<HTMLDivElement>(null)
  const skillSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const handleHamgerClicked=()=>{
    setHamburgerClicked((preState)=>!preState)
  }

  const scrollToSection = (currentRef:any) => {
    handleHamgerClicked()
    currentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <h4 className={styles.logo}> {'<'} SK {'/>'}</h4>
        </div>
        <div className={styles.navbarTabs}>
          <p className={styles.tabs} onClick={()=>scrollToSection(aboutSectionRef)} >About</p>
          <p className={styles.tabs} onClick={()=>scrollToSection(skillSectionRef)}>Skills</p>
          <p className={styles.tabs} onClick={()=>scrollToSection(workSectionRef)}>Work</p>
          <p className={styles.tabs} onClick={()=>scrollToSection(contactSectionRef)}>Contact</p>
          <div>
            <p className={styles.tabs}>Request for CV</p>
          </div>
        </div>
        <div className={styles.hamburgerIcon} onClick={handleHamgerClicked}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>

          <ul className={`${styles.mobileMenu} ${hamburgeClicked && styles.open}`}>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={()=>scrollToSection(aboutSectionRef)}>About</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={()=>scrollToSection(skillSectionRef)}>Skill</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={()=>scrollToSection(workSectionRef)}>Work</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={()=>scrollToSection(contactSectionRef)}>Contact</p></li>
            <li className={styles.mobileMenuTab}> <p className={styles.tabs}>Request for CV</p></li>
          </ul>
        </div>
      </nav>
      <main className={`${styles.main} ${hamburgeClicked && styles.addMargin}`}>
        <section className={styles.intoSection}>
          <div  className={styles.intoDetails}>
            <p className={styles.introName}>Hi, I'm Saurabh 👋</p>
            <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
          </div>
          <div className={styles.introPhoto}>
            Photo hsh
          </div>
        </section>
       <section   className={styles.aboutSection} ref={aboutSectionRef}>
        <div className={styles.aboutNameSection}>
          <p>Photo</p>
        </div>
        <div className={styles.profilePicSection}>
          <p>About me details</p>
        </div>
       </section>
       <section className={styles.skillSection} ref={skillSectionRef}>
        <p>Skills</p>
       </section>
       <section className={styles.expreienceSection}>
        <p>Experience</p>
       </section>
       <div className={styles.workSection} ref={workSectionRef}>
        <p>Work</p>
       </div>
      </main>
      <footer className={styles.footer} ref={contactSectionRef}>
        <p>Footer</p>
        <Link
          href={{
            pathname: '/about',
          }}
        >
          About
        </Link>
      </footer>
    </div>
  );
}
