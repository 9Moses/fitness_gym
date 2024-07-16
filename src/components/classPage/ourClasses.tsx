import { Cardio, HIIT, ST, Yoga, Zumba } from "@/assets";
import { ClassType } from "@/shared/types";

export const ourClasses: Array<ClassType> = [
  {
    name: "Yoga Training Classes",
    description:
      "Yoga is a mind-body practice that combines physical postures, breathing exercises, and meditation. ",
    image: Yoga,
  },
  {
    name: "Cardio Training Classes",
    description:
      "Cardio classes are a great way to get your heart rate up and improve your cardiovascular health.",
    image: Cardio,
  },
  {
    name: "Strength  Training Classes",
    description:
      "Strength training classes use weights, resistance bands, and bodyweight exercises to help you build muscle. ",
    image: ST,
  },
  {
    name: "Zumba Training Classes",
    description:
      "Zumba is a high-energy dance fitness class that combines Latin music and dance moves. ",
    image: Zumba,
  },
  {
    name: "High-Intensity Interval Training Classes",
    description:
      "HIIT classes alternate between short bursts of intense exercise and periods of rest. ",
    image: HIIT,
  },
];
