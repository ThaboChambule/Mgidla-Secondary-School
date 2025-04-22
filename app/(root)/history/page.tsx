"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  History as HistoryIcon,
  Target,
  Users,
  ChevronRight,
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

// Timeline Item Component
const TimelineItem = ({
  year,
  title,
  description,
  align = "left",
  imageSrc,
}: {
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
  imageSrc?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex items-stretch ${
      align === "right" ? "flex-row-reverse" : ""
    }`}
  >
    <div className="hidden md:flex flex-col items-center">
      <div className="w-4 h-4 rounded-full bg-blue-600 z-10"></div>
      <div className="w-1 flex-grow bg-blue-300"></div>
    </div>
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden md:w-5/12 mb-10 ${
        align === "left" ? "md:mr-auto" : "md:ml-auto"
      }`}
    >
      {imageSrc && (
        <div className="relative w-full h-48">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
          {year}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="hidden md:block md:w-5/12"></div>
  </motion.div>
);

// Info Card Component
const InfoCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg"
  >
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mgidla3.png"
            alt="Mgidla Secondary School History"
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
                <h1 className="text-5xl font-bold mb-4">Our History</h1>
                <p className="text-xl mb-8">
                  Tracing the journey and evolution of Mgidla Secondary School
                  through the years.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-16">
        {/* Introduction */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center italic">
                "A school's history is more than dates and events — it's the
                story of countless lives shaped, dreams nurtured, and a
                community united in the pursuit of knowledge."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-4 mb-20">
          <SectionHeader
            title="Our Journey Through Time"
            subtitle="The key milestones that have shaped Mgidla Secondary School"
          />

          <div className="relative">
            {/* Vertical timeline line - visible on desktop only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>

            <TimelineItem
              year="1980"
              title="Foundation"
              description="Mgidla Secondary School was founded with a vision to provide quality education to the local community, starting with just a handful of classrooms and dedicated teachers."
              align="left"
              imageSrc="/mgidla1.png"
            />

            <TimelineItem
              year="1995"
              title="Expansion"
              description="The school expanded its facilities to accommodate the growing number of students, adding new classrooms and improving existing infrastructure."
              align="right"
            />

            <TimelineItem
              year="2005"
              title="Academic Excellence"
              description="A period marked by outstanding academic achievements, with Mgidla students excelling in provincial examinations and competitions."
              align="left"
            />

            <TimelineItem
              year="2015"
              title="Renovation Project"
              description="The school community embarked on an ambitious renovation and beautification project to address challenges of overcrowding and inadequate space."
              align="right"
              imageSrc="/mgidla5.png"
            />

            <TimelineItem
              year="2023"
              title="Modern Era"
              description="Through internal fundraising and self-initiated projects, Mgidla Secondary has transformed into a modern educational institution ready to meet future challenges."
              align="left"
            />
          </div>
        </section>

        {/* Key Achievements */}
        <section className="bg-blue-50 py-20 mb-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Our Achievements"
              subtitle="Notable accomplishments throughout our history"
            />
            <div className="grid md:grid-cols-3 gap-8">
              <InfoCard
                title="Academic Excellence"
                description="Consistent high pass rates in matric examinations, with many students achieving distinctions in key subjects."
                icon={<HistoryIcon className="w-12 h-12" />}
              />
              <InfoCard
                title="Community Support"
                description="Strong involvement from parents, alumni, and local businesses in supporting the school's initiatives and growth."
                icon={<Users className="w-12 h-12" />}
              />
              <InfoCard
                title="Infrastructure Development"
                description="Remarkable transformation of school facilities through internally-driven renovation projects."
                icon={<Target className="w-12 h-12" />}
              />
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className="container mx-auto px-4 mb-20">
          <div className="bg-white rounded-xl shadow-xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16">
              <div className="w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
            </div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10">
              <div className="w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Looking to the Future
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Looking ahead, Mgidla Secondary School aims to continue its
                legacy of excellence by further enhancing its facilities,
                expanding its academic programs, and fostering a culture of
                innovation and inclusivity. The school is committed to preparing
                its students for the challenges of the future and ensuring that
                they become responsible and successful members of society.
              </p>
              <div className="mt-8">
                <motion.a
                  href="/ourmission"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg"
                >
                  Explore Our Mission <ChevronRight className="ml-2 h-5 w-5" />
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
