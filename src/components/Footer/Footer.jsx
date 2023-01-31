import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../images/logo.png'
import faceBookIcon from '../../images/facebookIcon.png'
import tweeter from '../../images/tweeter.png'
import instagram from '../../images/instagramIcon.png'
import footerRightSide from '../../images/footerRightSide.png'
function Footer() {
    return (
        <div className={styles.FooterMainDiv}>
            <footer>
                <div className={styles.footerDiv_1}>
                    <div>
                        <img src={logo} />
                    </div>
                    <div className={styles.footerDescription}>
                        <h4>
                            Let’s stay in touch
                        </h4>
                        <p>Be it your child’s academic issues, teenage troubles, developmental queries, their future concerns, your relationship with them, or your own mental peace as a parent.</p>
                    </div>
                    <div className={styles.socialMediaIcons}>
                        <a><img className={styles.faceBookIcon} src={faceBookIcon} /></a>
                        <a><img src={tweeter} /></a>
                        <a><img src={instagram} /></a>
                    </div>
                </div>
                <div className={styles.footerDiv_2}>
                    <h5>Company</h5>
                    <div>
                        <p><a>Home</a></p>
                        <p><a>About Us</a></p>
                        <p><a>Our Team</a></p>
                        <p><a>Contact Us</a></p>
                        <p><a>Careers</a></p>
                        <p><a>News room</a></p>
                    </div>
                </div>
                <div className={styles.footerDiv_3}>
                    <h5>Resources</h5>
                    <div>
                        <p><a>Blogs</a></p>
                        <p><a>FAQs</a></p>
                        <p><a>Terms & conditions</a></p>
                        <p><a>Reurn & refund policy</a></p>
                        <p><a>Privacy Policy</a></p>
                    </div>
                </div>
                <div className={styles.footerDiv_4}>
                    <img src={footerRightSide} />
                </div>
            </footer>
            <div className={styles.horizontalLine}></div>
            <div className={styles.copyWrite}><p>Copyright © 2022 Mom’s Belief. A unit of Rays of Belief Pvt Ltd.</p></div>
        </div>
    )
}

export default Footer