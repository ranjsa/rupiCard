import styles from './footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerInnerWrapper}>
                    <div className={styles.footerInner}>
                        <div className={styles.footerLogo}>UNI</div>
                        <div>
                            Indiqube Sigma No.3/B, Nexus {"\n"}
                            Koramangala 3rd Block SBI Colony,{"\n"}
                            Koramangala, Bengaluru, Karnataka 560034
                        </div>
                        <div>
                            Contact Us: 080 68216821 {"\n"}
                            Email: care@uni.club
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerLinks}>
                <div className={styles.socialLinks}>
                    {["Instagram", "LinkedIn", "Twitter", "Facebook", "Careers"].map(
                        (item, index) => (
                            <div key={index}>{item}</div>
                        )
                    )}
                </div>
                <div>
                    Credit Card KFS | Credit Card T&Cs | Uni T&Cs | Lending Partner TnCs
                </div>
            </div>
        </>
    );
};

export default Footer;