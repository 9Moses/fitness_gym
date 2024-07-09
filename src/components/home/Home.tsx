import { HomePage, HomePageText } from "@/assets";
import useMediaQuery from "@/mediaQuery/UseMediaQuery";
import ActionButton from "@/shared/Button/actionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Sponsors } from "./Sponsors";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-slate-950 py-10 md:h-full md:pb-10">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="mt-32 md:basis-3/5 ">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={HomePageText}
              alt="home-text-page"
              className="w-5/6  object-contain"
            />

            <p className="mt-8 text-sm md:text-start">
              Don't wait! Start your fitness journey today and unlock a
              healthier you.Unlock your potential. Get fit with us. Transform
              your body. Start your journey today
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold hover:text-secondary-400"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center">
          <img src={HomePage} alt="home-gym" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[140px] w-full bg-black py-10 mt-3 ">
          <Sponsors />
        </div>
      )}
    </section>
  );
};
