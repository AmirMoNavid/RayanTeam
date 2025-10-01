// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "خانه", path: "/", icon: <HiHome /> },
  { name: "درباره ما", path: "/about", icon: <HiUser /> },
  { name: "خدمات", path: "/services", icon: <HiRectangleGroup /> },
  { name: "نمونه کار ها", path: "/work", icon: <HiViewColumns /> },
  {
    name: "نظرات",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "ارتباط با ما",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
//next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className="flex flex-col items-center  xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-43 xl:px-0 h-[80px]  xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathName && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            <div className="absolute pl-14 left-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold text-nowrap">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
