


 interface FooterLink {
    name:string;
    url:string;
 }

 interface FooterLinkGroup{
    title:string;
    links:FooterLink[]
 }

 interface SocialLink{
    name:string;
    icon:string;
    href:string;
 }
 
 export const footerLinks : FooterLinkGroup[] = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Career", url: "/career" },
        { name: "Meet the Team", url: "/meet-the-team" },
        { name: "Partners", url: "/partners" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Digital Products", url: "/digital-products" },
        { name: "Growth & Branding", url: "/growth-and-branding" },
        { name: "Strategies", url: "/strategies" },
        { name: "Technology", url: "/technology" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs & Insights", url: "/blogs-and-insights" },
        { name: "Case Studies", url: "/case-studies" },
        { name: "Tutorials", url: "/tutorials" },
        { name: "Academy", url: "/academy" },
      ],
    },
    {
      title: "General",
      links: [
        { name: "Home", url: "/" },
        { name: "What We Do", url: "/what-we-do" },
        { name: "Who We Are", url: "/who-we-are" },
        { name: "Our Works", url: "/our-work" },
      ],
    },
  ];

export const socialLinks : SocialLink[] = [
    { name: "facebook", icon:"/svg/footer/facebook.svg", href: "/facebook" },
    { name: "insta", icon:"/svg/footer/insta.svg", href: "/insta" },
    { name: "x", icon:"/svg/footer/x.svg", href: "/x" },
    { name: "linkedIn", icon:"/svg/footer/linkedIn.svg", href: "/linkedIn" },
  ];