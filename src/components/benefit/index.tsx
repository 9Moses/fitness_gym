import { HText } from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import { benefits } from "./benefitShare";
import Benefits from "./Benefits";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Benefit = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-4 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="text-black my-2 text-sm">
            Our gym is more than just a place to pump iron. It's a supportive
            community where you'll find expert trainers to guide you, energizing
            classes to challenge you, and a welcoming environment to empower
            you.
          </p>
        </div>

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitsType) => (
            <Benefits
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
