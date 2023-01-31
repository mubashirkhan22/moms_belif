import React from 'react'
import cx from 'classnames'
import styles from './HowDoSection.module.scss'
import connectingLine from '../../images/HowDoImages/connectingLine.png'
import talkToExpertIcon from '../../images/HowDoImages/talkToExpertIcon.png'
import takeAnAssesment from '../../images/HowDoImages/takeAnAssesment.png'
import circleOutline from '../../images/HowDoImages/circleOutline.png'
import personalizedEducation from '../../images/HowDoImages/personalizedEducation.png'
import programTraining from '../../images/HowDoImages/programTraining.png'
import TrackProgress from '../../images/HowDoImages/TrackProgress.png'
import boy from '../../images/HowDoImages/boy.png'
import man from '../../images/HowDoImages/man.png'
import twoStars from '../../images/HowDoImages/twoStars.png'
import union from '../../images/HowDoImages/Union.png'
import twoStarsRight from '../../images/HowDoImages/twoStarsRight.png'

function HowDoSection() {
    return (
        <div className={styles.HowDoMainSection}>
            <div className={styles.howDoSubDiv_1}>
                <div className={styles.hedingLine}>
                    <h2>How do we work?</h2>
                </div>
                <div className={styles.howDoDecription}>
                    <p>Mom’s Belief is an innovation and research-driven holistic care provider for children with Special Needs and operates through a Home-Based Program.</p>
                </div>
            </div>
            <div className={styles.howDoSubDiv_2}>
                <div className={styles.connectingLine}>
                    <img src={connectingLine} />
                </div>
                <div className={cx(styles.talk_to_expert, styles.howToImages)}>
                    <img src={talkToExpertIcon} />
                    <p><span className={styles.numbering}>1.</span> <span>Talk to an expert</span></p>
                </div>
                <div className={cx(styles.take_an_assesment, styles.howToImages)}>
                    <div className={styles.noDottedRing}>
                        <div className={styles.takeAnAssesmentImgDiv}>
                            <p><span className={styles.numbering}>2.</span> <span className={styles.steps}>Take an
                                assessment</span></p>
                            <figure>
                                <img className={styles.img_1} src={takeAnAssesment} />
                                <img className={styles.img_2} src={circleOutline} />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className={cx(styles.talk_to_expert, styles.howToImages, styles.personalizedEducation)}>
                    <img src={personalizedEducation} />
                    <p><span className={styles.numbering}>3.</span> <span>Get personalised
                        education plan</span></p>
                </div>
                <div className={cx(styles.talk_to_expert, styles.howToImages, styles.programTraining)}>
                    <p><span className={styles.numbering}>4.</span> <span>Take programs &
                        trainings</span></p>
                    <img src={programTraining} />

                </div>
                <div className={cx(styles.talk_to_expert, styles.howToImages, styles.TrackProgress)}>
                    <img src={TrackProgress} />
                    <p><span className={styles.numbering}>5.</span> <span>Track progress</span></p>
                </div>
            </div>
            <div className={styles.howDoSubDiv_3}>
                <img src={boy} />
            </div>
            <div className={styles.howDoSubDiv_4}>
                <img src={man} />
            </div>
            <div className={styles.howDoSubDiv_5}>
                <img src={twoStars} />
            </div>
            <div className={styles.howDoSubDiv_6}>
                <img src={union} />
            </div>
            <div className={styles.howDoSubDiv_7}>
                <img src={twoStarsRight} />
            </div>


        </div>
    )
}

export default HowDoSection