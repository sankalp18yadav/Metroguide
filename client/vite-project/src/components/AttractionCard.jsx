import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const AttractionCard = ({ attraction, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
            {attraction.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {attraction.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {attraction.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FiMapPin className="text-blue-500" />
          <span>Near: {attraction.nearbyStations.join(', ')}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default AttractionCard