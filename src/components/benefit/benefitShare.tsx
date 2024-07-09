import { BenefitsType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "It's a supportive community where you can challenge yourself, find motivation, and achieve your wellness goals.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We offer a variety of fitness classes, personalized training, and expert guidance to empower you to become a healthier, happier you.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Join us and experience the difference – a place where sweat meets support, and results meet lifelong friendships.",
  },
];
