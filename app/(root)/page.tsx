"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Trophy, ChevronRight, ChevronDown, BookOpen, Star, Medal, Clock, GraduationCap, Check, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

// Enhanced Hero Slideshow Component with parallax effect
const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/slideshow/mgidlaslide1.png",
      title: "Excellence in Education",
      subtitle: "Nurturing bright minds for a brighter future",
      cta: "Learn about our programs",
    },
    {
      image: "/slideshow/mgidlaslide0.png",
      title: "Engaging Learning Environment",
      subtitle: "Where curiosity leads to discovery",
      cta: "Meet our educators",
    },
    {
      image: "/slideshow/mgidlaslide3.png",
      title: "Holistic Development",
      subtitle: "Excelling in academics, sports, and culture",
      cta: "Explore our facilities",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[650px] md:h-[700px] w-full overflow-hidden">
      {/* Subtle animated gradient overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
      
      {/* Dynamic shape decorations */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl z-10"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              style={{ transform: "scale(1.05)" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content overlay with enhanced animations */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <motion.div
              key={`heading-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-3">
                <span className="bg-blue-600/90 text-white text-sm uppercase tracking-wider font-medium px-3 py-1 rounded-md">
                  Shaping Tomorrow's Leaders
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50">{slides[currentSlide].subtitle}</p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-md transition-all shadow-lg flex items-center justify-center"
              >
                {slides[currentSlide].cta} <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/40 text-white rounded-md hover:bg-white/20 transition-all flex items-center justify-center group"
              >
                Contact Us <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
            
            {/* Quick facts badges */}
            <div className="hidden md:flex space-x-4 mt-10">
              {[
                { text: "Established 1980", icon: <Calendar className="h-4 w-4" /> },
                { text: "400+ Students", icon: <Users className="h-4 w-4" /> },
                { text: "90% Matric Pass Rate", icon: <GraduationCap className="h-4 w-4" /> }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm"
                >
                  {badge.icon}
                  <span className="ml-2 text-blue-50">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 px-2 py-1 focus:outline-none`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`block h-1.5 ${
              currentSlide === index 
                ? "w-8 bg-white" 
                : "w-5 bg-white/50 hover:bg-white/70"
              } rounded-full transition-all duration-300`}>
            </span>
          </button>
        ))}
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-white/80 hover:text-white flex flex-col items-center transition-colors">
          <span className="text-xs mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </motion.div>
    </div>
  );
};

