// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.jpg",
    name: "رضا احمدی",
    position: "صاحب فروشگاه اینترنتی",
    message:
      "تیم رایان با دقت و حوصله وبسایت فروشگاهی ما رو طراحی کرد. سرعت بالا و ظاهر کاربرپسند سایت باعث شد فروش ما خیلی بیشتر بشه.",
  },
  {
    image: "/t-avt-2.jpg",
    name: "صالح خدایاری",
    position: "مدیر سایت خبری",
    message:
      "تیم رایان سایت خبری ما رو با طراحی مدرن و امکانات حرفه‌ای راه‌اندازی کرد. پشتیبانی عالی هم دارن و هر وقت مشکلی بود سریع حل شد.",
  },
  {
    image: "/t-avt-3.jpg",
    name: "سارا یزدان‌پور",
    position: "مربی یوگا",
    message:
      "برای استودیو یوگا یک وبسایت اختصاصی نیاز داشتم. تیم رایان با خلاقیت و دقت بالا سایتی طراحی کرد که خیلی از مشتریام تعریف می‌کنن.",
  },
];

//next image
import Image from "next/image";

// data

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import required moduls
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" flex  flex-col items-center md:flex-row gap-x-8 h-[80%] md:h-full px-16 cursor-pointer pt-5">
              {/* avatar,name,position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 ">
                <div>
                  {/* avatar */}
                  <div className="mb-2 mx-auto flex justify-center ">
                    <Image
                      style={{
                        clipPath: "circle()",
                      }}
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20  xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
                {/* quote icon */}
                <div className="mb-4 ">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-right mb-4">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
