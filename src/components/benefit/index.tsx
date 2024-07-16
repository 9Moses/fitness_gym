import { HText } from "@/shared/HText";
import { BenefitsType, SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import { benefits } from "./benefitShare";
import Benefits from "./Benefits";
import ActionButton from "@/shared/Button/actionButton";
import { Fitness_Png } from "@/assets";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
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
        <motion.div
          className="md:my-4 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="text-black my-2 text-sm">
            Our gym is more than just a place to pump iron. It's a supportive
            community where you'll find expert trainers to guide you, energizing
            classes to challenge you, and a welcoming environment to empower
            you.
          </p>
        </motion.div>

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

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img src={Fitness_Png} alt="img-benefit" className="mx-auto" />
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPY MEMBERS GETTING{" "}
                <span className="text-blue-500">FIT</span>
              </HText>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-black">
                Welcome to our fitness community, where millions of happy
                members are transforming their lives and achieving their fitness
                goals every day. Our platform offers a variety of workout
                programs designed by certified experts, catering to all fitness
                levels. Enjoy the flexibility of working out at home, in the
                gym, or on the go with our mobile app.{" "}
              </p>
              <p className="my-5 text-black">
                Stay motivated with the support of a vibrant community, tracking
                your progress and celebrating every milestone. Join us and be
                part of a movement that's making fitness fun and accessible for
                everyone!
              </p>
            </motion.div>

            <div className="mt-16">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
