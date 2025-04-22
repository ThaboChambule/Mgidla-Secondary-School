"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  Search,
  Bell,
} from "lucide-react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

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
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Announcement banner - can be toggled on special occasions */}
      <AnimatePresence>
        <motion.div 
          className="bg-yellow-400 py-1 text-center text-blue-900 text-sm font-medium relative overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20"></div>
          <div className="container mx-auto px-4 relative">
            <p>Application period for 2026 academic year opens on June 1st!</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Contact info bar with enhanced styling */}
      <div
        className={`relative transition-all duration-500 ${
          isScrolled 
            ? "py-1.5 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg" 
            : "py-2 px-4 bg-black/50 backdrop-blur-sm text-white"
        }`}
      >
        {/* Decorative header elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-400/10 rounded-full"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-300/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm relative z-10">
          <div className="hidden md:flex space-x-8 text-xs md:text-sm">
            <motion.div 
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.03 }}
            >
              <Clock className="h-3.5 w-3.5 mr-1.5 text-blue-300" />
              <span>Mon-Fri: 7:30AM - 3:00PM</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.03 }}
            >
              <MapPin className="h-3.5 w-3.5 mr-1.5 text-blue-300" />
              <span>Mhlungwane Area, Vryheid, KZN</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              whileHover={{ scale: 1.03 }}
            >
              <Mail className="h-3.5 w-3.5 mr-1.5 text-blue-300" />
              <span>info@mgidla.edu.za</span>
            </motion.div>
          </div>
          <div className="flex space-x-5 md:space-x-6 text-xs md:text-sm w-full md:w-auto justify-end">
            <Link
              href="/register"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Register"
            >
              <UserPlus className="h-3 w-3 md:h-4 md:w-4 mr-2 group-hover:scale-110 transition-transform text-blue-300" />
              <span>Register</span>
            </Link>
            <Link
              href="/myhub"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Sign in"
            >
              <LogIn className="h-3 w-3 md:h-4 md:w-4 mr-2 group-hover:scale-110 transition-transform text-blue-300" />
              <span>Sign in</span>
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition-colors flex items-center group"
              aria-label="Help"
            >
              <HelpCircle className="h-3 w-3 md:h-4 md:w-4 mr-2 group-hover:scale-110 transition-transform text-blue-300" />
              <span>Help</span>
            </Link>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="hover:text-blue-200 transition-colors flex items-center group"
              onClick={() => setShowSearchBar(!showSearchBar)}
              aria-label="Search"
            >
              <Search className="h-3 w-3 md:h-4 md:w-4 group-hover:scale-110 transition-transform text-blue-300" />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Animated search bar */}
      <AnimatePresence>
        {showSearchBar && (
          <motion.div 
            className="bg-blue-900 text-white py-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center bg-blue-800/50 rounded-md overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Search our website..." 
                  className="px-4 py-2 w-full bg-transparent focus:outline-none text-white placeholder-blue-300"
                  autoFocus
                />
                <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main navigation with enhanced styling */}
      <div
        className={`transition-all duration-500 ${
          isScrolled 
            ? "bg-white text-blue-900 shadow-lg py-3" 
            : "bg-transparent text-white py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo Area */}
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Home"
            >
              <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md group-hover:from-blue-400 group-hover:to-blue-600 shadow-lg transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-xl md:text-2xl">M</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="flex flex-col">
                <div className={`font-bold text-lg md:text-2xl transition-all tracking-tight flex items-baseline group-hover:tracking-normal ${
                  isScrolled ? "text-blue-900" : "text-white"
                }`}>
                  <span className="font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    MGIDLA
                  </span>
                  <motion.span 
                    className={`hidden md:inline ml-2 ${isScrolled ? "text-gray-700" : "text-blue-100"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  > 
                    SECONDARY SCHOOL
                  </motion.span>
                </div>
                <span className={`text-xs tracking-widest ${isScrolled ? "text-blue-700" : "text-blue-200"}`}>EXCELLENCE IN EDUCATION</span>
              </div>
            </Link>
            
            {/* Mobile menu button with enhanced styling */}
            <button
              className="md:hidden flex items-center space-x-2 bg-gradient-to-r from-blue-600/90 to-blue-700/90 hover:from-blue-500 hover:to-blue-600 text-white py-1.5 px-3 rounded-md transition-all shadow-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-sm font-medium">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </button>
            
            {/* Desktop navigation with enhanced styling */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-1">
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
                    className={`ml-2 px-5 py-2.5 rounded-md transition-all flex items-center ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg"
                        : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 shadow-md hover:shadow-lg"
                    }`}
                    aria-label="Apply Now"
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-medium">Apply Now</span>
                      <ExternalLink size={16} className="ml-2" />
                    </motion.div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with enhanced styling */}
      <AnimatedMobileMenu isOpen={mobileMenuOpen} isScrolled={isScrolled} />
    </header>
  );
}

// Type definitions for component props
interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isScrolled: boolean;
}

interface NavDropdownProps {
  label: string;
  icon: React.ReactNode;
  isScrolled: boolean;
  items: {
    href: string;
    label: string;
  }[];
}

interface AnimatedMobileMenuProps {
  isOpen: boolean;
  isScrolled: boolean;
}

