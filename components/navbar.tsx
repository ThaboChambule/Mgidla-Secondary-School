"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X, LogIn, HelpCircle, UserPlus } from 'lucide-react';

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-blue-900 shadow-lg' : 'bg-transparent text-white'
    }`}>
      {/* Top utility bar */}
      <div className={`py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 text-white' : 'bg-black/30 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto flex justify-end items-center text-sm">
          <div className="flex space-x-6">
            <Link href="/register" className="hover:text-blue-200 transition-colors flex items-center">
              <UserPlus className="h-4 w-4 mr-1" />
              <span>Register</span>
            </Link>
            <Link href="/myhub" className="hover:text-blue-200 transition-colors flex items-center">
              <LogIn className="h-4 w-4 mr-1" />
              <span>Sign in</span>
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span>Help</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`font-bold text-2xl transition-all ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}>
              <span className="font-black">MGIDLA</span> SECONDARY SCHOOL
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            )}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              <NavItem href="/" label="Home" isScrolled={isScrolled} />
              
              <NavDropdown 
                label="About Us" 
                isScrolled={isScrolled}
                items={[
                  { href: "/ourteam", label: "Our Team" },
                  { href: "/ourmission", label: "Our Mission" },
                  { href: "/history", label: "History" }
                ]} 
              />
              
              <NavItem href="/admissions" label="Admissions" isScrolled={isScrolled} />
              
              <NavDropdown 
                label="Resources" 
                isScrolled={isScrolled}
                items={[
                  { href: "/resources", label: "Gr. 12 Resources" },
                  { href: "/nsc", label: "NSC Pass Levels" },
                  { href: "/applications", label: "Tertiary Applications" },
                  { href: "/bursaries", label: "Bursaries & Funding" }
                ]} 
              />
              
              <NavItem href="/myhub" label="MyHub" isScrolled={isScrolled} />
              <NavItem href="/contact" label="Contact Us" isScrolled={isScrolled} />
              
              <li>
                <Link 
                  href="/apply" 
                  className={`ml-2 px-4 py-2 rounded-md transition-all ${
                    isScrolled 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-500 text-white hover:bg-blue-400'
                  }`}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatedMobileMenu isOpen={mobileMenuOpen} isScrolled={isScrolled} />
    </header>
  );
}

// NavItem component for standard navigation links
const NavItem = ({ href, label, isScrolled }) => (
  <li>
    <Link 
      href={href} 
      className={`block py-2 px-3 rounded-md transition-colors ${
        isScrolled 
          ? 'hover:bg-blue-50 hover:text-blue-700' 
          : 'hover:bg-white/10 hover:text-blue-200'
      }`}
    >
      {label}
    </Link>
  </li>
);

// NavDropdown component for dropdown menus
const NavDropdown = ({ label, items, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className={`flex items-center py-2 px-3 rounded-md transition-colors ${
          isScrolled 
            ? 'hover:bg-blue-50 hover:text-blue-700' 
            : 'hover:bg-white/10 hover:text-blue-200'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      <div 
        className={`absolute left-0 mt-1 w-64 rounded-md overflow-hidden transition-all duration-300 origin-top-left ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-blue-900/95 backdrop-blur-sm'
        }`}
      >
        <ul className="py-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className={`block px-4 py-2 transition-colors ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50 hover:text-blue-700' 
                    : 'text-white hover:bg-blue-800/80'
                }`}
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
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={`md:hidden overflow-hidden ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-blue-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <motion.ul className="space-y-1 pb-4">
          {["Home", "About Us", "Admissions", "Resources", "MyHub", "Contact Us"].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link 
                href={index === 0 ? "/" : `/${item.toLowerCase().replace(' ', '')}`}
                className={`block py-3 px-4 rounded-md ${
                  isScrolled 
                    ? 'text-blue-900 hover:bg-blue-50' 
                    : 'text-white hover:bg-blue-800/80'
                }`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <Link
              href="/apply"
              className={`block py-3 px-4 rounded-md text-center mt-4 ${
                isScrolled 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-500 text-white'
              }`}
            >
              Apply Now
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};