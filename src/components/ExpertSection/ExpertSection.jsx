import React from "react";
import styles from "./ExpertSection.module.scss";
import underline from "../../images/ExpertSectionImages/underline.png";
import cardOutline from "../../images/ExpertSectionImages/cardOutline.png";
import cardPhoto_1 from "../../images/ExpertSectionImages/cardPhoto_1.png";
import cardPhoto_2 from "../../images/ExpertSectionImages/cardPhoto_2.png";
import cardPhoto_3 from "../../images/ExpertSectionImages/cardPhoto_3.png";
function ExpertSection() {
  return (
    <div className={styles.ExpertMainDiv}>
      <div className={styles.ExpertSubDiv_1}>
        <h2>Customisable Expert Curated Programs</h2>
        <p>
          These programs work on applied neurological science. Our experts have
          curated each program with the knowledge and insights from decades of
          experience.
        </p>
        <div className={styles.underlineDiv}>
          <img src={underline} />
        </div>
      </div>

      <div className={styles.programList}>
        <div className={styles.cards}>
          <div className={styles.card_1}>
            <div className={styles.cardPhotoSection}>
              <div className={styles.cardOutline}>
                <img src={cardOutline} />
              </div>
              <div className={styles.CardImage}>
                <img src={cardPhoto_1} />
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h4>Emotional Intelligence</h4>
              <p>
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p>
                <a>See all programs</a>
              </p>
            </div>
          </div>
          <div className={styles.card_2}>
            <div className={styles.cardPhotoSection}>
              <div className={styles.cardOutline}>
                <img src={cardOutline} />
              </div>
              <div className={styles.CardImage}>
                <img src={cardPhoto_2} />
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h4>Special Program</h4>
              <p>
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p>
                <a>See all programs</a>
              </p>
            </div>
          </div>
          <div className={styles.card_3}>
            <div className={styles.cardPhotoSection}>
              <div className={styles.cardOutline}>
                <img src={cardOutline} />
              </div>
              <div className={styles.CardImage}>
                <img src={cardPhoto_3} />
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h4>Regular Program</h4>
              <p>
                Children with higher emotional intelligence are better able to
                pay attention. Take a trial program now!
              </p>
              <p>
                <a>See all programs</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertSection;