// Enhanced animated section header with underline effect
const SectionHeader = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`inline-block px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider mb-4 ${
        light 
          ? "bg-blue-100/20 text-blue-100" 
          : "bg-blue-100 text-blue-800"
      }`}
    >
      {title}
    </motion.span>
    <div className="inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-4xl md:text-5xl font-bold ${
          light ? "text-white" : "text-blue-900"
        } mb-3 tracking-tight relative inline-block`}
      >
        {title}
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`absolute bottom-0 left-0 h-1 ${
            light ? "bg-blue-400" : "bg-blue-500"
          } rounded-full`}
        />
      </motion.h2>
    </div>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`text-xl ${
          light ? "text-blue-100" : "text-gray-600"
        } max-w-3xl mx-auto mt-6`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// Enhanced animated feature card with improved hover effect
const FeatureCard = ({ 
  icon, 
  title, 
  description,
  index = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -12, boxShadow: "0 25px 30px -10px rgba(0, 0, 0, 0.1), 0 15px 15px -10px rgba(0, 0, 0, 0.04)" }}
    className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:border-blue-600 transition-all group"
  >
    <div className="text-blue-600 mb-5 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{title}</h3>
    <p className="text-gray-600">{description}</p>
    
    {/* Animated arrow that appears on hover */}
    <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-300">
      <span>Learn more</span>
      <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
    </div>
  </motion.div>
);

// Enhanced testimonial card with improved hover effect
const TestimonialCard = ({ 
  quote, 
  author, 
  role,
  image = "",
  index = 0 
}: { 
  quote: string; 
  author: string; 
  role?: string;
  image?: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    whileHover={{ scale: 1.03, y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg relative group"
  >
    <div className="absolute -top-4 left-6 text-blue-500 text-6xl opacity-25 group-hover:opacity-40 transition-opacity">"</div>
    
    <blockquote className="text-gray-700 mb-6 relative z-10 pt-3 italic">{quote}</blockquote>
    
    <div className="border-t border-gray-100 pt-4 mt-4 flex items-center">
      {image && (
        <div className="mr-3 h-12 w-12 rounded-full overflow-hidden">
          <Image src={image} alt={author} width={48} height={48} className="object-cover" />
        </div>
      )}
      <div>
        <p className="text-blue-900 font-semibold">{author}</p>
        {role && <p className="text-gray-500 text-sm">{role}</p>}
      </div>
    </div>
    
    {/* Decorative accent */}
    <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-50 rounded-tl-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </motion.div>
);

// Enhanced News/Event Card
const EventCard = ({ 
  date, 
  event, 
  description, 
  icon,
  index = 0,
  link = "#"
}: { 
  date: string; 
  event: string; 
  description: string; 
  icon: React.ReactNode;
  index?: number;
  link?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.03, y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden group"
  >
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 flex justify-between items-center">
      <h3 className="text-xl font-bold">{event}</h3>
      <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
        {icon}
      </div>
    </div>
    
    <div className="p-6">
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center text-blue-800">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{date}</span>
        </div>
        
        <Link href={link} className="text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

// Enhanced Stats component with interactive animations
const StatsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl py-14 px-10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "90%", label: "Matric Pass Rate", icon: <Star className="h-10 w-10 mx-auto mb-2" /> },
          { value: "25+", label: "Qualified Teachers", icon: <Users className="h-10 w-10 mx-auto mb-2" /> },
          { value: "400+", label: "Students", icon: <BookOpen className="h-10 w-10 mx-auto mb-2" /> },
          { value: "15+", label: "Provincial Awards", icon: <Medal className="h-10 w-10 mx-auto mb-2" /> },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="px-4 py-5 rounded-lg relative cursor-pointer group"
          >
            <div className={`absolute inset-0 bg-blue-800/40 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
            
            <div className="relative z-10">
              <motion.div 
                animate={{ 
                  y: hovered === index ? -5 : 0,
                  color: hovered === index ? "#93c5fd" : "#ffffff" 
                }}
                transition={{ duration: 0.2 }}
                className="text-white mb-4"
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="text-4xl font-bold mb-1"
              >
                {stat.value}
              </motion.div>
              
              <p className="text-blue-100">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// New component for quick links/highlights
const QuickLinksSection = () => (
  <div className="bg-white shadow-xl rounded-xl overflow-hidden">
    <div className="grid md:grid-cols-3">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-12 top-0 w-48 h-48 bg-blue-400/50 rounded-full"></div>
          <div className="absolute -left-12 bottom-0 w-32 h-32 bg-blue-300/50 rounded-full"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <p className="text-blue-100 mb-6">Fast access to important information about our school</p>
          <Link href="/about" className="inline-flex items-center text-sm font-medium text-blue-100 hover:text-white group">
            About our school
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            title: "Admissions",
            description: "Now open for 2026",
            icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
            link: "/admissions",
          },
          {
            title: "Student Portal",
            description: "Resources & materials",
            icon: <BookOpen className="h-6 w-6 text-blue-600" />,
            link: "/myhub",
          },
          {
            title: "Academic Calendar",
            description: "Important dates",
            icon: <Calendar className="h-6 w-6 text-blue-600" />,
            link: "/calendar",
          },
          {
            title: "Our Team",
            description: "Meet our educators",
            icon: <Users className="h-6 w-6 text-blue-600" />,
            link: "/ourteam",
          },
          {
            title: "School Achievements",
            description: "Our pride and success",
            icon: <Trophy className="h-6 w-6 text-blue-600" />,
            link: "/achievements",
          },
          {
            title: "Contact Us",
            description: "Get in touch",
            icon: <Phone className="h-6 w-6 text-blue-600" />,
            link: "/contact",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ backgroundColor: "#f5f9ff" }}
            className="p-6 flex flex-col h-full border-b sm:border-r border-gray-100 relative group"
          >
            <div className="p-2 bg-blue-50 rounded-lg w-fit mb-4">{item.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.description}</p>
            <Link 
              href={item.link}
              className="text-blue-600 text-sm font-medium flex items-center mt-auto"
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// New Contact Info Section
const QuickContactInfo = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="flex items-start">
      <div className="p-3 bg-blue-50 rounded-xl mr-5">
        <MapPin className="h-7 w-7 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Our Address</h3>
        <p className="text-gray-600">Mhlungwane Area, Vryheid</p>
        <p className="text-gray-600">KwaZulu-Natal, South Africa</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="p-3 bg-blue-50 rounded-xl mr-5">
        <Phone className="h-7 w-7 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
        <p className="text-gray-600">Tel: 084 095 0018</p>
        <p className="text-gray-600">Monday-Friday: 7:30AM - 3:00PM</p>
      </div>
    </div>
    
    <div className="flex items-start">
      <div className="p-3 bg-blue-50 rounded-xl mr-5">
        <Mail className="h-7 w-7 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
        <p className="text-gray-600">info@mgidla.edu.za</p>
        <Link href="/contact" className="text-blue-600 font-medium flex items-center mt-2 text-sm">
          Send us a message <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
);

