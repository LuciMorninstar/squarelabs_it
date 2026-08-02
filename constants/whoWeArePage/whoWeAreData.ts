
export interface TimelineItem {
  id: number;
  date: number;
  title: string;
  desc: string;
}

export interface CoreValue {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export interface CoreValuesSection {
  title: string;
  desc: string;
  values: CoreValue[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  profilePic: string;
  desc: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    date: 2020,
    title: "Founded",
    desc: "Square Labs established with a core team of three engineers focusing on bespoke enterprise software",
  },
  {
    id: 2,
    date: 2022,
    title: "Expanded Digital Services",
    desc: "Shifted towards a full-service model including UI/UX design, branding, and mobile application development.",
  },
  {
    id: 3,
    date: 2024,
    title: "Global Client Base",
    desc: "Reached our 100th project milestone, serving clients across North America, Europe, and Asia.",
  },
  {
    id: 4,
    date: 2026,
    title: "Global Client Base",
    desc: "Reached our 100th project milestone, serving clients across North America, Europe, and Asia.",
  },
];

export const coreValues: CoreValuesSection[] = [
  {
    title: "Our Core Values",
    desc: "Our values shape every decision we make, from understanding user needs to delivering scalable digital solutions. We believe great products are built through collaboration, innovation, and a commitment to creating meaningful impact for our clients.",

    values: [
      {
        id: 1,
        icon: "/svg/whoWeArePage/innovation.svg",
        title: "Innovation at Core",
        desc: "We push the boundaries of technology to create solutions that set new industry standards. Our innovative approach combines cutting-edge technologies with practical business applications.",
      },
      {
        id: 2,
        icon: "/svg/whoWeArePage/client-centric.svg",
        title: "Client-Centric Focus",
        desc: "Your success is our priority. We work closely with each client to understand their unique challenges and deliver tailored solutions that exceed expectations.",
      },
      {
        id: 3,
        icon: "/svg/whoWeArePage/technical.svg",
        title: "Technical Excellence",
        desc: "Our team of expert developers and designers brings years of experience in creating robust, scalable, and user-friendly software solutions across various industries.",
      },
      {
        id: 4,
        icon: "/svg/whoWeArePage/future.svg",
        title: "Future-Ready Solutions",
        desc: "We don't just solve today's problems – we anticipate tomorrow's challenges. Our solutions are built with scalability and future technological advancements in mind.",
      },
    ],
  },
];

export const meetTheTeam: TeamMember[] = [
  {
    id: 1,
    name: "James Rai",
    position: "Chief Executive Officer",
    profilePic: "/images/whoWeArePage/pic1.jpg",
    desc: "James leads the organization's vision and strategic growth, ensuring every initiative aligns with the company's mission while fostering innovation, collaboration, and long-term success. He works closely with leadership teams to identify new opportunities, inspire company-wide excellence, and build a culture focused on sustainable growth and customer satisfaction.",
  },
  {
    id: 2,
    name: "Sophia Carter",
    position: "Chief Operating Officer",
    profilePic:"/images/whoWeArePage/pic2.jpg",
    desc: "Sophia oversees daily operations, streamlining workflows and improving efficiency to ensure projects are delivered on time while maintaining exceptional quality standards. She coordinates cross-functional teams, optimizes internal processes, and ensures operational excellence across every department.",
  },
  {
    id: 3,
    name: "Daniel Kim",
    position: "Chief Technology Officer",
    profilePic: "/images/whoWeArePage/pic3.jpg",
    desc: "Daniel drives the company's technical vision, leading development teams and implementing modern technologies that create reliable, scalable, and secure digital solutions. He mentors engineers, evaluates emerging technologies, and ensures every product is built with innovation, performance, and security in mind.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Creative Director",
    profilePic: "/images/whoWeArePage/pic4.jpg",
    desc: "Emily transforms ideas into compelling visual experiences, guiding branding, design, and creative storytelling to deliver engaging and impactful user experiences. She collaborates with designers and marketers to create consistent brand identities that resonate with audiences across all platforms.",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "Project Manager",
    profilePic:"/images/whoWeArePage/pic5.jpg",
    desc: "Michael coordinates teams, manages project timelines, and ensures seamless communication between stakeholders to successfully deliver every milestone. His strong organizational skills help keep projects on schedule while maintaining transparency, quality, and client satisfaction throughout the development process.",
  },
  {
    id: 6,
    name: "Olivia Wilson",
    position: "Marketing Manager",
    profilePic: "/images/whoWeArePage/pic1.jpg",
    desc: "Olivia develops marketing strategies that strengthen brand awareness, connect with audiences, and drive sustainable business growth across multiple channels. She analyzes market trends, creates impactful campaigns, and works closely with creative teams to maximize engagement and measurable results.",
  },
  {
    id: 7,
    name: "Ethan Davis",
    position: "Senior Software Engineer",
    profilePic: "/images/whoWeArePage/pic2.jpg",
    desc: "Ethan specializes in building high-performance web applications, focusing on clean architecture, optimized performance, and delivering exceptional user experiences. He is passionate about writing maintainable code, solving complex technical challenges, and continuously improving product reliability.",
  },
  {
    id: 8,
    name: "Ava Martinez",
    position: "Customer Success Manager",
    profilePic: "/images/whoWeArePage/pic3.jpg",
    desc: "Ava works closely with clients to understand their needs, provide ongoing support, and ensure they achieve maximum value from the company's services. She builds long-term relationships, resolves challenges proactively, and helps customers reach their goals through personalized guidance and exceptional service.",
  },
];