import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="mx-2 md:mx-10 mt-0 md:mt-12">
      <div className="desktop md:block hidden">
        <div className=" md:flex w-screen md:gap-18 overflow-hidden h-[300px] md:h-[330px] text-[200px] md:text-[340px] md:mt-4 text-[#777777]">
          <span className="flex items-center justify-center font-bebas-serif space-x-0 -tracking-[0.05em] h-[30%] md:h-auto">
            <motion.div
              initial={{ y: 320 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                F
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ml-0.5">
                U
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                L
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                L
              </span>
            </motion.div>
          </span>
          <motion.div
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <span className="font-bebas-serif text-hover/70 space-x-0 -tracking-[0.05em] md:flex md:justify-center md:items-center h-[10%] md:h-[159px]">
              <span className="font-bebas-serif text-hover/70 flex items-end justify-center h-full">
                <span className="w-[50px] md:w-[300px] h-[30px] bg-[#777777]"></span>
              </span>
            </span>
          </motion.div>

          {/* End */}
          <span className="flex items-center justify-center font-bebas-serif text-[#777777]  space-x-0 -tracking-[0.05em] text-[200px] md:text-[340px] h-[40%] md:h-[340]">
            <motion.div
              initial={{ y: 620 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                S
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                T
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                A
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                C
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                K
              </span>
            </motion.div>
          </span>
        </div>

        {/* Developer  */}
        <div className="flex gap-16">
          <span className="font-bebas-serif text-[200px]  md:text-[340px] text-[#777777] flex space-x-0 -tracking-[0.05em] -mt-28 ">
            <motion.div
              initial={{ y: 350 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
            >
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                D
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                E
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                V
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out">
                E
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                L
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                0
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                P
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                E
              </span>
              <span className="hover:text-hover transition-colors duration-300 ease-in-out ">
                R
              </span>
            </motion.div>
          </span>
          <div className="mt-2 text-white/70 text-[16px]">
            <motion.div
              initial={{ y: 350 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              <p className="leading-6 font-open-sans text-[17px]">
                I am a <span className="text-muted">Developer</span> based in Kathmandu, Nepal , Focues
                on created Modern Websites. Having experience of more than 2
                years, I have worked with multiple projects including
                e-commerce, startups.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* mobile view  */}

      <div className="mobile block md:hidden mt-14 overflow-hidden">
        <div className="">
          <motion.div
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "linear", delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row md:gap-18  text-[#777777]">
              {/* FRONT */}
              <span className="font-bebas-serif text-[165px] leading-none -tracking-[0.05em]">
                FULL
              </span>

              {/* DASH + END (vertical on mobile, horizontal on desktop) */}
              <div className="flex gap-1 px-2">
                {/* Dash */}
                <div className="flex items-center justify-center">
                  <span className="block w-[90px] md:w-[300px] h-[18px] bg-[#777777] mb-4 md:mb-0 md:mr-4"></span>
                </div>

                {/* END */}
                <span className="font-bebas-serif text-[165px]  leading-none text-hover-tracking-[0.05em]">
                  STACK
                </span>
              </div>
            </div>

            {/* DEVELOPER */}
            <span className="flex flex-col font-bebas-serif text-[165px] text-[#777777] leading-none -tracking-[0.05em]">
              <span className="">DEVELOP</span>
              <span>ER</span>
              <div></div>
            </span>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
