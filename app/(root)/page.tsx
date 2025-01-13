"use client";
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Trophy } from 'lucide-react';
import Footer from "@/components/footer";
import Nav from "@/components/navbar";
import Slideshow from "@/components/slideshow";

// Custom component for section headers
const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ quote, author }: { quote: string, author: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
    <blockquote className="italic text-gray-700 mb-4">&ldquo;{quote}&rdquo;</blockquote>
    <p className="text-gray-500 font-semibold">- {author}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Slideshow />
      
      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Welcome Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader 
              title="Welcome to Mgidla Secondary School" 
              subtitle="Nurturing potential, inspiring futures in the heart of KwaZulu-Natal"
            />
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Located in the Mhlungwane Area, Vryheid, we are more than just a school – we are a community dedicated to holistic education.
              Our approach combines rigorous academics with personal growth, sports, and cultural activities.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#about" 
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Learn More
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <Image 
              src="/mgidla1.png" 
              alt="Mgidla Secondary School Learners" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-2xl object-cover"
            />
          </motion.div>
        </section>

        {/* Our Philosophies Section */}
        <section className="bg-white rounded-xl shadow-lg p-12">
          <SectionHeader 
            title="Our Philosophies" 
            subtitle="Guiding principles that shape our educational approach"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Users className="text-blue-600 w-12 h-12" />, text: "Developing full potential of pupils" },
              { icon: <Trophy className="text-blue-600 w-12 h-12" />, text: "Achieving excellence in academics and extra-mural activities" },
              { icon: <MapPin className="text-blue-600 w-12 h-12" />, text: "Fostering dynamic partnerships between parents, teachers, and pupils" },
              { icon: <Calendar className="text-blue-600 w-12 h-12" />, text: "Instilling sound moral values and self-belief" }
            ].map((philosophy, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                {philosophy.icon}
                <p className="text-lg text-gray-800">{philosophy.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="Mark your calendars for these exciting school activities"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: "October 15, 2024", event: "Science Fair", icon: <Trophy /> },
              { date: "November 10, 2024", event: "Sports Day", icon: <Users /> },
              { date: "December 5, 2024", event: "Parent-Teacher Meeting", icon: <Calendar /> }
            ].map((eventItem, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform"
              >
                <div className="mb-4 flex justify-center text-blue-600">
                  {eventItem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{eventItem.event}</h3>
                <p className="text-gray-600">{eventItem.date}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 rounded-xl p-12">
          <SectionHeader 
            title="Student Voices" 
            subtitle="Hear directly from the students who call Mgidla home"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard 
              quote="Mgidla Secondary School has provided me with the best education and opportunities to grow." 
              author="Anonymous Student" 
            />
            <TestimonialCard 
              quote="The teachers here are very supportive and always encourage us to do our best." 
              author="Another Student" 
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
