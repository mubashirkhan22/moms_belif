import React from 'react'
import styles from './MoreQuestionsSection.module.scss'
import cx from 'classnames'
import ComboBox from './CountryCodeDropDown/CountryCodeDropDown'
function MoreQuestionsSection() {
    return (
        <div className={styles.MoreQuestionsMainDiv}>
            <div class={styles.MoreQuestuionsHeader}>
                <h2> Got More Questions?</h2>
                <h2> Talk To Our Experts</h2>
                <p>These programs work on applied neurological science. Our experts have curated each program with the knowledge </p>
            </div>
            <div className={styles.MoreQuestionsForm}>
                <h4>Find the best for your child</h4>
                <form type='submit'>
                    <div className={styles.formField}>
                        <label>Your Name</label>
                        <input placeholder='Enter your name' />
                    </div>
                    <div className={styles.formField}>
                        <label>Your Child's Name</label>
                        <input placeholder="Enter your child's name" />
                    </div>
                    <div className={styles.formField}>
                        <label>Child's Age</label>
                        <input placeholder="Enter child's age" />
                    </div>
                    <div className={cx(styles.formField, styles.emailDiv)}>
                        <label>Email id</label>

                        <input placeholder="Enter email id" />

                    </div>
                    <div className={styles.formField}>
                        <label>Mobile Number</label>
                        {/* <ComboBox className={styles.dropDown} /> */}
                        <input placeholder="Enter mobile no." />
                    </div>

                </form>
                <div className={styles.formSubmitDiv}>
                    <div className={styles.submitDiv}>
                        <button>Request a call</button>
                        <p>We’ll keep your information private & secure</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoreQuestionsSection