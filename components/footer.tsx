"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-800 text-white pt-16 pb-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-400 opacity-10 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-300 opacity-5 translate-y-1/4"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          {/* School Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                <Image
                  src="/mgidla1.png"
                  alt="Mgidla Secondary School Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Mgidla Secondary</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Committed to academic excellence and holistic development,
              empowering students to achieve their full potential since
              establishment.
            </p>
            <div className="pt-4">
              <Link
                href="#about"
                className="text-blue-200 hover:text-white flex items-center text-sm font-medium transition-colors"
                aria-label="Learn more about Mgidla Secondary School"
              >
                Learn more about us <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About Us" },
                { href: "/#academics", label: "Academic Programs" },
                { href: "/admissions", label: "Admissions" },
                { href: "/calendar", label: "School Calendar" },
                { href: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors flex items-center text-sm group"
                    aria-label={link.label}
                  >
                    <span className="w-0 group-hover:w-2 h-1 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-100 text-sm">
                  Mhlungwane Area, Vryheid, KwaZulu-Natal, South Africa
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-3 flex-shrink-0" />
                <Link
                  href="mailto:info@mgidla-secondary.co.za"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                  aria-label="Email us at info@mgidla-secondary.co.za"
                >
                  info@mgidla-secondary.co.za
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-3 flex-shrink-0" />
                <Link
                  href="tel:0840950018"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                  aria-label="Call us at 084 095 0018"
                >
                  084 095 0018
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-2"></span>
              Stay Connected
            </h3>

            <div className="bg-blue-900/40 rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-3">Subscribe to our newsletter</p>
              <form
                className="flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Form submitted");
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-blue-800/70 text-white placeholder-blue-300 px-4 py-2 rounded-l-md text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Enter your email to subscribe to the newsletter"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-r-md text-sm transition-colors"
                  aria-label="Subscribe to the newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <p className="text-sm text-blue-100 mb-3">Follow us on social media</p>
              <div className="flex space-x-3">
                <Link
                  href="https://www.facebook.com/mgidlasecondary"
                  target="_blank"
                  className="bg-blue-900/40 hover:bg-blue-700/60 p-2 rounded-full transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com/mgidlasecondary"
                  target="_blank"
                  className="bg-blue-900/40 hover:bg-blue-700/60 p-2 rounded-full transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com/mgidlasecondary"
                  target="_blank"
                  className="bg-blue-900/40 hover:bg-blue-700/60 p-2 rounded-full transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/company/mgidlasecondary"
                  target="_blank"
                  className="bg-blue-900/40 hover:bg-blue-700/60 p-2 rounded-full transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-blue-800/60">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              &copy; {currentYear} Mgidla Secondary School. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-blue-200 hover:text-white text-sm transition-colors"
                aria-label="View our Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-blue-200 hover:text-white text-sm transition-colors"
                aria-label="View our Terms of Service"
              >
                Terms of Service
              </Link>
              <p className="text-blue-200 text-sm">
                Website by{" "}
                <Link
                  href="https://thabochambule.co.za"
                  target="_blank"
                  className="hover:text-white underline underline-offset-2"
                  aria-label="Website designed by Thabo Chambule"
                >
                  Thabo Chambule
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;