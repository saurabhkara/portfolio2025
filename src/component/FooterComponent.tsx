import React from 'react';
import styles from './footer.module.css'
import SocialIconComponent from './SocialIconComponent';

export default function FooterComponent() {
    return (
        <div className={styles.footercomponent}>
            <div className={styles.mailContainer}>
                <img src="./mail.png" className={styles.mailIcon} />
                <p className={styles.mailid}>saurabhkumar679@gmail.com</p>
                <img src="./copyIcon.png" className={styles.copyIcon} />
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
        </div>
    )
}
