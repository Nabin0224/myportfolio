"use client";
import Footer from "@/components/ui/front/Footer";
import Hero from "@/components/ui/front/Hero";
import Navbar from "@/components/ui/front/Navbar";
import { motion } from "framer-motion";
import React from "react";

const FrontPage = () => {
  return (
    <div className="frontend overflow-hidden h-[100vdh] md:h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default FrontPage;
