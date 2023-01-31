import React from 'react'
import cx from 'classnames'
import styles from './PlanAndPackages.module.scss'
function PlanAndPackages() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.packagesMainDiv}>
                <h2>Plans & Packages</h2>
                <p>These programs work on applied neurological science. Our experts have curated each program with the knowledge</p>
            </div>
            <div className={styles.cards}>
                <div className={cx(styles.priceCard_1, styles.priceCard)}>
                    <h2>₹5,200</h2>
                    <p>for 8 sessions per month</p>
                </div>
                <div className={styles.priceCard}>
                    <h2>₹7,200</h2>
                    <p>for 12 sessions per month</p>
                </div>
                <div className={styles.priceCard}>
                    <h2>₹14,400</h2>
                    <p>for 24 sessions</p>
                </div>
                <div className={styles.priceCard}>
                    <h2>₹16,200</h2>
                    <p>for 36 sessions</p>
                </div>
            </div>
            <div className={styles.packageExtras}>
                <h4>Program Package Includes</h4>
                <div>
                    <div className={styles.UL}>
                        <p>Minimum 14 Therapy Sessions</p>
                        <p>Free Access To The Exclusive Webinars</p>
                        <p>12 Counselling Sessions</p>
                        <p>10% OFF on all the center services</p>
                        <p>Access to community WhatsApp group </p>
                        <p>12 Q&A Sessions</p>
                        <p>12 Resource Kits</p>
                        <p>2 Exclusive Expert Sessions Per Quarter</p>
                    </div>
                </div>
            </div>
            <div className={styles.enrollDiv}>
                <div className={styles.submitDiv}>
                    <button>Enroll now</button>
                    <p><a>Get 2 Week Free Access</a></p>
                </div>
            </div>
        </div>
    )
}

export default PlanAndPackages