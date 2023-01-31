import React from 'react'
import cx from 'classnames'
import styles from './HeroSection.module.scss'
import vectorLeft from '../../images/vector_left.png'
import vectorRight from '../../images/vector_right.png'
import Arrow from '../../images/arrow.png'
import singleStar from '../../images/Union.png'
import doubleStar from '../../images/doubleStars.png'
function HeroSection() {
    return (

        <div className={cx(styles.mainDiv, styles.outerDiv)}>
            <div className={styles.mainDiv}>
                <div className={cx(styles.subDiv_1, styles.mainSubDiv)}>
                    <h1>We Empower Mom's Belief & Enable Child's Growth.</h1>
                </div>
                <div className={cx(styles.subDiv_2, styles.mainSubDiv)}>
                    <p>We are reserch driven holistic care provider for growing children through a wide array of programs.</p>
                </div>
                <div className={cx(styles.subDiv_3, styles.mainSubDiv)}>
                    <button>Explore Programs</button>
                </div>
                <div className={cx(styles.subDiv_4, styles.mainSubDiv)}>
                    <p>Or Just <a href='#'>take a free assesment</a> to see how is the growth of your child.</p>
                </div>
            </div>
            <div className={styles.vectorLeft}>
                <img src={vectorLeft} />
            </div>
            <div className={styles.vectorRight}>
                <img src={vectorRight} />
            </div>
            <div className={styles.arrow}>
                <img src={Arrow} />
            </div>
            <div className={styles.single_star}>
                <img src={singleStar} />
            </div>
            <div className={styles.double_star}>
                <img src={doubleStar} />
            </div>
        </div>


    )
}

export default HeroSection