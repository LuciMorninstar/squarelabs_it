import WhatWeDoHero from '@/components/WhatWeDoHero'
import WhatWeDoHero2 from '@/components/WhatWeDoHero2'
import { whatWeDoPageData } from '@/constants/whatWeDoPage/whatWeDoPageData'
import WhatWeDoCards from '@/components/WhatWeDoCards'
import OurApproach from '@/components/OurApproach'
import Collaborate from '@/components/Collborate'

const page = () => {
  return (
    <>
    <WhatWeDoHero/>
    <WhatWeDoHero2/>
       <div className = "flex flex-col gap-3 ">
    {
      whatWeDoPageData.map((item)=>(
        <WhatWeDoCards key={item?.id} item={item} bgColor={item.id % 2 === 0 ? "#FFFFFF" : "#F6F8F6"}/>
      ))

    }
    <OurApproach/>
    <Collaborate/>
   </div>
    </>
  )
}

export default page