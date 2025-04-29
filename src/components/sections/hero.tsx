"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <span className="text-4xl md:text-5xl font-bold text-primary">
            FS
          </span>
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        FinalSpaces
      </motion.h1>

      <motion.p
        className="max-w-3xl text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        FinalSpaces combines compassion, experience in the grieving process, and
        advanced technology to make the process of dying less overwhelming. When
        you use FinalSpaces tools, you transform a difficult experience into one
        that's more manageable and meaningful.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button size="lg" className="text-lg">
          Join Waitlist
        </Button>
      </motion.div>
    </motion.section>
  );
};
