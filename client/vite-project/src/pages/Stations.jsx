import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi'
import { stationsPageMetroLines, stationsPageUnderConstruction, getStationsPageAllStations, getStationsPageStationLineWithStatus, getStationsPageMetroStats } from '../data/stationsPageData'

const Stations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLine, setSelectedLine] = useState('all')
  const [showStatus, setShowStatus] = useState('all') // all, operational, under_construction

  const allStationsWithStatus = getStationsPageAllStations()
  const stats = getStationsPageMetroStats()
  
  const filteredStations = allStationsWithStatus.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLine = selectedLine === 'all' || station.line.name === selectedLine
    const matchesStatus = showStatus === 'all' || station.status === showStatus
    
    return matchesSearch && matchesLine && matchesStatus
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Get all lines including under construction
  const allLines = [
    ...Object.keys(stationsPageMetroLines),
    ...Object.keys(stationsPageUnderConstruction)
  ]

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
          <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-600 to-red-500 bg-clip-text text-transparent">Metro Stations</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-bold"
              style={{fontFamily: "'Nothing You Could Do', cursive"}}>
            <span className="relative z-10 text-blue-500">Explore all metro stations</span> across Kolkata's extensive network, <span className="relative z-10 text-blue-500">including upcoming stations</span>
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle className="text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Operational</span>
            </div>
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">{stats.operational.stations}</div>
            <div className="text-xs text-green-600 dark:text-green-400">Stations</div>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Under Construction</span>
            </div>
            <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">{stats.underConstruction.stations}</div>
            <div className="text-xs text-orange-600 dark:text-orange-400">Stations</div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <FiMapPin className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Lines</span>
            </div>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">{stats.total.lines}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Metro Lines</div>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <FiMapPin className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Total Stations</span>
            </div>
            <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">{stats.total.stations}</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">All Stations</div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-slate-700"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Line Filter */}
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Lines</option>
              {allLines.map(lineName => (
                <option key={lineName} value={lineName}>
                  {lineName}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={showStatus}
              onChange={(e) => setShowStatus(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Stations</option>
              <option value="operational">Operational Only</option>
              <option value="under_construction">Under Construction</option>
            </select>
          </div>
        </motion.div>

        {/* Stations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredStations.map((station, index) => {
            const isOperational = station.status === 'operational'
            return (
              <motion.div
                key={`${station.name}-${station.status}`}
                variants={itemVariants}
                whileHover={{ scale: isOperational ? 1.02 : 1.01, y: -2 }}
                className={`bg-white dark:bg-slate-800 rounded-lg p-4 border shadow-sm hover:shadow-md transition-all duration-200 ${
                  isOperational 
                    ? 'border-gray-200 dark:border-slate-700 cursor-pointer' 
                    : 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isOperational 
                        ? 'bg-gray-100 dark:bg-slate-700' 
                        : 'bg-orange-100 dark:bg-orange-900/30'
                    }`}>
                      {isOperational ? (
                        <FiCheckCircle className="text-green-600 dark:text-green-400" />
                      ) : (
                        <FiClock className="text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate ${
                      isOperational 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-orange-900 dark:text-orange-100'
                    }`}>
                      {station.name}
                    </h3>
                    {station.line && (
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: station.line.color }}
                        />
                        <span className={`text-sm ${
                          isOperational 
                            ? 'text-gray-600 dark:text-gray-400' 
                            : 'text-orange-700 dark:text-orange-300'
                        }`}>
                          {station.line.name}
                        </span>
                      </div>
                    )}
                    {!isOperational && (
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                          Under Construction
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* No Results */}
        {filteredStations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700"
          >
            <FiSearch className="text-4xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No stations found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters.
            </p>
          </motion.div>
        )}

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Legend</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Operational Stations</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Currently serving passengers with full metro connectivity
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiClock className="text-orange-600 dark:text-orange-400 text-xl" />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Under Construction</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Planned or under construction, not available for route planning
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Stations