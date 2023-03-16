'use client';

import { FC } from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TypingText, TitleText, StartSteps } from "@/components";
import { startingFeatures } from "@/constants";

const GetStarted: FC = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer(0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" textStyles="" />
        <TitleText title={<>Get started with just a view clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature: string, index: number) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
