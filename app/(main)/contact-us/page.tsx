"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoCheckmarkCircleOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// TODO: replace with your Apps Script /exec URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyAZd4NbNCjbweMGoLD2ou7JhMSfUlHzQ9NXsaIawYd-Pzz7lE4nrP245x8Ls2KnIOj/exec";

const ContactPage = () => {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);

  const infoCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const whyChooseHeadingRef = useRef<HTMLHeadingElement>(null);
  const whyChooseParaRef = useRef<HTMLParagraphElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const emergencyRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Map section uses plain IntersectionObserver instead of GSAP
  const mapSectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted", formData);
    if (formData.honeypot) return; // bot caught, silently drop

    setStatus("sending");
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });
      setStatus("sent");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  const benefits = [
    {
      icon: (
        <IoTimeOutline className="w-8 h-8 lg:w-10 lg:h-10 text-primaryColor" />
      ),
      title: "24/7 Support",
      description:
        "Round-the-clock technical assistance for your business needs",
    },
    {
      icon: (
        <IoCheckmarkCircleOutline className="w-8 h-8 lg:w-10 lg:h-10 text-primaryColor" />
      ),
      title: "Guaranteed Response",
      description: "We ensure response within 24 hours of your inquiry",
    },
    {
      icon: (
        <IoChatbubbleEllipsesOutline className="w-8 h-8 lg:w-10 lg:h-10 text-primaryColor" />
      ),
      title: "Expert Consultation",
      description: "Get expert advice from our seasoned professionals",
    },
  ];

  // Hero: animates on mount
  useEffect(() => {
    if (heroHeadingRef.current) {
      gsap.fromTo(
        heroHeadingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }
    if (heroParaRef.current) {
      gsap.fromTo(
        heroParaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );
    }
  }, []);

  // Upper page scroll-triggered sections: GSAP + ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      infoCardRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      if (whyChooseHeadingRef.current) {
        gsap.fromTo(
          whyChooseHeadingRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whyChooseHeadingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (whyChooseParaRef.current) {
        gsap.fromTo(
          whyChooseParaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: whyChooseParaRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      benefitRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      if (emergencyRef.current) {
        gsap.fromTo(
          emergencyRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: emergencyRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Map section: plain IntersectionObserver, toggling Tailwind classes
  useEffect(() => {
    const els =
      mapSectionRef.current?.querySelectorAll<HTMLElement>("[data-animate]");
    if (!els?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-default-color">
      {/* Hero Section */}
      <section className="relative h-[60vh] z-10">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/images/contactUsPage/contact.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-start px-4 max-w-screen-xl mx-auto">
          <div className="max-w-2xl">
            <h1
              ref={heroHeadingRef}
              className="text-6xl text-default-color mb-4"
            >
              Let&apos;s Build Something Amazing Together
            </h1>
            <p ref={heroParaRef} className="text-lg text-gray-200">
              Transform your ideas into reality with our cutting-edge
              technology solutions. We&apos;re here to help you succeed in
              the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12 relative -mt-20 z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div
            ref={(el) => {
              infoCardRefs.current[0] = el;
            }}
            className="bg-white border border-primary-color rounded-xl py-4 px-6 shadow-md duration-300 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="text-primary-color uppercase text-sm font-bold tracking-wider mb-4">
              Contact Details
            </div>
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-300 ease-in-out">
                <IoCallOutline className="text-primaryColor w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+9779709089680"
                  className="block text-gray-800 font-medium text-sm lg:text-base hover:text-primaryColor transition underline"
                >
                  +977 9709089680
                </a>
                <a
                  href="tel:+9779709089690"
                  className="block text-gray-800 font-medium text-sm lg:text-base hover:text-primaryColor transition underline"
                >
                  +977 9709089690
                </a>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div
            ref={(el) => {
              infoCardRefs.current[1] = el;
            }}
            className="bg-white border border-primary-color rounded-xl shadow-lg py-4 px-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-primary-color uppercase text-sm font-bold tracking-wide mb-4">
              Office Location
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-300 ease-in-out">
                <IoLocationOutline className="text-primaryColor w-5 h-5 lg:w-6 lg:h-6" />
              </div>

              <Link
                href="https://maps.app.goo.gl/dE2RPWtr86XhBLWq9"
                className="text-gray-800 font-medium text-sm lg:text-base leading-relaxed"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tinkune, Kathmandu 44600
                <br />
                Bagmati Province, Nepal
              </Link>
            </div>
          </div>

          {/* Support Card */}
          <div
            ref={(el) => {
              infoCardRefs.current[2] = el;
            }}
            className="bg-white border border-primary-color rounded-xl shadow-lg py-4 px-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-primary-color uppercase text-sm font-bold tracking-wide mb-4">
              Need Assistance?
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-full bg-green-100 hover:bg-green-200 transition-all duration-300 ease-in-out">
                <IoMailOutline className="text-primaryColor w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-gray-800 font-medium mb-2 text-sm lg:text-base">
                  Check out our Help Center for support.
                </p>
                <a
                  href="mailto:support@squarelabs.com.np"
                  className="text-secondary-color font-semibold hover:underline"
                >
                  support@squarelabs.com.np
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Side Content */}
      <section className="max-w-7xl mx-auto px-4 py-10 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2
                ref={whyChooseHeadingRef}
                className="relative text-lg lg:text-3xl text-start tracking-wide font-semibold text-secondaryColor group w-fit mb-4"
              >
                <span className="relative z-10 font-bold top-bottom-gradient">
                  WHY CHOOSE <span className="top-bottom-gradient">US?</span>
                </span>
                <span className="absolute inset-0 bg-primaryColor scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 z-0" />
              </h2>
              <p
                ref={whyChooseParaRef}
                className="text-text-secondary-color mb-8"
              >
                With years of experience in delivering cutting-edge software
                solutions, we&apos;re committed to helping businesses achieve
                digital excellence.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    benefitRefs.current[index] = el;
                  }}
                  className="flex gap-4 p-6 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 text-primary-color font-bold">
                    {benefit.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-quarternary-color mb-1">
                      {benefit.title}
                    </h5>
                    <p className="text-text-secondary-color text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Support */}
            <div
              ref={emergencyRef}
              className="bg-primary-color p-6 rounded-xl text-default-color"
            >
              <h3 className="text-xl font-semibold mb-2">
                Emergency Support
              </h3>
              <p className="mb-4">
                Need urgent assistance? Our emergency team is available 24/7.
              </p>
              <div className="flex items-center gap-2">
                <IoCallOutline className="w-5 h-5" />
                <span className="font-semibold">
                  <a href="tel:+9779709089680">+977 9709089680</a> TECH HELP
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            ref={formRef}
            className="bg-white p-6 lg:p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-bold text-primaryColor mb-2 top-bottom-gradient">
              SHARE YOUR IDEA
            </h2>
            <p className="text-base text-text-secondary-color mb-6">
              Feel free to contact with us, we don&apos;t spam your email
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-quarternary-color mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondaryColor focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-quarternary-color mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondaryColor focus:outline-none transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-quarternary-color mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondaryColor focus:outline-none transition-colors duration-300"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-quarternary-color mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={8}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondaryColor focus:outline-none transition-colors duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Honeypot field: invisible to real users, catches bots */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3 bg-primary-color text-white rounded-lg font-medium hover:bg-primary-color/80 cursor-pointer transition-colors duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-sm">
                  Thanks! We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section: IntersectionObserver, no GSAP */}
      <section ref={mapSectionRef} className="max-w-7xl mx-auto px-4 py-12">
        <h1
          data-animate
          className="relative text-lg lg:text-3xl tracking-wide font-semibold text-secondaryColor group w-fit mb-4 opacity-0 translate-y-4 transition-all duration-500 ease-out"
        >
          <span className="relative z-10 top-bottom-gradient">
            VISIT OUR OFFICE
          </span>
          <span className="absolute inset-0 bg-primaryColor scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 z-0" />
        </h1>
        <div
          data-animate
          className="overflow-hidden rounded-xl shadow-xl opacity-0 translate-y-4 transition-all duration-500 ease-out delay-150"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d441.57189827259486!2d85.32883595089147!3d27.699521847501437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195e9c0ab6b7%3A0x7062231bcc78a60a!2sSquare%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1736239098070!5m2!1sen!2snp"
            width="100%"
            height="450"
            className="border-0 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Square Labs Location"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;