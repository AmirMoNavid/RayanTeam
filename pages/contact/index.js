//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//varients
import { fadeIn } from "../../helpers/variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-11 md:p-0"
          >
            بیا <span className="text-accent">همکاری</span> کنیم.
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1  flex flex-col gap-4 md:gap-6 w-full mx-auto "
          >
            {/* input group  */}
            <div className="flex gap-x-6 w-full mx-auto">
              <input type="text" placeholder="نام" className="input pr-2" />
              <input type="text" placeholder="ایمیل" className="input pr-2" />
            </div>
            <input type="text" placeholder="موضوع" className="input pr-2" />
            <textarea
              placeholder="متن"
              className="textarea h-24 md:h-max"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                ارسال
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex  group-hover:-translate-y-0  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
