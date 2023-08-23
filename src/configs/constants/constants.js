import Rewards1 from '../../assets/images/reward1.png';
import Rewards2 from '../../assets/images/reward2.png';
import Rewards3 from '../../assets/images/reward3.png';

import MobileImage1 from '../../assets/images/app_screen.png';
import MobileImage2 from '../../assets/images/app_screen_1.png';

import WhatsAppImage from '../../assets/images/whatsapp_bubble.webp';
import RupeeImage from '../../assets/images/rupee_bubble.webp';
import CheckImage from '../../assets/images/antivirus_bubble.webp';

import pcidssLogo from '../../assets/images/pcidss_cert.svg';

export const REWARDS_DATA = [
  {
    text: "1% assured cashback on your spends.|The more you spend, the more you earn.",
    img: Rewards1,
    width: 448,
    height: 424,
  },
  {
    text: "5x more value than your cashback,| only at the Uni Store.",
    img: Rewards2,
    width: 448,
    height: 449,
  },
  {
    text: "Zero Forex Markup.| Go international, without any fees.",
    img: Rewards3,
    width: 448,
    height: 405,
  },
];

export const ADVANTAGES_DATA = [
  {
    text: "We've all heard of instant groceries, now say hello to |instant credit.|0% hassle, 100% paperless. Get your Uni Card instantly.",
    img: MobileImage1,
    width: 499,
    height: 666,
  },
  {
    text: "With Uni, |you’re always in control. |Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.",
    img: MobileImage2,
    width: 499,
    height: 666,
  },
];

export const ADDED_BENEFITS_DATA = [
  {
    text: "Help, just a WhatsApp away. Anytime, Anyday.|During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    img: WhatsAppImage,
    width: 112,
    height: 111,
  },
  {
    text: "No hidden charges, no last minute surprises.|100% money back guarantee if a charge is applied without your knowledge.",
    img: RupeeImage,
    width: 112,
    height: 111,
  },
  {
    text: `Super secure. Because we care about your money.|${pcidssLogo}`,
    img: CheckImage,
    width: 112,
    height: 111,
  },
];
