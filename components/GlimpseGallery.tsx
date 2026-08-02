import Image from "next/image";

const GlimpseGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-xl mx-auto p-2 rounded-3xl">
      {/* Top left */}
      <div className="group relative rounded-2xl overflow-hidden aspect-square">
        <Image
          src="/images/whoWeArePage/first.jpg"
          alt="Working in office"
          fill
          sizes="(min-width: 768px) 288px, 50vw"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      {/* Top right */}
      <div className="group relative rounded-2xl overflow-hidden aspect-square">
        <Image
          src="/images/whoWeArePage/second.jpg"
          alt="Team collaborating"
          fill
          sizes="(min-width: 768px) 288px, 50vw"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
      {/* Bottom - spans both columns */}
      <div className="group relative col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
        <Image
          src="/images/whoWeArePage/third.jpg"
          alt="Team walking together"
          fill
          sizes="(min-width: 768px) 576px, 100vw"
          className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default GlimpseGallery;