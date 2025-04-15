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

            </div>
        </div>
    )
}
