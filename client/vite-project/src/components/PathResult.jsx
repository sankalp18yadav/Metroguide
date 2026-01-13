import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiRefreshCw } from 'react-icons/fi';

const PathResult = ({ path, source, destination }) => {
  if (!path || path.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center"
      >
        <div className="text-red-600 dark:text-red-400 text-lg font-semibold mb-2">
          No Route Found
        </div>
        <p className="text-red-500 dark:text-red-300">
          Sorry, we couldn't find a route between {source} and {destination}.
        </p>
      </motion.div>
    );
  }

  // Get line changes by comparing linecolor of consecutive stations
  const getLineChanges = (path) => {
    const changes = [];
    for (let i = 1; i < path.length; i++) {
      if (path[i].linecolor !== path[i - 1].linecolor) {
        changes.push({
          station: path[i].stations,
          fromLine: path[i - 1].linecolor,
          toLine: path[i].linecolor,
        });
      }
    }
    return changes;
  };

  const lineChanges = getLineChanges(path);
  const totalStations = path.length;
  const estimatedTime = Math.ceil(totalStations * 2.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Route Found!</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-1 rounded">
              {totalStations} stations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-1 rounded">
              ~{estimatedTime} minutes
            </span>
          </div>
          {lineChanges.length > 0 && (
            <div className="flex items-center gap-2">
              <FiRefreshCw className="text-sm" />
              <span className="bg-white/20 px-2 py-1 rounded">
                {lineChanges.length} line change{lineChanges.length > 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Path */}
      <div className="p-6">
        <div className="space-y-3">
          {path.map((station, index) => {
            const isSource = index === 0;
            const isDestination = index === path.length - 1;
            const lineChange = lineChanges.find(change => change.station === station.stations);

            return (
              <div key={station._id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  {/* Dot */}
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    isSource || isDestination
                      ? 'bg-blue-500 border-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500'
                  }`} />

                  {/* Station Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-medium ${
                        isSource || isDestination
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-900 dark:text-gray-100'
                      }`}>
                        {station.stations}
                      </span>

                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          color: station.linecolor,
                          backgroundColor: `${station.linecolor}20`
                        }}
                      >
                        {station.linecolor} Line
                      </span>

                      {isSource && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                          Start
                        </span>
                      )}
                      {isDestination && (
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium rounded-full">
                          End
                        </span>
                      )}
                    </div>

                    {/* Line Change Notification */}
                    {lineChange && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <FiRefreshCw className="text-yellow-600 dark:text-yellow-400" />
                          <span className="text-yellow-800 dark:text-yellow-200 font-medium">
                            Change from{' '}
                            <span style={{ color: lineChange.fromLine }}>
                              {lineChange.fromLine}
                            </span>{' '}
                            to{' '}
                            <span style={{ color: lineChange.toLine }}>
                              {lineChange.toLine}
                            </span>{' '}
                            at {lineChange.station}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Connecting line */}
                {index < path.length - 1 && (
                  <div className="ml-2 w-0.5 h-6 bg-gray-300 dark:bg-gray-600" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default PathResult;
