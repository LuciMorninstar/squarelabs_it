import Image from 'next/image';
import CardDots from '../assets/testimonial/CardDots.svg';
import type { Testimonial } from "../constants/homepage/testimonial"

interface TestimonialCardProps {
  item: Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ item, isActive }: TestimonialCardProps) => {
  if (!item) return null;

  return (
    <div
      className={`bg-default-color rounded-2xl overflow-hidden h-full shadow-[0_0_30px_rgba(0,0,0,0.5)] border transition-all duration-500
        border-white/10 
        ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95 pointer-events-none'}
      `}
    >
      {/* mobile layout */}
      <div className="flex sm:hidden flex-col gap-4 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 relative">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="64px"
              className="gsapImage object-cover"
            />
          </div>
          <div>
            <span className="gsapName text-base font-bold font-sora text-black">{item.name}</span>
            <p className="gsapPosition text-xs font-sora text-gray-500">
              {item.position} - {item.company}
            </p>
          </div>
        </div>
        <p className="gsapQuote text-xs font-sora text-text-quarternary-color leading-6 line-clamp-7">
          &ldquo;{item.testimonial}&rdquo;
        </p>
      </div>

      {/* desktop layout */}
      <div className="hidden sm:flex flex-row h-full">
        <div className="flex flex-col justify-between flex-1 p-8 xl:p-16">
          <Image
            src={CardDots}
            alt=""
            className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0"
          />
          <p className="gsapQuote lg:pt-6 xl:pt-8 text-sm md:text-base lg:text-md xl:text-lg text-text-quarternary-color leading-7 my-4 flex-1 line-clamp-6">
            {item.testimonial}
          </p>
          <div className="flex flex-col gap-1 shrink-0">
            <span className="gsapName text-sm sm:text-base lg:text-lg text-black font-bold font-sora">
              {item.name}
            </span>
            <p className="gsapPosition text-xs sm:text-sm text-gray-500">
              {item.position} - {item.company}
            </p>
          </div>
        </div>
        <div className="flex-[0_0_38%] overflow-hidden rounded-r-2xl relative">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="38vw"
              className="gsapImage object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#2d2d4e] to-[#1a1a2e] flex items-center justify-center">
              <span className="text-7xl font-bold text-white/10">{item.name.charAt(0)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;