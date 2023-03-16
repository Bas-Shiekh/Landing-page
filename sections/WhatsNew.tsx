'use client';

import { FC } from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { TypingText, TitleText, NewFeatures } from "@/components";
import { newFeatures } from "@/constants";

const WhatsNew: FC = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer(0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Whats New?" textStyles="" />
        <TitleText title={<>Whats new about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature: any) => (
            <NewFeatures
              key={feature.title}
              imgUrl={feature.imgUrl}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
