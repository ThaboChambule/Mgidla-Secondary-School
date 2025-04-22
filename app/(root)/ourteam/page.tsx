"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Users,
  Award,
  BookOpen,
  ChevronRight,
  Briefcase,
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

// Staff Card Component
const StaffCard = ({
  name,
  role,
  imageSrc = "/mgidla1.png", // Default profile image
  description,
  index = 0,
}: {
  name: string;
  role: string;
  imageSrc?: string;
  description?: string;
  index?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="relative h-56 w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="flex items-center justify-center h-full text-white">
          <Users className="h-24 w-24 opacity-20" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-blue-200 font-medium mb-4">{role}</p>
        {description && <p className="text-sm text-blue-100">{description}</p>}
      </div>
    </div>
  </motion.div>
);

// Leadership Card - with image
