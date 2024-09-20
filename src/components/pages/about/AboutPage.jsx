import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 to-purple-100">
      {/* Header Section - Diwali Special */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-purple-900 px-6 text-center text-white relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Diwali+Background')" }}></div> {/* Background for Diwali */}
        <h1 className="text-6xl font-bold text-gold-500 relative z-10">
          Happy Diwali from Wish Box!
        </h1>
        <p className="mt-4 text-2xl font-light text-gold-300 relative z-10 max-w-2xl">  
          Brighten up your celebrations with eco-friendly paper decorations and Diwali specials!
        </p>
        <motion.button
          className="mt-8 px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-lg relative z-10"
          whileHover={{ scale: 1.1 }}
        >
          Discover Festive Products
        </motion.button>
        <div className="absolute bottom-10 left-10">
          <motion.img
            src="https://via.placeholder.com/100x100?text=Diya" // Replace with diya icon
            alt="Diya Lamp"
            className="w-16 h-16"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <div className="absolute bottom-10 right-10">
          <motion.img
            src="https://via.placeholder.com/100x100?text=Diya" // Replace with diya icon
            alt="Diya Lamp"
            className="w-16 h-16"
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="py-20 px-10 bg-yellow-50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-purple-800">
          Our Mission
        </h2>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          At Wish Box, we’re committed to bringing the joy of eco-friendly paper decorations to your Diwali celebrations. Our festive collection is handcrafted to light up your homes and hearts.
        </p>
      </motion.div>

      {/* Diwali Product Showcase Section */}
      <motion.div
        className="py-20 px-5 bg-purple-100 text-center"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2 className="text-4xl font-bold text-yellow-700 mb-10">
          Diwali Special Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Product 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            whileHover={{ rotate: 2 }}
          >
            <img
              src="https://via.placeholder.com/400?text=Festive+Garland"
              alt="Festive Garland"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Diwali Paper Garlands</h3>
              <p className="text-gray-600 mt-2">Beautiful handcrafted paper garlands in vibrant colors for your home decor.</p>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            whileHover={{ rotate: -2 }}
          >
            <img
              src="https://via.placeholder.com/400?text=Paper+Lantern"
              alt="Paper Lantern"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Festive Paper Lanterns</h3>
              <p className="text-gray-600 mt-2">Eco-friendly paper lanterns to light up your Diwali celebrations.</p>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            whileHover={{ rotate: 2 }}
          >
            <img
              src="https://via.placeholder.com/400?text=Diwali+Decor"
              alt="Diwali Decor"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Diwali Table Decorations</h3>
              <p className="text-gray-600 mt-2">Celebrate with our exclusive Diwali-themed paper decorations for your dinner table.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Journey Section */}
      <motion.div
        className="py-20 px-10 bg-orange-100"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10 text-purple-800">
          Our Journey
        </h2>
        <div className="max-w-5xl mx-auto">
          <ul className="space-y-8">
            <li className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-700">Founded in 2015</h3>
                <p className="text-gray-600 mt-2">
                  We started our journey creating handcrafted decorations for intimate celebrations.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-700">Growth & Expansion</h3>
                <p className="text-gray-600 mt-2">
                  By 2018, we expanded to offer custom decorations for large-scale events.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-700">Present Day</h3>
                <p className="text-gray-600 mt-2">
                  Today, Wish Box is a leader in eco-friendly decorations with a global reach.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="py-20 px-10 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <motion.div
            className="w-64 p-4 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-40 bg-purple-500 rounded-t-lg"></div>
            <h3 className="text-xl font-bold mt-4 text-gray-700">Jane Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </motion.div>
          <motion.div
            className="w-64 p-4 bg-gray-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-40 bg-purple-500 rounded-t-lg"></div>
            <h3 className="text-xl font-bold mt-4 text-gray-700">John Smith</h3>
            <p className="text-gray-500">Lead Designer</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
