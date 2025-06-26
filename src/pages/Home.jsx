import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Star,
  Clock,
  Users,
  ChefHat,
  Utensils,
  Wine,
  Calendar,
} from "lucide-react";
import Contacts from "../components/Contacts";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  
  const menuHighlights = [
    {
      name: "Grilled Chicken Burger",
      image:
        "https://images.pexels.com/photos/13522852/pexels-photo-13522852.jpeg ",
      price: "KSH 450",
      description: "Juicy Chicken, Mayo, seasonal vegetables",
    },
    {
      name: "Goat Chops in Rosmerry Sauce",
      image:
        "https://images.pexels.com/photos/5410460/pexels-photo-5410460.jpeg",
      price: "KSH 1200",
      description: "Goat Leg, cognac cream sauce, herb gratin",
    },
    {
      name: "Chicken Hawaiian Salad",
      image:
        "https://images.pexels.com/photos/32645297/pexels-photo-32645297.jpeg",
      price: "KSH 700",
      description: "Avocado, grilled chicken pieces,Soy",
    },
  ];

  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      name: "Expert Chefs",
      description: "Michelin-trained culinary team",
    },
    {
      icon: <Wine className="w-8 h-8" />,
      name: "Fine Drinks",
      description: "Curated selection of 100+ drinks",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      name: "Fresh Ingredients",
      description: "Daily sourced premium ingredients",
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Private Dining",
      description: "Exclusive events & celebrations",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="primary primary-text shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <img
                  className="rounded-4xl object-fill "
                  src="images/Alas_logo_main.png"
                  alt="Alas Arostos Logo"
                />
              </div>
              <div>
                <h1 className="font-bold text-xl">ALAS AROSTO</h1>
                <p className="text-xs text-amber-200">FINE DINING</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-amber-200  transition-all">
                Home
              </a>

              <a
                href="#about"
                className="hover:text-amber-200 transition-colors"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-amber-200 transition-colors"
              >
                Contact
              </a>
              <Link to="/menu">
                <div className="secondary secondary-text px-4 py-1 rounded-lg hover:scale-105 transition-all">
                  Menu
                </div>
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-800 border-t border-amber-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 hover:bg-amber-700 rounded"
              >
                Home
              </a>
              <a
                href="#menu"
                className="block px-3 py-2 hover:bg-amber-700 rounded"
              >
                Menu
              </a>
              <a
                href="#about"
                className="block px-3 py-2 hover:bg-amber-700 rounded"
              >
                About
              </a>
              <a
                href="#reservations"
                className="block px-3 py-2 hover:bg-amber-700 rounded"
              >
                Reservations
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 hover:bg-amber-700 rounded"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Restaurant view ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-{#d8ac85} bg-opacity-50"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-100">
              ALAS AROSTO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Culinary Excellence in Every Bite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <button className="border-2 border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                  View Menu
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-amber-100"
                  : "bg-amber-100 bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">
            Welcome to Alas Arosto
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-lg text-amber-800 leading-relaxed max-w-3xl mx-auto">
            Experience the artistry of fine dining at Alas Arosto, where passion
            meets perfection on every plate. menulinary journey celebrates the
            finest ingredients, innovative techniques, and timeless flavors that
            create unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-20 primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold primary-text text-center mb-16">
            Signature Dishes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuHighlights.map((dish, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">
            Why Choose Alas Arosto
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-amber-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold primary-text mb-6">
                Our Culinary Story
              </h2>
              <p className="text-lg primary-text mb-6 leading-relaxed">
                Founded with a passion for culinary excellence, Alas Arosto
                represents the perfect harmony of traditional techniques and
                modern innovation. Our chef-driven menu celebrates seasonal
                ingredients and bold flavors that tell a story with every dish.
              </p>
              <p className="text-lg primary-text mb-8 leading-relaxed">
                From our wood-fired grill to our artisanal desserts, every
                element is crafted with meticulous attention to detail, ensuring
                an extraordinary dining experience that lingers long after the
                last bite.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center primary-text secondary secondary-text w-fit p-2 rounded-2xl">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>Daily: 6:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7447280/pexels-photo-7447280.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chef in kitchen"
                className="rounded-lg shadow-xl object-cover w-96 h-f96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-20 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8">
            Make a Reservation
          </h2>
          <p className="text-lg text-amber-800 mb-12">
            Reserve your table for an unforgettable dining experience. We
            recommend booking in advance, especially for weekend dinners and
            special occasions.
          </p>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 max-w-2xl mx-auto flex  justify-center ">
              <div>
                <a
                  href="https://wa.me/+254718455521?text=Hello,%20I'm%20interested%20in%20booking%20a%20space"
                  className="inline-flex items-center mr-4 px-8 py-3 bg-slate-900 text-amber-300 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  Talk to us on Whatsapp
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="tel:0718455521"
                  className="inline-flex items-center px-8 py-3 bg-slate-900 text-amber-300 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Reservations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contacts></Contacts>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <img
                className="rounded-4xl object-fill "
                src="images/Alas_logo_main.png"
                alt="Alas Arostos Logo"
              />
            </div>
            <span className="text-xl font-bold">ALAS AROSTO</span>
          </div>
          <p className="text-amber-300">
            © 2025 Alas Arosto Restaurant. All rights reserved. | Privacy Policy
            | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