// Enhanced Call to Action Component
const EnhancedCTA = () => (
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden relative">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-600/30 rounded-full"></div>
      <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-blue-500/20 rounded-full"></div>
    </div>
    
    <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Join Our School Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 mb-6"
        >
          Discover the Mgidla difference and give your child the education they deserve. 
          Applications for the new academic year are now open.
        </motion.p>
        
        <div className="space-y-4">
          {[
            "Excellence in academic performance and leadership",
            "Dedicated and experienced teaching staff",
            "Modern facilities and resources for optimal learning"
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center"
            >
              <div className="bg-green-500/20 rounded-full p-1 mr-3">
                <Check className="h-4 w-4 text-green-300" />
              </div>
              <span className="text-blue-50">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="md:w-1/3 flex flex-col space-y-4">
        <motion.a
          href="/admissions"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-white text-blue-800 rounded-lg hover:bg-blue-50 transition-all shadow-lg font-medium text-center"
        >
          Apply Now
        </motion.a>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-blue-800/30 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-blue-800/50 transition-all text-center"
        >
          Schedule a Visit
        </motion.a>
        <motion.a
          href="/virtual-tour"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg hover:bg-blue-800/20 transition-all text-center"
        >
          Take a Virtual Tour
        </motion.a>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed navigation */}
      <Nav />
      
      {/* Hero Section with Enhanced Slideshow */}
      <HeroSlideshow />
      
      <main className="relative">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-70"></div>
        
        {/* Quick Links Section */}
        <section className="container mx-auto px-4 -mt-16 relative z-20 mb-24">
          <QuickLinksSection />
        </section>
        
        {/* Welcome Section */}
        <section className="container mx-auto px-4 py-10" id="about">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium uppercase tracking-wider rounded-md mb-6"
              >
                Welcome to Mgidla
              </motion.span>
              
              <h2 className="text-4xl font-bold text-blue-900 mb-6">A Leading Secondary School in KwaZulu-Natal</h2>
              <div className="w-20 h-1 bg-blue-500 mb-8 rounded-full"></div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located in the picturesque Mhlungwane Area, Vryheid, KwaZulu-Natal, we are more than just a school – we
                are a thriving community dedicated to holistic education and student success.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our approach combines rigorous academics with personal growth opportunities, competitive sports, and
                enriching cultural activities to develop well-rounded individuals prepared for the future.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg inline-flex items-center"
                >
                  Discover Our Programs <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="/virtual-tour"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 border-2 border-blue-600 text-blue-700 rounded-md hover:bg-blue-50 transition-all inline-flex items-center"
                >
                  Take a Virtual Tour <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>
              
              {/* Achievement badges */}
              <div className="flex flex-wrap gap-4 mt-10">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-md">
                  <div className="mr-3 text-blue-600">
                    <Medal className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Excellence Award</p>
                    <p className="text-xs text-blue-700">2024 Provincial Recognition</p>
                  </div>
                </div>
                <div className="flex items-center bg-green-50 px-4 py-2 rounded-md">
                  <div className="mr-3 text-green-600">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-900">Top Performing School</p>
                    <p className="text-xs text-green-700">Mathematics and Science</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/mgidla1.png"
                    alt="Mgidla Secondary School Students"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[450px]"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Our Mission</h3>
                  <p className="text-gray-700">Nurturing excellence, developing potential, and shaping future leaders</p>
                  <Link href="/ourmission" className="text-blue-600 text-sm font-medium flex items-center mt-2">
                    Learn more about our mission
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="container mx-auto px-4 my-24">
          <StatsSection />
        </section>
        
        {/* Our Philosophy Section */}
        <section className="container mx-auto px-4 my-24">
          <SectionHeader
            title="Our Philosophy"
            subtitle="Core principles that drive our educational excellence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-12 h-12" />}
              title="Academic Excellence"
              description="We strive for the highest standards of education, empowering students with knowledge and critical thinking skills."
              index={0}
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Character Development"
              description="Building strong moral values, integrity, and respect in our students to become responsible citizens."
              index={1}
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12" />}
              title="Diverse Opportunities"
              description="Offering various extracurricular activities that nurture talents beyond academics."
              index={2}
            />
            <FeatureCard
              icon={<Star className="w-12 h-12" />}
              title="Community Partnership"
              description="Fostering strong relationships between parents, teachers, and students for collaborative growth."
              index={3}
            />
          </div>
        </section>
        
        {/* School Calendar Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-transparent">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="School Calendar"
              subtitle="Stay updated with important dates and upcoming events"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <EventCard
                date="October 15, 2025"
                event="Annual Science Fair"
                description="Students showcase innovative science projects with prizes for top performers in each category."
                icon={<BookOpen className="h-6 w-6 text-white" />}
                index={0}
                link="/events/science-fair"
              />
              <EventCard
                date="November 10, 2025"
                event="Inter-School Sports Day"
                description="A day of athletic competition featuring track and field events, team sports, and more."
                icon={<Trophy className="h-6 w-6 text-white" />}
                index={1}
                link="/events/sports-day"
              />
              <EventCard
                date="December 5, 2025"
                event="Parent-Teacher Conference"
                description="An opportunity for parents to discuss student progress and collaborate with educators."
                icon={<Calendar className="h-6 w-6 text-white" />}
                index={2}
                link="/events/parent-teacher"
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/calendar"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-md border border-blue-100 hover:bg-blue-50 transition-all shadow-md"
              >
                View Full Calendar <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Quick Contact Info */}
        <section className="container mx-auto px-4 my-24" id="contact">
          <QuickContactInfo />
        </section>
        
        {/* Testimonials */}
        <section className="container mx-auto px-4 my-24">
          <SectionHeader
            title="Student Voices"
            subtitle="Hear what our students have to say about their Mgidla experience"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Mgidla Secondary School has transformed my educational journey. The teachers' dedication and support have helped me excel academically and discover my passion for science."
              author="Sipho Ndlovu"
              role="Grade 12 Student"
              index={0}
            />
            <TestimonialCard
              quote="Being part of the school's debate team has improved my confidence and public speaking skills. The teachers here truly care about our holistic development."
              author="Nomfundo Zulu"
              role="Grade 11 Student"
              index={1}
            />
            <TestimonialCard
              quote="The sports program at Mgidla is exceptional. I've been able to balance my academics with athletics, and the coaches have helped me improve significantly."
              author="Thabo Mkhize"
              role="Grade 10 Student"
              index={2}
            />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-24">
          <EnhancedCTA />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}