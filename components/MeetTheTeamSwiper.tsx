import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import MeetTheTeamCard from "./MeetTheTeamCard"

interface TeamMember {
  id: string | number;
  profilePic: string;
  name: string;
  position: string;
  desc: string;
}

interface MeetTheTeamSwiperProps {
  team: TeamMember[];
}

const MeetTheTeamSwiper = ({ team }: MeetTheTeamSwiperProps) => {
  return (
    <div className="team-swiper-wrapper w-full flex justify-center">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="team-swiper"
      >
        {team.map((member) => (
          <SwiperSlide key={member.id} className="team-swiper-slide">
            <MeetTheTeamCard team={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetTheTeamSwiper;