import { HomePageText } from "@/assets";
import useMediaQuery from "@/mediaQuery/UseMediaQuery";
import ActionButton from "@/shared/Button/actionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      <div>
        <div>
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-text-page" />
              </div>
            </div>
            <p>
              Don't wait! Start your fitness journey today and unlock a
              healthier you.Unlock your potential. Get fit with us. Transform
              your body. Start your journey today
            </p>
          </div>
          <div>
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
        <div></div>
      </div>
    </section>
  );
};
