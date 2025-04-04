"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  LogIn,
  HelpCircle,
  UserPlus,
  Home,
  Users,
  GraduationCap,
  BookOpen,
  Grid,
  Phone,
  Clock,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Contact info bar */}
      <div
        className={`py-2 px-4 transition-all duration-300 ${
          isScrolled ? "bg-blue-900 text-white" : "bg-black/40 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex space-x-6 text-xs md:text-sm">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Mon-Fri: 7:30AM - 3:00PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Mhlungwane Area, Vryheid, KZN</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              <span>info@mgidla.edu.za</span>
            </div>
          </div>
          <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm w-full md:w-auto justify-end">
            <Link
              href="/register"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Register"
            >
              <UserPlus className="h-3 w-3 md:h-4 md:w-4 mr-1 group-hover:scale-110 transition-transform" />
              <span>Register</span>
            </Link>
            <Link
              href="/myhub"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Sign in"
            >
              <LogIn className="h-3 w-3 md:h-4 md:w-4 mr-1 group-hover:scale-110 transition-transform" />
              <span>Sign in</span>
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Help"
            >
              <HelpCircle className="h-3 w-3 md:h-4 md:w-4 mr-1 group-hover:scale-110 transition-transform" />
              <span>Help</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white text-blue-900 shadow-lg py-2" : "bg-transparent text-white py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3"
              aria-label="Home"
            >
              <div
                className={`font-bold text-lg md:text-xl transition-all ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
              >
                <span
                  className={`font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}
                >
                  MGIDLA
                </span>
                <span className="hidden md:inline"> SECONDARY SCHOOL</span>
              </div>
            </Link>
            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center space-x-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`text-sm font-medium ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}
              >
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-blue-900" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-blue-900" : "text-white"}`} />
              )}
            </button>
            {/* Desktop navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-1">
                <NavItem
                  href="/"
                  label="Home"
                  icon={<Home size={16} />}
                  isScrolled={isScrolled}
                />
                <NavDropdown
                  label="About Us"
                  icon={<Users size={16} />}
                  isScrolled={isScrolled}
                  items={[
                    { href: "/ourteam", label: "Our Team" },
                    { href: "/ourmission", label: "Our Mission" },
                    { href: "/history", label: "History" },
                  ]}
                />
                <NavItem
                  href="/admissions"
                  label="Admissions"
                  icon={<GraduationCap size={16} />}
                  isScrolled={isScrolled}
                />
                <NavDropdown
                  label="Resources"
                  icon={<BookOpen size={16} />}
                  isScrolled={isScrolled}
                  items={[
                    { href: "/resources", label: "Gr. 12 Resources" },
                    { href: "/nsc", label: "NSC Pass Levels" },
                    { href: "/applications", label: "Tertiary Applications" },
                    { href: "/bursaries", label: "Bursaries & Funding" },
                  ]}
                />
                <NavItem
                  href="/myhub"
                  label="MyHub"
                  icon={<Grid size={16} />}
                  isScrolled={isScrolled}
                />
                <NavItem
                  href="/contact"
                  label="Contact Us"
                  icon={<Phone size={16} />}
                  isScrolled={isScrolled}
                />
                <li>
                  <Link
                    href="/apply"
                    className={`ml-2 px-4 py-2 rounded-md transition-all flex items-center ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg"
                        : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 shadow-md hover:shadow-lg"
                    }`}
                    aria-label="Apply Now"
                  >
                    <span>Apply Now</span>
                    <ExternalLink size={16} className="ml-1" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatedMobileMenu isOpen={mobileMenuOpen} isScrolled={isScrolled} />
    </header>
  );
}

// NavItem component for standard navigation links
const NavItem = ({ href, label, icon, isScrolled }) => (
  <li>
    <Link
      href={href}
      className={`block py-2 px-3 rounded-md transition-colors flex items-center group ${
        isScrolled
          ? "hover:bg-blue-50 hover:text-blue-700"
          : "hover:bg-white/10 hover:text-blue-200"
      }`}
      aria-label={label}
    >
      <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>
      {label}
    </Link>
  </li>
);

// NavDropdown component for dropdown menus
const NavDropdown = ({ label, icon, items, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center py-2 px-3 rounded-md transition-colors group ${
          isScrolled
            ? "hover:bg-blue-50 hover:text-blue-700"
            : "hover:bg-white/10 hover:text-blue-200"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${label} dropdown`}
      >
        <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>
        {label}
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-1 h-4 w-4 transition-transform"
        >
          ▼
        </motion.span>
      </button>
      <div
        className={`absolute left-0 mt-1 w-64 rounded-md overflow-hidden transition-all duration-300 origin-top-left shadow-xl ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } ${isScrolled ? "bg-white" : "bg-blue-900/95 backdrop-blur-sm"}`}
      >
        <div className={`h-1 w-full ${isScrolled ? "bg-blue-600" : "bg-blue-400"}`}></div>
        <ul className="py-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`block px-4 py-3 transition-colors hover:pl-6 ${
                  isScrolled
                    ? "text-blue-900 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100"
                    : "text-white hover:bg-blue-800/80 border-b border-blue-800/50"
                } ${index === items.length - 1 ? "border-b-0" : ""}`}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

// Mobile menu with animation
const AnimatedMobileMenu = ({ isOpen, isScrolled }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const navItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "About Us", icon: <Users size={18} />, path: "/about" },
    { name: "Admissions", icon: <GraduationCap size={18} />, path: "/admissions" },
    { name: "Resources", icon: <BookOpen size={18} />, path: "/resources" },
    { name: "MyHub", icon: <Grid size={18} />, path: "/myhub" },
    { name: "Contact Us", icon: <Phone size={18} />, path: "/contact" },
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={`md:hidden overflow-hidden ${
        isScrolled ? "bg-white shadow-lg" : "bg-blue-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <motion.ul className="space-y-1 py-4">
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                href={item.path}
                className={`flex items-center py-3 px-4 rounded-md ${
                  isScrolled
                    ? "text-blue-900 hover:bg-blue-50 border-b border-gray-100"
                    : "text-white hover:bg-blue-800/80 border-b border-blue-800/30"
                } ${index === navItems.length - 1 ? "border-b-0" : ""}`}
                aria-label={item.name}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <Link
              href="/apply"
              className={`flex items-center justify-center py-4 px-4 rounded-md text-center mt-4 space-x-2 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md"
              }`}
              aria-label="Apply Now"
            >
              <span>Apply Now</span>
              <ExternalLink size={18} />
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};