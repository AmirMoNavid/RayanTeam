//next image
import Image from "next/image";

//next Link
import Link from "next/link";

// icons

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-50 hover:scale-110 transition backdrop-blur-sm">
      <Link
        href={"/work"}
        className="relative w-[155px]  h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <button>مشاهده نمونه کار ها</button>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
