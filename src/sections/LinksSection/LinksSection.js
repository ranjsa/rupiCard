import PciLogo from '../../assets/images/pcidss_cert.svg';
import styles from './linkSection.module.css';

const LinkSection = () => {
    return (
        <>
            <div className={styles.downloadContainer}>
                <div>Download now to get started</div>
                <div className={styles.downloadLinksContainer}>
                    <div className={styles.downloadLink}>Google Play</div>
                    <div className={styles.downloadLink}>App Store</div>
                </div>
            </div>
            <div className={styles.securityContainer}>
                Uni maintains the highest level of security standards
                <img
                    src={PciLogo}
                    height={60}
                    width={60}
                    alt="PCI DSS Certified"
                />
            </div>
        </>
    );
};

export default LinkSection;