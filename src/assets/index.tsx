import HomePageText from "@/assets/HomePageText.png";
import ForbesSponsor from "@/assets/forbesSponsor.png";
import HomePage from "@/assets/homePg.png";
import RedBull from "@/assets/RedBullSponsor.png";
import FortuneSponsor from "@/assets/FortuneSponsor.png";

export { HomePageText, ForbesSponsor, HomePage, RedBull, FortuneSponsor };

interface Sponsor {
  id: number;
  image: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    image: ForbesSponsor,
  },
  {
    id: 2,
    image: RedBull,
  },
  {
    id: 3,
    image: FortuneSponsor,
  },
];
