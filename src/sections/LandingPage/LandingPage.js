import styles from './landingPage.module.css';
import CompanyLogo from '../../assets/icons/logo.svg';
import PlusImage from '../../assets/icons/plus.svg';
import LandingCardsImage from '../../assets/images/uni_cards.png';
import BackGroundVideo from '../../assets/bg_1.mp4'

const LandingPage = () => {
    return (
        <div className={styles.landingWrapper}>
        <video autoPlay loop muted>
          <source src={BackGroundVideo} typeof="video/mp4" />
        </video>
        <div className={styles.header}>
          <div className={styles.uniLogo}>
            <img
              src={CompanyLogo}
              height={100}
              width={100}
              alt="Uni Cards"
            ></img>
          </div>
          <button className={styles.payCheck}>Uni Paycheck</button>
          <div className={styles.burgerMenu}>
            <img
              src={"/icons/hamburger-menu.svg"}
              height={20}
              width={31}
              alt="hamburger"
            ></img>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.leftSection}>
            <div className={styles.mainText}>
              <strong>NX Wave.</strong>The next-gen credit card for those who
              love rewards.
            </div>
            <div className={styles.rewardsText}>
              <span>1% Cashback</span>
              <span>
                <img
                  src={PlusImage}
                  height={12}
                  width={12}
                  alt="plus"
                />
              </span>
              <span>5x Rewards</span>
              <span>
                <img
                  src={PlusImage}
                  height={12}
                  width={12}
                  alt="plus"
                />
              </span>
              <span>Zero Forex Markup</span>
            </div>
            <div className={styles.form}>
              <div className={styles.inputField}>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
              <button className={styles.applyNow}>Apply Now</button>
            </div>
            <div className={styles.disclaimerSection}>
              <input type="checkbox" checked />
              <div className={styles.disclaimer}>
                You agree to be contacted by Uni Cards over Call, SMS, Email
                or WhatsApp to guide you through your application.
              </div>
            </div>
            <div className={styles.applyNowMobile}>
              <div className={styles.applyNowContainer}>
                <div className={styles.applyNowText}>Apply Now</div>
                <div className={styles.rightArrow}>
                  <img
                    src="/icons/arrow.svg"
                    height={22}
                    width={34}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.uniImage}>
              <img
                src={LandingCardsImage}
                height={373}
                width={484}
                alt="Uni Cards"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;