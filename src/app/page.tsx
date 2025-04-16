'use client'
import styles from "./page.module.css";
import Link from 'next/link';
import { useState, useRef } from "react";
import Image from 'next/image';
import SkillComponent from "../component/SkillComponent";
import SectionTitle from "../component/SectionTitle";
import ExperienceCard from "@/component/ExperienceCard";
import ProjectSection from "@/component/ProjectSection";
import FooterComponent from "@/component/FooterComponent";
import SocialIconComponent from "@/component/SocialIconComponent";



export default function Home() {

  const [hamburgeClicked, setHamburgerClicked] = useState(false);
  const workSectionRef = useRef<HTMLDivElement>(null)
  const skillSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const handleHamgerClicked = () => {
    setHamburgerClicked((preState) => !preState)
  }

  const scrollToSection = (currentRef: any) => {
    setHamburgerClicked(false)
    currentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const openNewTab=()=>{
    window.open("https://drive.google.com/file/d/1CwIVTKvSNSFopAZAdnYrUZLzl3WS_zcc/view?usp=drive_link")
  }

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <h4 className={styles.logo}> {'<'} SK {'/>'}</h4>
        </div>
        <div className={styles.navbarTabs}>
          <p className={styles.tabs} onClick={() => scrollToSection(aboutSectionRef)} >About</p>
          <p className={styles.tabs} onClick={() => scrollToSection(skillSectionRef)}>Skills</p>
          <p className={styles.tabs} onClick={() => scrollToSection(workSectionRef)}>Work</p>
          <p className={styles.tabs} onClick={() => scrollToSection(contactSectionRef)}>Contact</p>
          <div>
            <p className={styles.tabs} onClick={openNewTab}>Request for CV</p>
          </div>
        </div>
        <div className={styles.hamburgerIcon} onClick={handleHamgerClicked}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <ul className={`${styles.mobileMenu} ${hamburgeClicked && styles.open}`}>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={() => scrollToSection(aboutSectionRef)}>About</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={() => scrollToSection(skillSectionRef)}>Skill</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={() => scrollToSection(workSectionRef)}>Work</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs} onClick={() => scrollToSection(contactSectionRef)}>Contact</p></li>
            <li className={styles.mobileMenuTab}> <p className={styles.tabs}  onClick={openNewTab}>Request for CV</p></li>
        </ul>
      </nav>
      <main className={`${styles.main} ${hamburgeClicked && styles.addMargin}`}>
        <section className={styles.intoSection}>
          <div className={styles.intoDetails}>
            <p className={styles.introName}>Hi, I'm Saurabh 👋</p>
            <p className={styles.aboutMeDetails}>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            <div className={styles.introLocation}>
              <img src="./location.png" width={20} height={20} />
              <p className={styles.cityName}>Arrah, Bihar</p>
            </div>
            <div className={styles.introLocation}>
              <img src="./greendot.png" width={10} height={10} />
                <p className={styles.cityName}>Available for new projects</p>
            </div>
            < SocialIconComponent/>

          </div>
          <div className={styles.introPhoto}>
            <div className={styles.inroPhotoContainer}>
              <img
                src="/piccc.png"
                alt="My Picture"
                width={140}
                height={180}
                className={styles.intophotoImg}
              />

            </div>
          </div>
        </section>
        <section className={styles.aboutSection} ref={aboutSectionRef}>
        <SectionTitle title="About me" />
        <div className={styles.aboutMeMainContainer}>
        <div className={styles.profilePicSection}>
            <div className={styles.inroPhotoContainer}>
              <img
                src="/piccc.png"
                alt="about me Picture"
                width={140}
                height={180}
                className={styles.intophotoImg}
              />

            </div>
          </div>
          <div className={styles.aboutNameSection}>
            <p className={styles.curiousSection}>Curious about me? Here you have it:</p>
            <p className={styles.aboutMeDetails}>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
          </div>
        </div>
       
        
        </section>

        <section className={styles.skillSection} ref={skillSectionRef}>

          <div>
            <SectionTitle title="Skill" aboutContainer="The skills, tools and technologies I am really good at:" />

          </div>
          <SkillComponent />
        </section>
        <section className={styles.expreienceSection}>
          <SectionTitle title="Exprience" aboutContainer="Here is a quick summary of my most recent experiences:" />
          <ExperienceCard />
        </section>
        <div className={styles.workSection} ref={workSectionRef}>
          <SectionTitle title="Work" aboutContainer="Some of the noteworthy projects I have built:" />
          <ProjectSection />
        </div>
      </main>
      <footer className={styles.footer} ref={contactSectionRef}>
        <SectionTitle title="Get in touch" aboutContainer="Feel free to reach out to me" />
        <FooterComponent />
      </footer>
    </div>
  );
}
