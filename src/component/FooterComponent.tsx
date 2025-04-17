import React from 'react';
import styles from './footer.module.css'
import SocialIconComponent from './SocialIconComponent';
import { ToastContainer, toast } from 'react-toastify';

export default function FooterComponent() {

    

    const copyClipBoard=()=>{
        navigator.clipboard.writeText('saurabhkumar679@gmail.com');
        toast("Email copied to clipboard");
    }
    return (
        <div className={styles.footercomponent}>
            <div className={styles.mailContainer}>
                <a href="mailto:saurabhkumar679@gmail.com" ><img src="./mail.png" className={styles.mailIcon} /></a>
               <div> <p className={styles.mailid}>saurabhkumar679@gmail.com</p></div>
                <div onClick={copyClipBoard} ><img src="./copyIcon.png" className={styles.copyIcon} /></div>
            </div>
            <div className={styles.socialComp}>
                <p className={styles.findMessage}>You may also find me on these platforms!</p>
                < SocialIconComponent />
            </div>
            <div className={styles.madewithLove}>
                <img src="./copyright.png" className={styles.copyrightHeart} />
                <p className={styles.copyrighttext}> 2005 | Design and coded with</p>
                <img src="./heart.png" className={styles.copyrightHeart} />
                <p className={styles.copyrighttext}>by Saurabh</p>
            </div>
            <ToastContainer />
        </div>
    )
}
