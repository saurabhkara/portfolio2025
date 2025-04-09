'use client'
import styles from "./page.module.css";
import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  const [hamburgeClicked,setHamburgerClicked] = useState(false)

  const handleHamgerClicked=()=>{
    console.log("clicked",hamburgeClicked)
    setHamburgerClicked((preState)=>!preState)
  }
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <h4 className={styles.logo}> {'<'} SK {'/>'}</h4>
        </div>
        <div className={styles.navbarTabs}>
          <p className={styles.tabs}>About</p>
          <p className={styles.tabs}>Work</p>
          <p className={styles.tabs}>Testimonial</p>
          <p className={styles.tabs}>Contact</p>
          <div>
            <p className={styles.tabs}>Request for CV</p>
          </div>
        </div>
        <div className={styles.hamburgerIcon} onClick={handleHamgerClicked}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>

          <ul className={`${styles.mobileMenu} ${hamburgeClicked && styles.open}`}>
            <li className={styles.mobileMenuTab}><p className={styles.tabs}>Work</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs}>Testimonial</p></li>
            <li className={styles.mobileMenuTab}><p className={styles.tabs}>Contact</p></li>
            <li className={styles.mobileMenuTab}> <p className={styles.tabs}>Request for CV</p></li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>
        <p>Main content</p>
      </main>
      <footer className={styles.footer}>
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
