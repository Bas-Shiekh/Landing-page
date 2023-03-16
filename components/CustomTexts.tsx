'use client';

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";

interface ITypingText {title: string, textStyles: string}

export const TypingText: FC<ITypingText> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {
      Array.from(title).map((letter: string, index: number) => (
      <motion.span
        variants={textVariant2}
        key={`letter${index + 1}`}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText: FC<any> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
