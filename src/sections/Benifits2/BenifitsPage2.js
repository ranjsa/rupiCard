import CircleImage from '../../assets/images/circle.png';
import SBMImage from '../../assets/images/SBM.svg';

import { REWARDS_DATA, ADVANTAGES_DATA, ADDED_BENEFITS_DATA } from '../../configs/constants/constants';

import Benefits from '../../components/BenifitsComponent/BenefitsSection';
import Advantages from '../../components/AdvantagesComponent/AdvantageSection';
import Reward from '../../components/RewardsComponent/RewardsSection';

import styles from './benifitsPage.module.css';

const BenifitsPage = () => {
    return (
        <>
            <div className={styles.rewardsContainer}>
                {REWARDS_DATA.map((data, index) => (
                    <Reward
                        text={data.text}
                        isReversed={index & 1}
                        img={data.img}
                        width={data.width}
                        height={data.height}
                        key={index}
                    />
                ))}
                <div className={styles.rewardsTextWrapper}>
                    <div className={styles.rewardsText1}>
                        Lifetime <span>free.</span> No joining fee. No annual charges.
                    </div>
                </div>
            </div>
            <div className={styles.advantagesWrapper}>
                <div className={styles.cicleContainer}>
                    <img
                        src={CircleImage}
                        height={1000}
                        width={1000}
                        alt="faintcircles"
                    />
                </div>
                {ADVANTAGES_DATA.map((data, index) => (
                    <Advantages
                        text={data.text}
                        height={data.height}
                        width={data.width}
                        img={data.img}
                        key={index}
                    />
                ))}
            </div>
            <div className={styles.addedBenefitsContainer}>
                {ADDED_BENEFITS_DATA.map((data, index) => (
                    <Benefits
                        text={data.text}
                        height={data.height}
                        width={data.width}
                        img={data.img}
                        key={index}
                    />
                ))}
            </div>
            <div className={styles.commitmentContainer}>
                <div className={styles.commitmentText}>
                    At Uni, we&apos;re committed to{" "}
                    <span>delivering an unmatched credit experience </span>
                    for millions of Indians.
                </div>
                <div className={styles.bankPartnerText}>
                    On this mission, we&apos;ve partnered with some of the best in the
                    business.
                </div>
                <img
                    src={SBMImage}
                    height={150}
                    width={150}
                    alt="SBM bank logo"
                ></img>
            </div>
            <div className={styles.disclaimerContainer}>
                <div className={styles.disclaimerText}>
                    Please note that to stay compliant with RBI guidelines, we have
                    discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
                </div>
            </div>
        </>

    );
};
export default BenifitsPage;