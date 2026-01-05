"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Shield,
  Radio,
  Wifi,
  Lock,
  Network,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  Eye,
  Smartphone,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";
import logo from "@/components/logo.png";

export default function Home() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const services = [
    {
      icon: Camera,
      title: "CCTV Solutions",
      description:
        "Advanced surveillance systems with HD cameras and smart monitoring",
      features: [
        "24/7 Monitoring",
        "HD Quality",
        "Remote Access",
        "Motion Detection",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Comprehensive access management for secure premises",
      features: [
        "Biometric Systems",
        "Card Access",
        "Vehicle Control",
        "Visitor Management",
      ],
      color: "from-green-500 to-green-700",
    },
    {
      icon: Radio,
      title: "Two-Way Radio",
      description: "Reliable communication systems for seamless coordination",
      features: [
        "Long Range",
        "Clear Audio",
        "Group Communication",
        "Emergency Features",
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Wifi,
      title: "WI-FI Solutions",
      description: "High-speed wireless connectivity for businesses",
      features: [
        "High Speed",
        "Wide Coverage",
        "Secure Networks",
        "Guest Access",
      ],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Robust networking infrastructure for optimal performance",
      features: [
        "Point to Point Links",
        "Point to Multi Point",
        "Network Design",
        "Maintenance",
      ],
      color: "from-pink-500 to-pink-700",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Comprehensive protection against digital threats",
      features: [
        "Threat Detection",
        "Firewall Setup",
        "Security Audits",
        "Incident Response",
      ],
      color: "from-red-500 to-red-700",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "15+", icon: Users },
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Support 24/7", value: "24/7", icon: Phone },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-linear-to-b from-slate-50 to-white"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
          isDarkMode ? "bg-gray-900" : ""
        }`}
      >
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20"
              : "bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          }`}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge
              className={`mb-6 px-4 py-2 text-sm font-semibold animate-bounce ${
                isDarkMode
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              Leading Provider in East Africa
            </Badge>
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Providing Tomorrow's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Technology Today
              </span>
            </h1>
            <p
              className={`text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Comprehensive security, communication, and network solutions
              designed to protect your business and connect your world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-3 transform hover:scale-105 transition-all duration-200 ${
                  isDarkMode
                    ? "border-blue-400 text-blue-400 hover:bg-blue-900"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? "bg-gray-800" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Our Comprehensive Solutions
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              From security systems to network infrastructure, we provide
              end-to-end technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-300 border-0 shadow-sm transform hover:-translate-y-2 cursor-pointer ${
                  activeService === index ? "ring-2 ring-blue-500" : ""
                } ${isDarkMode ? "bg-gray-700" : ""}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 transform hover:rotate-12 transition-all duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle
                    className={`text-xl ${isDarkMode ? "text-white" : ""}`}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center text-sm transform hover:translate-x-2 transition-all duration-200 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 animate-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Story: Leading Innovation in East Africa
              </h2>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Amiran Communications has been at the forefront of technology
                solutions in East Africa for over 15 years. We specialize in
                delivering cutting-edge security, communication, and network
                infrastructure that businesses can rely on.
              </p>
              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Our business focus lies in strategic areas including Cyber
                Security, Physical Security, Communication, Network Solutions,
                Power Solutions, and comprehensive Project Management. We're
                committed to providing tomorrow's technology today.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 transform hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <div
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      Expert Team
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Certified Professionals
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 transform hover:scale-110 transition-all duration-300">
                  <Globe className="h-8 w-8 text-blue-600" />
                  <div>
                    <div
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      Regional Coverage
                    </div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      East Africa Wide
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Amiran?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-200">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <div className="font-semibold">Proven Track Record</div>
                    <div className="text-blue-100">
                      500+ successful projects completed
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-200">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-blue-100">
                      Round-the-clock technical assistance
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-200">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <div className="font-semibold">Latest Technology</div>
                    <div className="text-blue-100">
                      Cutting-edge solutions and innovations
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transform hover:translate-x-2 transition-all duration-200">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <div className="font-semibold">Custom Solutions</div>
                    <div className="text-blue-100">
                      Tailored to your specific needs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? "bg-gray-900" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get in Touch
            </h2>
            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to transform your business with our technology solutions?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card
              className={`p-8 transform hover:scale-105 transition-all duration-300 shadow-xl ${
                isDarkMode ? "bg-gray-800" : ""
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-105 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-105 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Service Interest
                  </label>
                  <select
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-105 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    <option>Select a service</option>
                    <option>CCTV Solutions</option>
                    <option>Access Control</option>
                    <option>Two-Way Radio</option>
                    <option>WI-FI Solutions</option>
                    <option>Network Solutions</option>
                    <option>Cyber Security</option>
                  </select>
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transform hover:scale-105 transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card
                className={`p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isDarkMode ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      Phone
                    </h4>
                    <p
                      className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      +254 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                className={`p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isDarkMode ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      Email
                    </h4>
                    <p
                      className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      info@amirancommunications.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                className={`p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isDarkMode ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center animate-pulse">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? "text-white" : ""
                      }`}
                    >
                      Office Location
                    </h4>
                    <p
                      className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      Nairobi, Kenya
                    </p>
                    <p
                      className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      East Africa
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                <div className="space-y-1 text-blue-100">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="font-semibold text-white mt-2 animate-pulse">
                    Emergency Support: 24/7
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          isDarkMode ? "bg-gray-950" : "bg-gray-900"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start space-x-2 mb-4"
              >
                <div className="relative">
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
              <p className="text-gray-400">
                Providing tomorrow's technology today with comprehensive
                security and communication solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    CCTV Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Access Control
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Two-Way Radio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Network Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-story"
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-white transition-colors"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/amiran-comms-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t mt-8 pt-8 text-center text-gray-400 ${
              isDarkMode ? "border-gray-800" : "border-gray-800"
            }`}
          >
            <p>&copy; 2024 Amiran Communications. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
