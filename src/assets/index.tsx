import HomePageText from "@/assets/HomePageText.png";
import ForbesSponsor from "@/assets/forbesSponsor.png";
import HomePage from "@/assets/homePg.png";
import ImgClasses from "@/assets/homePge.png";
import RedBull from "@/assets/RedBullSponsor.png";
import FortuneSponsor from "@/assets/FortuneSponsor.png";
import FitnessPng from "@/assets/fitness.png";
import Fitness_Png from "@/assets/fitness_1.png";
import Yoga from "@/assets/yoga.jpg";
import Cardio from "@/assets/cardio.jpg";
import HIIT from "@/assets/HIIT.jpg";
import Zumba from "@/assets/zumba.jpg";
import ST from "@/assets/ST.jpg";

export {
  HomePageText,
  ForbesSponsor,
  HomePage,
  RedBull,
  ImgClasses,
  FortuneSponsor,
  FitnessPng,
  Fitness_Png,
  Yoga,
  HIIT,
  Cardio,
  Zumba,
  ST,
};

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