// NavItem component with enhanced styling
const NavItem = ({ href, label, icon, isScrolled }: NavItemProps) => (
  <li>
    <Link
      href={href}
      className={`block py-2.5 px-4 rounded-md transition-all flex items-center group relative overflow-hidden ${
        isScrolled
          ? "hover:bg-blue-50 hover:text-blue-700"
          : "hover:bg-white/10 hover:text-blue-200"
      }`}
      aria-label={label}
    >
      {/* Subtle background animation on hover */}
      <motion.div
        className="absolute inset-0 bg-current opacity-0"
        whileHover={{ opacity: 0.05, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <span className="mr-2.5 group-hover:scale-110 transition-transform relative z-10">{icon}</span>
      <span className="relative z-10 font-medium">{label}</span>
      
      {/* Underline animation on hover */}
      <motion.span 
        className={`absolute bottom-1 left-4 right-4 h-0.5 transform origin-left scale-x-0 transition-transform ${
          isScrolled ? "bg-blue-600" : "bg-blue-300"
        }`}
        initial={false}
        whileHover={{ scaleX: 1 }}
      />
    </Link>
  </li>
);

// NavDropdown component with enhanced styling
const NavDropdown = ({ label, icon, items, isScrolled }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center py-2.5 px-4 rounded-md transition-all group relative overflow-hidden ${
          isScrolled
            ? "hover:bg-blue-50 hover:text-blue-700"
            : "hover:bg-white/10 hover:text-blue-200"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${label} dropdown`}
      >
        {/* Subtle background animation on hover */}
        <motion.div
          className="absolute inset-0 bg-current opacity-0"
          whileHover={{ opacity: 0.05, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <span className="mr-2.5 group-hover:scale-110 transition-transform relative z-10">{icon}</span>
        <span className="relative z-10 font-medium">{label}</span>
        <motion.div
          className="ml-1.5 relative z-10"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
        
        {/* Underline animation on hover */}
        <motion.span 
          className={`absolute bottom-1 left-4 right-4 h-0.5 transform origin-left scale-x-0 transition-transform ${
            isScrolled ? "bg-blue-600" : "bg-blue-300"
          }`}
          initial={false}
          whileHover={{ scaleX: 1 }}
        />
      </button>
      
      {/* Enhanced dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-1 w-64 rounded-lg overflow-hidden origin-top-left shadow-xl ${
              isScrolled ? "bg-white" : "bg-blue-900/95 backdrop-blur-sm"
            }`}
            style={{ zIndex: 100 }}
          >
            <div className={`h-1 w-full ${isScrolled ? "bg-gradient-to-r from-blue-600 to-blue-700" : "bg-gradient-to-r from-blue-400 to-blue-500"}`}></div>
            <ul className="py-1">
              {items.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-5 py-3 transition-all ${
                      isScrolled
                        ? "text-blue-900 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100"
                        : "text-white hover:bg-blue-800/80 border-b border-blue-800/50"
                    } ${index === items.length - 1 ? "border-b-0" : ""}`}
                    aria-label={item.label}
                  >
                    <div className="flex items-center">
                      <div className={`w-1.5 h-1.5 rounded-full ${isScrolled ? "bg-blue-600" : "bg-blue-400"} mr-2.5`}></div>
                      {item.label}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

// Mobile menu with enhanced styling
const AnimatedMobileMenu = ({ isOpen, isScrolled }: AnimatedMobileMenuProps) => {
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
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.07,
        staggerDirection: 1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "About Us", icon: <Users size={20} />, path: "/about" },
    { name: "Admissions", icon: <GraduationCap size={20} />, path: "/admissions" },
    { name: "Resources", icon: <BookOpen size={20} />, path: "/resources" },
    { name: "MyHub", icon: <Grid size={20} />, path: "/myhub" },
    { name: "Contact Us", icon: <Phone size={20} />, path: "/contact" },
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={`md:hidden overflow-hidden ${
        isScrolled 
          ? "bg-white shadow-lg" 
          : "bg-gradient-to-b from-blue-900 to-blue-800 backdrop-blur-sm"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-300/5 rounded-full"></div>
        <div className="absolute -left-10 top-10 w-32 h-32 bg-blue-400/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <motion.ul className="space-y-2 py-4">
          {navItems.map((item, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href={item.path}
                className={`flex items-center py-3.5 px-5 rounded-lg ${
                  isScrolled
                    ? "text-blue-900 hover:bg-blue-50 border-b border-gray-100"
                    : "text-white hover:bg-blue-800/80 border-b border-blue-800/30"
                } ${index === navItems.length - 1 ? "border-b-0" : ""}`}
                aria-label={item.name}
              >
                <div className={`p-1.5 rounded-md mr-4 ${
                  isScrolled
                    ? "bg-blue-100 text-blue-800"
                    : "bg-blue-800/70 text-blue-100"
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <Link
              href="/apply"
              className={`flex items-center justify-center py-4 px-5 rounded-lg text-center mt-6 space-x-3 ${
                isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
              }`}
              aria-label="Apply Now"
            >
              <span className="font-bold">Apply Now</span>
              <ExternalLink size={20} />
            </Link>
          </motion.li>
          
          {/* Additional quick links */}
          <div className="pt-6 mt-6 border-t border-blue-800/20 grid grid-cols-2 gap-2">
            <motion.div variants={itemVariants} className="col-span-2 mb-2">
              <h3 className={`text-xs uppercase font-bold ${isScrolled ? "text-gray-500" : "text-blue-300"}`}>Quick Links</h3>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/register" className={`text-sm flex items-center ${isScrolled ? "text-blue-700" : "text-blue-200"}`}>
                <UserPlus size={14} className="mr-2" />
                <span>Register</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="/myhub" className={`text-sm flex items-center ${isScrolled ? "text-blue-700" : "text-blue-200"}`}>
                <LogIn size={14} className="mr-2" />
                <span>Sign In</span>
              </Link>
            </motion.div>
          </div>
        </motion.ul>
      </div>
    </motion.div>
  );
};