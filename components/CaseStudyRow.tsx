import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface Tag {
  label: string;
  variant?: "primary" | string;
}

interface CaseStudy {
  image: string;
  tags: Tag[];
  title: string;
  description: string;
  caseStudyUrl: string;
}

interface CaseStudyRowProps {
  study: CaseStudy;
  reverse?: boolean;
}

const CaseStudyRow = ({ study, reverse }: CaseStudyRowProps) => {
  return (
    <div
      className={`w-full px-4 lg:px-6 flex flex-col  items-center justify-center md:flex-row  ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 md:gap-12 lg:gap-16 xl:gap-20`}
    >
      {/* left side  - image */}
      <div className="w-full lg:w-1/2  ">
        <div className="relative h-60 sm:h-80 lg:h-100 w-full rounded-4xl overflow-hidden">
          <Image
            src={study?.image}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
            alt="case_study_image"
          />
        </div>
      </div>
      {/* /left side */}
      {/* right side - content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-4 lg:gap-6">
        {/* for tags */}
        <div className={`flex flex-row gap-2 lg:gap-4  `}>
          {study?.tags?.map((tag, i) => (
            <span
              key={i}
              className={` px-3 py-2 lg:px-5 lg:py-3 rounded-4xl border lg:border-[2px] border-gray-400 font-outfit ${
                tag.variant === "primary"
                  ? "border-primary-color text-primary-color"
                  : "text-text-sixth-color border-text-sixth-color"
              }`}
            >
              {tag?.label}
            </span>
          ))}
        </div>
        {/* /for tags */}
        {/* heading and desc */}
        <h3 className="text-text-quarternary-color font-semibold font-sora">
          {study?.title?.split(" ").slice(0, 2).join(" ")}
          <br className="hidden lg:block" />{" "}
          {study?.title?.split(" ").slice(2).join(" ")}
        </h3>
        <p className="text-text-secondary-color text-sm  lg:text-base xl:text-lg font-outfit line-clamp-4">
          {study?.description}
        </p>
        {/* /heading and desc */}
        {/* button */}
        <Link
          href={study?.caseStudyUrl}
          className="group relative inline-flex items-center gap-2  font-outfit  text-base lg:text-xl  text-primary-color "
        >
          <span>View Case Study</span>
          <IoArrowForward className="text-xl sm:text-2xl group-hover:translate-x-2 duration-200 transition-transform ease-in-out" />
        </Link>
        {/* /button */}
      </div>
      {/* /right side */}
    </div>
  );
};

export default CaseStudyRow;