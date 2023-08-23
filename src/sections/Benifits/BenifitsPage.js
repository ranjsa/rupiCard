import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import FadeInFromTop from '../../components/FadeInTop/FadeInTopAnimation';

import Arrow from '../../assets/icons/arrow.svg';

import styles from './benifits.module.css';

const Benifits = () => {
    return (
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <ScrollAnimation>
              <p>
                Earn 1% assured cashback<span> on your spends. Get</span> 5X
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                {" "}
                more value than cashback<span> at the Uni Store. Enjoy</span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                <span>round the clock</span> Whatsapp support.
                <span> And it&apos;s</span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation>
              <p>
                lifetime free<span>; no joining fee, no annual charges.</span>
              </p>
            </ScrollAnimation>
            <div id="triggerPoint"></div>
          </div>
          <FadeInFromTop>
            <div className={`${styles.downArrowContainer}`}>
              <div className={styles.downArrow}>
                <img
                  src={Arrow}
                  height={74}
                  width={74}
                  alt="arrow"
                />
              </div>
            </div>
          </FadeInFromTop>
        </div>
    );
};

export default Benifits;