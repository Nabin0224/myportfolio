"use client";
import Link from "next/link";
import ResourceButton from "../components/ui/ShapeButton";
import { useEffect, useState } from "react";
import playAudio from "@/app/lib/playAudio";
import PrimaryButton from "@/components/ui/PrimaryButton";
const Home = () => {
  const [loadingValue, setLoadingValue] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);


  useEffect(() => {
    let fastInterval: NodeJS.Timeout | null = null;
    let mediumInterval: NodeJS.Timeout | null = null;
    let slowInterval: NodeJS.Timeout | null = null;
    let timeout1: NodeJS.Timeout | null = null;
    let timeout2: NodeJS.Timeout | null = null;

    const loadFast = () => {
      let current = 0;
      fastInterval = setInterval(() => {
        current += 1;
        setLoadingValue(current);
        if (current >= 40) {
          clearInterval(fastInterval!);
          timeout1 = setTimeout(loadMedium, 500);
        }
      }, 15);
    };
    const loadMedium = () => {
      let current = 40;
      mediumInterval = setInterval(() => {
        current += 1;
        setLoadingValue(current);
        if (current >= 79) {
          clearInterval(mediumInterval!);
          timeout2 = setTimeout(loadSlow, 800);
        }
      }, 40);
    };

    const loadSlow = () => {
      let current = 79;
      slowInterval = setInterval(() => {
        current += 1;
        setLoadingValue(current);
        if (current >= 100) {
          clearInterval(slowInterval!);
          setShowContent(true);
          return 100;
        }
      }, 80);
    };

    loadFast();
  }, []);

  return (
    <div>
      <div className="md:flex w-[60%] h-screen gap-4">
        <div className="name w-max text-4xl md:text-5xl p-4 font-source-serif heading-neon">
          Nabin Budhathoki
        </div>
        <div className="loading flex-col w-max p-4 h-[30%]">
          <div className="h-[50%] font-helvetica text-[15px] text-muted text-neon">
            <div className="flex flex-col gap-5">
              <div>
                <div className="">Full Stack Developer 2023-2025</div>
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="relative flex gap-2">
                <span>Loading...</span>
                <div className="relative">
                  <span className="absolute top-0.5">
                    <ResourceButton value={loadingValue} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` transition-all duration-700 ${
              showContent
                ? "opacity-100 traslate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="separator h-[0.3px] bg-gray-700 my-2"></div>
            <div className="access flex flex-col gap-5">
              <div className="h-[50%] font-helvetica text-[15px] text-muted text-neon ">
                You have been granted access. <br /> The site uses cookies for
                analytics.
              </div>
              <Link href={"/lobby"}>
              <PrimaryButton btnText="Enter"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
