"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Sometimes It is good to feel the pain in order to feel the joy{" "}
        <Highlight className="text-black dark:text-white">
          of the success and happiness
        </Highlight>
        <div>
            <Link href="/login">
            <Button>Meet The AI</Button>
            </Link>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
