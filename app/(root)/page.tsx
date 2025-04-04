"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Trophy, ChevronRight, BookOpen, Star, Medal, Clock } from 'lucide-react';
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

// Enhanced Hero Slideshow Component
const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/slideshow/mgidlaslide1.png",
      title: "Excellence in Education",
      subtitle: "Nurturing bright minds for a brighter future"
    },
    {
      image: "/slideshow/mgidlaslide0.png", // Placeholder - you'll need this image
      title: "Engaging Learning Environment",
      subtitle: "Where curiosity leads to discovery"
    },
    {
      image : "/slideshow/mgidlaslide3.png", // Placeholder - you'll need this image
      title: "Holistic Development",
      subtitle: "Excelling in academics, sports, and culture"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-transparent flex items-center">
              <div className="container mx-auto px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#about"
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg flex items-center"
                    >
                      Learn More <ChevronRight className="ml-2 h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all flex items-center"
                    >
                      Contact Us <ChevronRight className="ml-2 h-5 w-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Animated section header with underline effect
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <div className="inline-block">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 tracking-tight relative inline-block"
      >
        {title}
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
        />
      </motion.h2>
    </div>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto mt-4"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// Animated feature card
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500 hover:border-blue-600 transition-all"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Enhanced testimonial card with hover effect
const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role?: string }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-xl shadow-lg relative"
  >
    <div className="absolute -top-4 left-6 text-blue-500 text-6xl opacity-30">"</div>
    <blockquote className="text-gray-700 mb-4 relative z-10 pt-3">{quote}</blockquote>
    <div className="border-t border-gray-200 pt-4 mt-4">
      <p className="text-blue-900 font-semibold">{author}</p>
      {role && <p className="text-gray-500 text-sm">{role}</p>}
    </div>
  </motion.div>
);

// News/Event Card
const EventCard = ({ date, event, description, icon }: { date: string, event: string, description: string, icon: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h3 className="text-xl font-bold">{event}</h3>
      <div className="text-white">{icon}</div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-800">
        <Clock className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">{date}</span>
      </div>
    </div>
  </motion.div>
);

// Stats component
const StatsSection = () => (
  <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl py-12 px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: "90%", label: "Matric Pass Rate", icon: <Star className="h-8 w-8 mx-auto mb-2" /> },
        { value: "25+", label: "Qualified Teachers", icon: <Users className="h-8 w-8 mx-auto mb-2" /> },
        { value: "400+", label: "Students", icon: <BookOpen className="h-8 w-8 mx-auto mb-2" /> },
        { value: "15+", label: "Provincial Awards", icon: <Medal className="h-8 w-8 mx-auto mb-2" /> }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {stat.icon}
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
        </motion.div>
      ))}
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
      
      <main className="space-y-24 pb-24">
        {/* Welcome Section */}
        <section className="container mx-auto px-4 py-16" id="about">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Welcome to Mgidla Secondary School</h2>
              <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located in the picturesque Mhlungwane Area, Vryheid, KwaZulu-Natal, we are more than just a school – we are a thriving community dedicated to holistic education and student success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our approach combines rigorous academics with personal growth opportunities, competitive sports, and enriching cultural activities to develop well-rounded individuals prepared for the future.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg inline-flex items-center"
              >
                Discover Our Programs <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="/mgidla1.png"
                  alt="Mgidla Secondary School Students"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4">
          <StatsSection />
        </section>

        {/* Our Philosophy Section */}
        <section className="container mx-auto px-4">
          <SectionHeader
            title="Our Philosophy"
            subtitle="Core principles that drive our educational excellence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-12 h-12" />}
              title="Academic Excellence"
              description="We strive for the highest standards of education, empowering students with knowledge and critical thinking skills."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Character Development"
              description="Building strong moral values, integrity, and respect in our students to become responsible citizens."
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12" />}
              title="Diverse Opportunities"
              description="Offering various extracurricular activities that nurture talents beyond academics."
            />
            <FeatureCard
              icon={<Star className="w-12 h-12" />}
              title="Community Partnership"
              description="Fostering strong relationships between parents, teachers, and students for collaborative growth."
            />
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="container mx-auto px-4">
          <SectionHeader
            title="School Calendar"
            subtitle="Stay updated with important dates and upcoming events"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <EventCard
              date="October 15, 2024"
              event="Annual Science Fair"
              description="Students showcase innovative science projects with prizes for top performers in each category."
              icon={<BookOpen className="h-6 w-6" />}
            />
            <EventCard
              date="November 10, 2024"
              event="Inter-School Sports Day"
              description="A day of athletic competition featuring track and field events, team sports, and more."
              icon={<Trophy className="h-6 w-6" />}
            />
            <EventCard
              date="December 5, 2024"
              event="Parent-Teacher Conference"
              description="An opportunity for parents to discuss student progress and collaborate with educators."
              icon={<Calendar className="h-6 w-6" />}
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4">
          <SectionHeader
            title="Student Voices"
            subtitle="Hear what our students have to say about their Mgidla experience"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Mgidla Secondary School has transformed my educational journey. The teachers' dedication and support have helped me excel academically and discover my passion for science."
              author="Sipho Ndlovu"
              role="Grade 12 Student"
            />
            <TestimonialCard
              quote="Being part of the school's debate team has improved my confidence and public speaking skills. The teachers here truly care about our holistic development."
              author="Nomfundo Zulu"
              role="Grade 11 Student"
            />
            <TestimonialCard
              quote="The sports program at Mgidla is exceptional. I've been able to balance my academics with athletics, and the coaches have helped me improve significantly."
              author="Thabo Mkhize"
              role="Grade 10 Student"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-blue-300"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-blue-400"></div>
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4"
              >
                Join Our School Community
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                Discover the Mgidla difference and give your child the education they deserve. Applications for the new academic year are now open.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex justify-center space-x-4 flex-wrap"
              >
                <motion.a
                  href="#admissions"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-all shadow-lg font-medium"
                >
                  Apply Now
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all font-medium"
                >
                  Schedule a Visit
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}