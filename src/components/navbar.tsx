"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Moon, Shield, Sun, X } from "lucide-react";
import Image from "next/image";
import logo from "./logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string | string[]) => {
    if (Array.isArray(path)) {
      return path.some((p) => pathname === p || pathname.startsWith(p));
    }
    return pathname === path || pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-800/95 backdrop-blur-sm shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              {/* <Shield
                className={`h-8 w-8 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                } animate-pulse`}
              /> */}
              <Image
                src={logo}
                alt="Amiran Communications Logo"
                className="h-8 w-12 text-blue-600 animate-pulse"
              />
              <div
                className={`absolute inset-0 rounded-full opacity-20 animate-ping ${
                  isDarkMode ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></div>
            </div>
            <span
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Amiran Communications
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
            >
              <span
                className={`transition-all duration-200 hover:scale-105 ${
                  isActive("/about")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </span>
            </Link>
            <div className="relative group">
              <button
                className={`transition-all duration-200 hover:scale-105 ${
                  isActive(["/our-story", "/projects", "/partners"])
                    ? isDarkMode
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Company
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                } border`}
              >
                <Link
                  href="/our-story"
                  aria-current={isActive("/our-story") ? "page" : undefined}
                  className={`block px-4 py-2 text-sm ${
                    isActive("/our-story")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Our Story
                </Link>
                <Link
                  href="/projects"
                  aria-current={isActive("/projects") ? "page" : undefined}
                  className={`block px-4 py-2 text-sm ${
                    isActive("/projects")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/partners"
                  aria-current={isActive("/partners") ? "page" : undefined}
                  className={`block px-4 py-2 text-sm ${
                    isActive("/partners")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Partners
                </Link>
              </div>
            </div>
            <Link
              href="/careers"
              aria-current={isActive("/careers") ? "page" : undefined}
            >
              <span
                className={`transition-all duration-200 hover:scale-105 ${
                  isActive("/careers")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Careers
              </span>
            </Link>
            <Link
              href="/support"
              aria-current={isActive("/support") ? "page" : undefined}
            >
              <span
                className={`transition-all duration-200 hover:scale-105 ${
                  isActive("/support")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Support
              </span>
            </Link>
            {/* <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              <span
                className={`transition-all duration-200 hover:scale-105 ${
                  isActive("/contact")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </span>
            </Link> */}
            <Button
              onClick={() => setIsDarkMode(!isDarkMode)}
              variant="outline"
              className={`transform hover:scale-105 transition-all duration-200 ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            {/* <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            className={`md:hidden ${
              isDarkMode
                ? "border-gray-600 text-gray-300"
                : "border-gray-300 text-gray-700"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-t shadow-lg ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
            >
              <span
                className={`block w-full text-left transition-colors ${
                  isActive("/about")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </span>
            </Link>
            <div>
              <button
                className={`block w-full text-left transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Company
              </button>
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  href="/our-story"
                  aria-current={isActive("/our-story") ? "page" : undefined}
                  className={`block ${
                    isActive("/our-story")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Our Story
                </Link>
                <Link
                  href="/projects"
                  aria-current={isActive("/projects") ? "page" : undefined}
                  className={`block ${
                    isActive("/projects")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  href="/partners"
                  aria-current={isActive("/partners") ? "page" : undefined}
                  className={`block ${
                    isActive("/partners")
                      ? isDarkMode
                        ? "text-blue-400 font-semibold"
                        : "text-blue-600 font-semibold"
                      : isDarkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Partners
                </Link>
              </div>
            </div>
            <Link
              href="/careers"
              aria-current={isActive("/careers") ? "page" : undefined}
            >
              <span
                className={`block w-full text-left transition-colors ${
                  isActive("/careers")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Careers
              </span>
            </Link>
            <Link
              href="/support"
              aria-current={isActive("/support") ? "page" : undefined}
            >
              <span
                className={`block w-full text-left transition-colors ${
                  isActive("/support")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Support
              </span>
            </Link>
            {/* <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
            >
              <span
                className={`block w-full text-left transition-colors ${
                  isActive("/contact")
                    ? isDarkMode
                      ? "text-blue-400 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </span>
            </Link> */}
            <Button
              onClick={() => setIsDarkMode(!isDarkMode)}
              variant="outline"
              className={`w-full ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 mr-2" />
              ) : (
                <Moon className="h-4 w-4 mr-2" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Get Quote
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
