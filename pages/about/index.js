// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiRedux,
  SiMongodb,
  SiMui,
} from "react-icons/si";

import { useState } from "react";

//  data
const aboutData = [
  {
    title: "ابزار های مورد استفاده",
    info: [
      {
        title: "توسعه وبسایت",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTypescript />,
          <SiTailwindcss />,
          <SiNodedotjs />,
          <SiRedux />,
          <SiMongodb />,
          <SiMui />,
          <SiGithub />,
          <SiGit />,
        ],
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//Count up
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-right">
      <Circles />
      {/* Avatar image */}
      <motion.dev
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-24   -right-[370px] z-30"
      >
        <Avatar />
      </motion.dev>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row md:pr-[6%] ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 about-h2 text-[1.8rem] mb-5 xl:pt-11  md:pl-8"
          >
            <span className="text-accent">داستان های</span> جذاب ، طرح های
            باشکوه ایجاد میکنند.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0  text-sm md:text-md text-white/75 py-[8px] font-semibold"
          >
            <div className="md:pl-9">
              ما از همان ابتدا هدفمان ساخت وبسایت‌هایی بود که فقط زیبا نباشند،
              بلکه به رشد واقعی کسب‌وکارها کمک کنند. امروز با تجربه‌ی طراحی
              ده‌ها وبسایت شخصی، فروشگاهی و خبری، رایان به عنوان همراهی قابل
              اعتماد در مسیر دیجیتال شناخته می‌شود.
            </div>
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 text-center"
          >
            <div className="flex flex-1 xl:gap-x-6 md:pl-8">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={-1} end={5} duration={8} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  سابقه
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  کارفرمای راضی
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={65} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  پروژه های تحویل داده شده
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  اعضای تیم
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full xl:max-w-[50%] h-[480px] md:pt-16"
        >
          <div className="flex justify-center gap-x-4 xl:gap-x-8 mx-auto  xl:mx-0 mb-5 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` 
                    text-white after:w-[100%] after:transition-all after:duration-300 after:bg-red-700
                   cursor-pointer capitalize xl:text-lg relative after:h-[2px]  after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="px-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start xl:pl-24 xl:text-nowrap">
            {aboutData[0].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  {/* title */}
                  <div className="font-light text-center mb-1 md:mb-0">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
