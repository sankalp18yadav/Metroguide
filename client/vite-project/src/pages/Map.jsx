import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiZoomIn, FiMap } from 'react-icons/fi';

const Map = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kolkata_Metro_map.svg';
    link.download = 'KolkataMetroMap.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-600 to-red-500 bg-clip-text text-transparent">Metro Network Map</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-bold"
              style={{fontFamily: "'Nothing You Could Do', cursive"}}>
            Complete visual guide to <span className="relative z-10 text-blue-500">Kolkata's metro system with all lines and stations</span>
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700"
        >
          {/* Map Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Kolkata Metro Network</h2>
                <p className="opacity-90">Interactive metro map with all operational lines</p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiZoomIn />
                  Zoom
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiDownload />
                  Download
                </motion.button>
              </div>
            </div>
          </div>

          {/* Map Display */}
          <div className="relative bg-white dark:bg-slate-900 p-4 flex justify-center items-center overflow-x-auto">
            <img
              src="/Kolkata_Metro_map.svg"
              alt="Kolkata Metro Map"
              className="max-w-full h-auto object-contain rounded-lg border dark:border-slate-700"
            />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Metro Lines</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Blue Line', color: 'blue', desc: 'North-South Corridor' },
              { name: 'Green Line', color: 'green', desc: 'East-West Corridor' },
              { name: 'Purple Line', color: 'purple', desc: 'Joka-Esplanade' },
              { name: 'Orange Line', color: 'orange', desc: 'New Town Extension' },
            ].map((line) => (
              <div
                key={line.name}
                className={`flex items-center gap-3 p-3 bg-${line.color}-50 dark:bg-${line.color}-900/20 rounded-lg`}
              >
                <div className={`w-4 h-4 bg-${line.color}-500 rounded-full`}></div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">{line.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{line.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <FiMap className="text-blue-600 dark:text-blue-400 text-xl" />,
              title: 'Complete Network',
              text: 'View all metro lines and stations across Kolkata\'s extensive network',
            },
            {
              icon: <FiZoomIn className="text-green-600 dark:text-green-400 text-xl" />,
              title: 'Interactive Features',
              text: 'Zoom, pan, and explore detailed station information',
            },
            {
              icon: <FiDownload className="text-purple-600 dark:text-purple-400 text-xl" />,
              title: 'Offline Access',
              text: 'Download high-resolution maps for offline reference',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 text-center"
            >
              <div
                className="w-12 h-12 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: feature.icon.props.className.includes('blue')
                    ? '#cce4f6'
                    : feature.icon.props.className.includes('green')
                    ? '#d1f3db'
                    : '#e6d9f7'
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
