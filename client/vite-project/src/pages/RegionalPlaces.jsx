import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFilter, FiMapPin } from 'react-icons/fi'
import AttractionCard from '../components/AttractionCard'
import { kolkataAttractions, getAttractionsByCategory, getCategories } from '../data/attractions'

const RegionalPlaces = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = getCategories()

  const filteredAttractions = selectedCategory === 'all' 
    ? kolkataAttractions 
    : getAttractionsByCategory(selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
          <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-600 to-red-500 bg-clip-text text-transparent">Regional Places</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-bold"
              style={{fontFamily: "'Nothing You Could Do', cursive"}}>
            Discover the <span className="relative z-10 text-blue-500">rich cultural heritage </span>and famous landmarks of Kolkata, all accessible via metro
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-slate-700"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiFilter className="text-blue-500 text-xl" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Filter by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              All Places ({kolkataAttractions.length})
            </button>
            {categories.map(category => {
              const count = getAttractionsByCategory(category).length
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredAttractions.map((attraction, index) => (
            <motion.div key={attraction.id} variants={itemVariants}>
              <AttractionCard attraction={attraction} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredAttractions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700"
          >
            <FiMapPin className="text-4xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No places found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category to explore more places.
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-orange-400 to-red-600 rounded-xl p-6 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {categories.map(category => {
                const count = getAttractionsByCategory(category).length
                return (
                  <div key={category}>
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm opacity-90">{category}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RegionalPlaces