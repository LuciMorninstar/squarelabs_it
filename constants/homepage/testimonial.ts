

export interface Testimonial {
  id: number;
  image:string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/home/image1.jpg",
    name: 'Sarah Johnson',
    position: 'Senior Product Designer',
    company: 'PixelForge',
    testimonial:
      'Collaborating with this team was one of the best decisions we made for our product. They took the time to understand our goals, offered valuable suggestions throughout the process, and consistently delivered high-quality work.',
  },
  {
    id: 2,
    image:"/images/home/puran.jpg",
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    company: 'NovaTech Solutions',
    testimonial:
      'The level of professionalism and technical expertise they brought to our project was outstanding. Every milestone was delivered on time, communication was always clear, and they were quick to adapt whenever our requirements changed.',
  },
  {
    id: 3,
    image: "/images/home/image1.jpg",
    name: 'Emily Carter',
    position: 'Marketing Manager',
    company: 'BrightEdge Media',
    testimonial:
      "From the initial planning phase to the final delivery, the entire process felt effortless. Their creative approach, problem-solving skills, and willingness to go the extra mile helped us achieve results we hadn't thought possible.",
  },
  {
    id: 4,
    image: "/images/home/puran.jpg",
    name: 'David Wilson',
    position: 'Founder & CEO',
    company: 'LaunchSphere',
    testimonial:
      'Finding a team that combines creativity, technical expertise, and excellent communication is rare, but they delivered on all three. The end result was polished, reliable, and has already made a positive impact on our business.',
  },
];