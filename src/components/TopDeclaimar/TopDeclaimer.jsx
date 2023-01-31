import React from 'react'
import styles from './TopDeclaimer.module.scss'
function TopDeclaimer() {
    return (
        <div>
            <div className={styles.declaimer}>
                <p>Language: <b>English</b></p>
                <p>Need consultation? Do you want to talk to an expert? Call us: <b>+91 90155-00061</b></p>
            </div>
        </div>
    )
}

export default TopDeclaimer