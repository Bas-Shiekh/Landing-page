'use client';

import { FC, useState } from 'react';
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText, ExploreCard, TitleText } from "@/components";
import { exploreWorlds } from "@/constants";

const Explore: FC = () => {
  const [active, setActive] = useState<string>('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world: any, index: number) => (
            <ExploreCard
              key={world.id}
              id={world.id}
              imgUrl={world.imgUrl}
              title={world.title}
              active={active}
              handleClick={setActive}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );};

export default Explore;
