import { HomePage, HomePageText } from "@/assets";
import useMediaQuery from "@/mediaQuery/UseMediaQuery";
import ActionButton from "@/shared/Button/actionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Sponsors } from "./Sponsors";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-slate-950 py-10 md:h-full md:pb-0">
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        <div className="mt-32 md:basis-3/5 ">
          <div className="md:-mt-20">
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
          </div>
          <div className="mt-8 flex items-center gap-8 md:justify-start">
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
          </div>
        </div>
        <div className="flex basis-3/5 justify-center">
          <img src={HomePage} alt="home-gym" />
        </div>
      </div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-black py-10">
          <Sponsors />
        </div>
      )}
    </section>
  );
};
