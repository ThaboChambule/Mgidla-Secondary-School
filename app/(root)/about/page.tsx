"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Clock,
  CalendarDays,
  MapPin,
} from "lucide-react";
import Footer from "@/components/footer";
import Nav from "@/components/navbar";

// Section Header component
const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
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

// Key Figure Component
const KeyFigureCard = ({
  name,
  role,
  description,
  imageSrc,
}: {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <div className="relative h-56 w-full">
      <Image src={imageSrc} alt={name} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-4">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// Timeline Item Component
const TimelineItem = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative pl-10 pb-10 border-l-2 border-blue-500 last:border-0"
  >
    <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-600"></div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-3">
        {year}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// Stat item
const StatItem = ({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md text-center"
  >
    <div className="text-blue-600 mb-3">{icon}</div>
    <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
    <p className="text-gray-500">{label}</p>
  </motion.div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mgidla4.png"
            alt="Mgidla Secondary School"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-950/50 flex items-center">
            <div className="container mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-5xl font-bold mb-4">About Our School</h1>
                <p className="text-xl mb-8">
                  Discover the foundation, values, and vision that make Mgidla
                  Secondary School exceptional.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-16">
        {/* Mission and Vision */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to place teaching and learning first, give
                educators opportunities to develop and improve their teaching
                skills, foster inclusive decision-making processes, modernize
                and develop school premises, and share resources with the whole
                community.
              </p>
              <h2 className="text-4xl font-bold text-blue-900 mb-6 mt-10">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To be a leading secondary school that provides quality
                education, develops responsible citizens, and creates an
                environment where every student can discover and fulfill their
                potential.
              </p>
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
                  src="/mgidla5.png"
                  alt="Mgidla Secondary School"
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

        {/* Key Statistics */}
        <section className="bg-blue-50 py-20 mb-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Impact"
              subtitle="Key statistics that showcase our achievements and growth"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatItem
                value="1980"
                label="Year Founded"
                icon={<CalendarDays className="h-8 w-8 mx-auto" />}
              />
              <StatItem
                value="400+"
                label="Students"
                icon={<Users className="h-8 w-8 mx-auto" />}
              />
              <StatItem
                value="25+"
                label="Educators"
                icon={<GraduationCap className="h-8 w-8 mx-auto" />}
              />
              <StatItem
                value="90%"
                label="Matric Pass Rate"
                icon={<Award className="h-8 w-8 mx-auto" />}
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="container mx-auto px-4 mb-20">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in all areas of education, encouraging
                our students to pursue the highest standards in their academic
                and personal development.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We value honesty, respect, and ethical behavior, fostering a
                culture where students develop strong moral character and
                personal responsibility.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new ideas and approaches to education, preparing our
                students to adapt and thrive in a rapidly changing world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* School Features */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 mb-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center"
            >
              What Makes Us Special
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Strong Academic Focus
                  </h3>
                  <p className="text-blue-100">
                    Our curriculum is designed to challenge students and prepare
                    them for further education and career success.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Dedicated Educators
                  </h3>
                  <p className="text-blue-100">
                    Our teachers are committed professionals who bring
                    experience, passion, and innovation to the classroom.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Modern Facilities
                  </h3>
                  <p className="text-blue-100">
                    Our campus provides students with the resources they need
                    for effective learning and extracurricular activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Ready to Join Our School Community?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We invite you to visit our campus, meet our staff, and
                experience the Mgidla difference firsthand.
              </p>
              <div className="flex justify-center space-x-4 flex-wrap">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg flex items-center"
                >
                  Contact Us <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="/admissions"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-all flex items-center"
                >
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
