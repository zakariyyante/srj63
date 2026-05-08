import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
  id: number;
  name: string;
  logo: LogoKey | string;
  rating: number;
  votes: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
}

interface CasinoRawData {
  name: string;
  logo: LogoKey | string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
}

// Helper function to generate ID from name
const generateIdFromName = (name: string): number => {
  return name.toLowerCase().replace(/\s+/g, '').split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
};
// Badge options for top 3
const topBadges = ["Best Bonus", "Top Pick", "Trending Now"];

// Raw casino data without id, rating, and badgessss
const casinosRawData: CasinoRawData[] = [
  {
    name: "SpinBoss",
    logo: "/spinboss.webp",
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://spbs.lynmonkel.com/?mid=355610_2121758&subid=SpinBoss-SRJ63&clickid=",
    votes: 5391,
    isMobile: true,
  },
  // {
  //   name: "RollySpin",
  //   logo: "/rolly.svg",
  //   bonus: "100% UP TO €600 + 200 FREE SPINS",
  //   url: "https://rollyspin19.net/dcdiqugc6?subid=RollySpin-SRJ63&visit_id=",
  //   votes: 6143,
  //   isMobile: true,
  // },
  
  {
    name: "7Abet",
    logo: "/7ABET.svg",
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 Free Spins to kickstart your journey!",
    url: "https://record.yoloaffiliates.com/_iPf0f63L7Qdhg6WO2I1rgWNd7ZgqdRLk/1/?s2s.req_id=7Abet-SRJ63&payload=",
    votes: 3962,
    isMobile: true,
  },
  {
    name: "WestAce",
    logo: "/westace.webp",
    bonus: "400% up to £12,750 + 400 FS",
    url: "https://wstc.lynmonkel.com/?mid=355610_2116959&subid=Westace-SRJ63&clickid=",
    votes: 3962,
    isMobile: true,
  },
  
  
    // {
    //   name: "Zombillion",
    //   logo: "/zombillion.svg",
    //   bonus: "Welcome Pack 250% up to £4000 + 200 FS",
    //   url: "https://direct.club.partners/click?pid=19&offer_id=33&l=1778175466&sub2=Zombillion-SRJ63&sub1=",
    //   votes: 3962,
    //   isMobile: true,
    // },
  
  
  
  // 


  // {
  //   name: "Karamba",
  //   logo: "/karamba.svg",
  //   bonus: "100% Bonus up to £200 + 20 Free Spins",
  //   url: "https://www.karamba.co.uk/lp/wo-300-spins?asys=cexp&affid=40838&AffiliateID=cx-40838_717172&cxd=cx-40838_717172&afi=28080&ar=&gclid=&lpr=%5Bafp2%5D&mmi=%5Bafp5%5D&MSCLKID=%5BMSCLKID%5D&utm_content=40838"
  // },
  {
    name: "Barz",
    logo: "/barz.webp",
    bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS",
    url: "https://media1.casimbaaff.com/redirect.aspx?pid=48000&bid=1480",
    votes: 1438,
  },
  // {
  //   name: "Spinland",
  //   logo: "/spinland.png",
  //   bonus: "100% WELCOME BONUS UP TO £300 + 50 BONUS SPINS ON FIRST DEPOSIT",
  //   url: "https://media1.casimbaaff.com/redirect.aspx?pid=48778&lpid=213&bid=1617&subid=Spinland-ST&clickid=",
  //   votes: 1126,
  // },
  // {
  //   name: "Coral Casino",
  //   logo: "coral",
  //   bonus: "Play £10 Get 200 Free Spins",
  //   url: "https://www.coral.co.uk"
  // },
  // {
  //   name: "LottoGo Casino",
  //   logo: "lottogo",
  //   bonus: "100% Bonus Up to £200 + 300 Bonus Spins",
  //   url: "https://www.lottogo.com"
  // },
  // {
  //   name: "MrQ Casino",
  //   logo: "mrq",
  //   bonus: "Spend £10 Get 60 Spins No Wagering On Winnings",
  //   url: "https://www.mrq.com"
  // },
  // {
  //   name: "NetBet",
  //   logo: "netbet",
  //   bonus: "Up to 500 Free Spins On First Deposit",
  //   url: "https://www.netbet.co.uk"
  // }
];

// Generate casinos with auto-calculated id, rating, and badge
export const casinos: Casino[] = casinosRawData.map((casino, index) => {
  const rating = parseFloat((10 - Math.floor(index / 1) * 0.1).toFixed(1));
  
  return {
    id: generateIdFromName(casino.name) + index, // Include index to ensure uniqueness
    name: casino.name,
    logo: casino.logo,
    rating: rating,
    votes: casino.votes,
    bonus: casino.bonus,
    url: casino.url,
    badge: index < 3 ? topBadges[index] : undefined,
    isMobile: casino.isMobile
  };
});
