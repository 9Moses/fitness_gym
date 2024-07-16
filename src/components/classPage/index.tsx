import { HText } from "@/shared/HText";
import { ClassType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { ourClasses } from "./ourClasses";
import { Classes } from "./Classes";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-slate-900 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Our platform offers a variety of workout programs designed by
              certified experts, catering to all fitness levels. Enjoy the
              flexibility of working out at home, in the gym, or on the go with
              our mobile app.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2000px] whitespace-nowrap">
            {ourClasses.map((item: ClassType, index) => (
              <Classes
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
