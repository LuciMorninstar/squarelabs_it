"use client";



interface WhatWeDoItem {
  id: number;
  title: string;
}


const WhatWeDoHero2 = () => {
  const whatWeDoItems: WhatWeDoItem[] = [
    { id: 1, title: "Digital Products" },
    { id: 2, title: "Growth Solutions" },
    { id: 3, title: "Technology" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full px-2 pt-5 md:pt-5 lg:px-6 lg:py-3 mx-auto min-h-[300vh] -mb-[290vh]">
      <div className="sticky top-5 flex flex-row max-sm:justify-between bg-tertiary-color/95 px-4 py-5 lg:px-12 lg:py-6 rounded-3xl lg:rounded-3xl gap-2 lg:gap-8">
        {whatWeDoItems.map((item) => (
          <span
            key={item.id}
            onClick={() => handleScroll(String(item.id))}
            className="flex lg:flex-row gap-2 lg:gap-3 items-center text-base lg:text-lg hover:cursor-pointer"
          >
            <p className="top-bottom-gradient text-transparent bg-clip-text font-semibold">
              0{item.id}
            </p>
            <p className="text-default-color">
              <span className="lg:hidden">{item.title.split(" ")[0]}</span>
              <span className="hidden lg:inline">{item.title}</span>
            </p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoHero2;