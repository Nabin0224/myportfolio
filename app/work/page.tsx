"use client";
import Navbar from "@/components/ui/front/Navbar";
import Separator from "@/components/ui/Separator";
import React, { useState } from "react";
import { skills } from "@/components/ui/data/skills";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HoverTooltip from "@/components/ui/HoverTooltip";
import { motion, AnimatePresence } from "framer-motion";
import ecomImg from "@/public/shutter-speed-BQ9usyzHx_w-unsplash.jpg";
import Link from "next/link";
import ResourceButton from "@/components/ui/ShapeButton";
import Footer from "@/components/ui/front/Footer";
import playAudio from "../lib/playAudio";

const Work = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [text, setText] = useState("Expand")

  function handleShow(index: any) {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    setText((prev) => prev = "collapse")
  }

  

  return (
    <div>
      <Navbar />
      <div className="heading flex md:flex-row gap-2 md:gap-0 flex-col-reverse my-4 md:my-6 p-2 mx-1 md:mx-6 justify-between mb-14 mt-8">
        <div className="flex justify-end md:justify-start text-[14px] text-neon mt-2 md:w-[30%]">
          <p className="w-[85%] text-[#cccfca] leading-4.5">
            Helping bold, innovative brands succeed through strategic,
            full-stack development — whether building solo or alongside a team.
          </p>
        </div>
        <div className="flex flex-col items-end md:item-center font-bebas-serif tracking-wider text-gray-300/80 text-neon">
          <div className="text-6xl md:text-8xl">SELECTED WORKS (2)</div>
          <div className="text-6xl md:text-8xl">2023-2025</div>
        </div>
      </div>
      <Separator />
      <div className="skills flex flex-col flex-1 mx-2 md:mx-6 my-4 md:my-0 p-1 md:p-0">
        {skills &&
          skills.map((skill, index) => (
            <HoverTooltip text={text} key={index}>
              <div className="" key={index}>
                <div
                  className="flex flex-row justify-between items-center"
                  onClick={() => handleShow(index)}
                >
                  <div className="flex flex-row gap-4 md:gap-8 my-7 w-max">
                    <h2 className="text-2xl md:text-6xl font-source-serif text-neon ">
                      {skill.title}
                    </h2>
                    <div className="flex flex-col font-helvetica text-[10px] md:text-sm justify-center items-center text-neon text-[#cccfca]">
                      <p>{skill.level}</p>
                      <p>{skill.started}</p>
                    </div>
                  </div>
                  <Link href={skill.website} target="_blank">
                    <div
                      className="no-tooltip"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PrimaryButton btnText="Live Site" />
                    </div>
                  </Link>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                      <div
                        className={`flex gap-1 relative w-full overflow-hidden py-2 bg-black `}
                      >
                        {skill.images.map((item, idx) => (
                          <motion.div
                            className="min-w-[400px] h-80 flex justify-center items-center px-4"
                            style={{ backgroundImage: `url(${ecomImg.src})` }}
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                              duration: 10,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <img
                              key={idx}
                              src={item}
                              alt="project1 image"
                              className="h-60 w-[800px] object-contain"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Separator />
              </div>
            </HoverTooltip>
          ))}
      </div>

      <section className="collaboration">
        <div className="section-wrapper w-[80%] md:w-[50%] mt-36 md:mt-52  m-auto">
          <div className="buttons flex justify-center items-center gap-2">
            <ResourceButton value="Lets" className="py-4 text-5xl" />
            <ResourceButton value="Talk" className="py-4 text-5xl" />
          </div>
          <div className="text-center font-sans text-2xl md:text-[52px] text-neon mt-10 md:leading-15">
            <p className="">
              To talk collaborations or partnerships, send an email to
              <span
                className="relative inline-block group cursor-pointer"
                onMouseEnter={playAudio}
              >
                <span className="relative inline-block group text-neon">
                  <a
                    href={`mailto:nabinbudhathoki2004@gmail.com`}
                    className="hover:text-primary"
                  >
                    nabinbudhathoki2004@gmail.com
                  </a>
                </span>
                <span className="absolute left-0 -bottom-[1px] h-[1px] w-full origin-right scale-x-0 bg-white/80 transition-transform ease-in duration-330 group-hover:scale-x-100 group-hover:origin-left"></span>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
