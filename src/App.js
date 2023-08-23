import './App.css';

import LandingPage from './sections/LandingPage/LandingPage';
import Benifits from './sections/Benifits/BenifitsPage'
import BenifitsPage2 from './sections/Benifits2/BenifitsPage2';
import LinkSection from './sections/LinksSection/LinksSection';
import Footer from './sections/Footer/Footer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <LandingPage />
      <Benifits />
      <BenifitsPage2 />
      <LinkSection />
      <Footer />
    </div>
  );
}

export default App;
