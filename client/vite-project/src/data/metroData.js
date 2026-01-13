// Kolkata Metro Network Data for Pathfinding
export const metroLines = {
  'Blue Line (Line 1)': {
    color: '#2563eb',
    stations: [
      'Dakshineswar', 'Baranagar', 'Dum Dum', 'Noapara', 'Belgachia', 'Shyambazar', 
      'Shobhabazar-Sutanuti', 'Girish Park', 'Mahatma Gandhi Road', 'Central', 
      'Chandni Chowk', 'Esplanade', 'Park Street', 'Maidan', 'Rabindra Sadan', 
      'Netaji Bhavan', 'Jatin Das Park', 'Kalighat', 'Rabindra Sarobar', 'Mahanayak Uttam Kumar', 
      'Tollygunge', 'Netaji', 'Masterda Surya Sen', 'Gitanjali', 'Kavi Nazrul', 
      'Shahid Khudiram', 'Kavi Subhash', 'Hemanta Mukhopadhyay', 'New Garia'
    ]
  },
  'Green Line (Line 2)': {
    color: '#16a34a',
    stations: [
      'Howrah Maidan', 'Howrah', 'Mahakaran', 'Esplanade', 'Park Street', 'Maidan', 
      'Rabindra Sadan', 'Netaji Bhavan', 'Jatin Das Park', 'Kalighat', 'Rabindra Sarobar', 
      'Mahanayak Uttam Kumar', 'Tollygunge', 'Netaji', 'Masterda Surya Sen', 'Gitanjali', 
      'Kavi Nazrul', 'Shahid Khudiram', 'Kavi Subhash', 'Hemanta Mukhopadhyay', 'New Garia'
    ]
  },
  'Purple Line (Line 3)': {
    color: '#9333ea',
    stations: [
      'Joka', 'Thakurpukur', 'Sakher Bazar', 'Behala Chowrasta', 'Behala Bazar', 
      'New Alipore', 'Jatin Das Park', 'Kalighat', 'Rabindra Sadan', 'Maidan', 
      'Park Street', 'Esplanade', 'Central', 'Mahatma Gandhi Road', 'Girish Park', 
      'Shobhabazar-Sutanuti', 'Shyambazar', 'Belgachia', 'Dum Dum', 'Noapara', 'Baranagar', 'Dakshineswar'
    ]
  },
  'Orange Line (Line 4)': {
    color: '#ea580c',
    stations: [
      'Noapara', 'Baranagar', 'Dum Dum', 'Belgachia', 'Shyambazar', 'Shobhabazar-Sutanuti', 
      'Girish Park', 'Mahatma Gandhi Road', 'Central', 'Esplanade', 'Park Street', 
      'Maidan', 'Rabindra Sadan', 'Netaji Bhavan', 'Jatin Das Park', 'Kalighat'
    ]
  },
  'Red Line (Line 5)': {
    color: '#dc2626',
    stations: [
      'Sector V', 'Karunamoyee', 'Central Park', 'City Centre', 'Bengal Chemical', 
      'Salt Lake Stadium', 'Phool Bagan', 'Sealdah'
    ]
  },
  'Pink Line (Line 6)': {
    color: '#ec4899',
    stations: [
      'Hemanta Mukhopadhyay', 'Kavi Subhash', 'Gitanjali', 'Kavi Nazrul', 
      'Shahid Khudiram', 'Netaji', 'Masterda Surya Sen'
    ]
  }
}

// Stations under construction or planned
export const underConstructionStations = {
  'Blue Line Extension': {
    color: '#2563eb',
    stations: [
      'Barasat', 'Kazipara', 'Madhyamgram', 'Biman Bandar', 'Airport Gate 1', 'Airport Gate 2'
    ]
  },
  'Green Line Extension': {
    color: '#16a34a',
    stations: [
      'Phoolbagan', 'Sealdah North', 'Ultadanga', 'Bidhannagar Road', 'Bidhannagar', 
      'New Town Bus Stand', 'Hidco More', 'Teghoria', 'Biman Bandar', 
      'Netaji Subhash Chandra Bose International Airport'
    ]
  },
  'Purple Line Extension': {
    color: '#9333ea',
    stations: [
      'Taratala', 'Majerhat', 'Joka Extension', 'Behala Chowrasta Extension'
    ]
  },
  'Orange Line Extension': {
    color: '#ea580c',
    stations: [
      'Noapara Extension', 'Barasat Extension', 'Dum Dum Extension'
    ]
  },
  'Red Line Extension': {
    color: '#dc2626',
    stations: [
      'Howrah Maidan Extension', 'Shalimar', 'Santragachi', 'Andul', 'Sankrail', 
      'Dankuni', 'Begampur', 'Uluberia', 'Howrah Station'
    ]
  },
  'Pink Line Extension': {
    color: '#ec4899',
    stations: [
      'Dum Dum Park', 'Nagerbazar', 'Agarpara', 'Sodepur', 'Khardaha', 'Titagarh', 
      'Barrackpore', 'Naihati', 'Kanchrapara', 'Halisahar', 'Chandan Nagar', 'Bhadreswar', 'Champdani', 'Chandannagar'
    ]
  }
}

// Station connections for pathfinding (only operational stations)
export const stationConnections = {
  // Blue Line
  'Dakshineswar': ['Baranagar'],
  'Baranagar': ['Dakshineswar', 'Noapara'],
  'Noapara': ['Baranagar', 'Dum Dum'],
  'Dum Dum': ['Noapara', 'Belgachia'],
  'Belgachia': ['Dum Dum', 'Shyambazar'],
  'Shyambazar': ['Belgachia', 'Shobhabazar-Sutanuti'],
  'Shobhabazar-Sutanuti': ['Shyambazar', 'Girish Park'],
  'Girish Park': ['Shobhabazar-Sutanuti', 'Mahatma Gandhi Road'],
  'Mahatma Gandhi Road': ['Girish Park', 'Central'],
  'Central': ['Mahatma Gandhi Road', 'Chandni Chowk', 'Esplanade'],
  'Chandni Chowk': ['Central', 'Park Street'],
  'Esplanade': ['Central', 'Maidan', 'Park Street'],
  'Park Street': ['Chandni Chowk', 'Esplanade', 'Maidan'],
  'Maidan': ['Park Street', 'Esplanade', 'Rabindra Sadan'],
  'Rabindra Sadan': ['Maidan', 'Netaji Bhavan'],
  'Netaji Bhavan': ['Rabindra Sadan', 'Jatin Das Park'],
  'Jatin Das Park': ['Netaji Bhavan', 'Kalighat'],
  'Kalighat': ['Jatin Das Park', 'Rabindra Sarobar'],
  'Rabindra Sarobar': ['Kalighat', 'Mahanayak Uttam Kumar'],
  'Mahanayak Uttam Kumar': ['Rabindra Sarobar', 'Tollygunge'],
  'Tollygunge': ['Mahanayak Uttam Kumar', 'Netaji'],
  'Netaji': ['Tollygunge', 'Masterda Surya Sen'],
  'Masterda Surya Sen': ['Netaji', 'Gitanjali'],
  'Gitanjali': ['Masterda Surya Sen', 'Kavi Nazrul'],
  'Kavi Nazrul': ['Gitanjali', 'Shahid Khudiram'],
  'Shahid Khudiram': ['Kavi Nazrul', 'Kavi Subhash'],
  'Kavi Subhash': ['Shahid Khudiram', 'Hemanta Mukhopadhyay'],
  'Hemanta Mukhopadhyay': ['Kavi Subhash', 'New Garia'],
  'New Garia': ['Hemanta Mukhopadhyay'],
  
  // Green Line
  'Howrah Maidan': ['Howrah'],
  'Howrah': ['Howrah Maidan', 'Mahakaran'],
  'Mahakaran': ['Howrah', 'Esplanade'],
  
  // Purple Line
  'Joka': ['Thakurpukur'],
  'Thakurpukur': ['Joka', 'Sakher Bazar'],
  'Sakher Bazar': ['Thakurpukur', 'Behala Chowrasta'],
  'Behala Chowrasta': ['Sakher Bazar', 'Behala Bazar'],
  'Behala Bazar': ['Behala Chowrasta', 'New Alipore'],
  'New Alipore': ['Behala Bazar', 'Jatin Das Park'],
  
  // Orange Line
  'Noapara': ['Baranagar'],
  'Baranagar': ['Noapara', 'Dum Dum'],
  'Dum Dum': ['Baranagar', 'Belgachia'],
  'Belgachia': ['Dum Dum', 'Shyambazar'],
  'Shyambazar': ['Belgachia', 'Shobhabazar-Sutanuti'],
  'Shobhabazar-Sutanuti': ['Shyambazar', 'Girish Park'],
  'Girish Park': ['Shobhabazar-Sutanuti', 'Mahatma Gandhi Road'],
  'Mahatma Gandhi Road': ['Girish Park', 'Central'],
  'Central': ['Mahatma Gandhi Road', 'Esplanade'],
  'Esplanade': ['Central', 'Park Street'],
  'Park Street': ['Esplanade', 'Maidan'],
  'Maidan': ['Park Street', 'Rabindra Sadan'],
  'Rabindra Sadan': ['Maidan', 'Netaji Bhavan'],
  'Netaji Bhavan': ['Rabindra Sadan', 'Jatin Das Park'],
  'Jatin Das Park': ['Netaji Bhavan', 'Kalighat'],
  'Kalighat': ['Jatin Das Park'],

  // Red Line
  'Sector V': ['Karunamoyee'],
  'Karunamoyee': ['Sector V', 'Central Park'],
  'Central Park': ['Karunamoyee', 'City Centre'],
  'City Centre': ['Central Park', 'Bengal Chemical'],
  'Bengal Chemical': ['City Centre', 'Salt Lake Stadium'],
  'Salt Lake Stadium': ['Bengal Chemical', 'Phool Bagan'],
  'Phool Bagan': ['Salt Lake Stadium', 'Sealdah'],
  'Sealdah': ['Phool Bagan'],

  // Pink Line
  'Hemanta Mukhopadhyay': ['Kavi Subhash'],
  'Kavi Subhash': ['Hemanta Mukhopadhyay', 'Gitanjali'],
  'Gitanjali': ['Kavi Subhash', 'Kavi Nazrul'],
  'Kavi Nazrul': ['Gitanjali', 'Shahid Khudiram'],
  'Shahid Khudiram': ['Kavi Nazrul', 'Netaji'],
  'Netaji': ['Shahid Khudiram', 'Masterda Surya Sen'],
  'Masterda Surya Sen': ['Netaji']
}

// Get all unique operational stations
export const getAllStations = () => {
  const stations = new Set()
  Object.values(metroLines).forEach(line => {
    line.stations.forEach(station => stations.add(station))
  })
  return Array.from(stations).sort()
}

// Get all stations including under construction
export const getAllStationsWithStatus = () => {
  const operationalStations = getAllStations().map(station => ({
    name: station,
    status: 'operational',
    line: getStationLine(station)
  }))
  
  const constructionStations = []
  Object.entries(underConstructionStations).forEach(([lineName, lineData]) => {
    lineData.stations.forEach(station => {
      constructionStations.push({
        name: station,
        status: 'under_construction',
        line: { name: lineName, color: lineData.color }
      })
    })
  })
  
  return [...operationalStations, ...constructionStations].sort((a, b) => a.name.localeCompare(b.name))
}

// Get line for a station (operational only)
export const getStationLine = (stationName) => {
  for (const [lineName, lineData] of Object.entries(metroLines)) {
    if (lineData.stations.includes(stationName)) {
      return { name: lineName, color: lineData.color }
    }
  }
  return null
}

// Get line for any station including under construction
export const getStationLineWithStatus = (stationName) => {
  // Check operational stations first
  const operationalLine = getStationLine(stationName)
  if (operationalLine) {
    return { ...operationalLine, status: 'operational' }
  }
  
  // Check under construction stations
  for (const [lineName, lineData] of Object.entries(underConstructionStations)) {
    if (lineData.stations.includes(stationName)) {
      return { name: lineName, color: lineData.color, status: 'under_construction' }
    }
  }
  
  return null
}

// Find shortest path using BFS (only operational stations)
export const findShortestPath = (source, destination) => {
  if (source === destination) return [source]
  
  // Check if both stations are operational
  const sourceOperational = getAllStations().includes(source)
  const destOperational = getAllStations().includes(destination)
  
  if (!sourceOperational || !destOperational) {
    return null // Cannot find path if either station is not operational
  }
  
  const queue = [[source]]
  const visited = new Set([source])
  
  while (queue.length > 0) {
    const path = queue.shift()
    const currentStation = path[path.length - 1]
    
    const connections = stationConnections[currentStation] || []
    
    for (const nextStation of connections) {
      if (nextStation === destination) {
        return [...path, nextStation]
      }
      
      if (!visited.has(nextStation)) {
        visited.add(nextStation)
        queue.push([...path, nextStation])
      }
    }
  }
  
  return null // No path found
}

// Get line changes in a path
export const getLineChanges = (path) => {
  if (!path || path.length < 2) return []
  
  const changes = []
  let currentLine = getStationLine(path[0])
  
  for (let i = 1; i < path.length; i++) {
    const stationLine = getStationLine(path[i])
    if (stationLine && stationLine.name !== currentLine?.name) {
      changes.push({
        station: path[i],
        fromLine: currentLine,
        toLine: stationLine
      })
      currentLine = stationLine
    }
  }
  
  return changes
}

// Get metro network statistics
export const getMetroStats = () => {
  const operationalStations = getAllStations().length
  const operationalLines = Object.keys(metroLines).length
  
  let underConstructionStationsCount = 0
  let underConstructionLinesCount = Object.keys(underConstructionStations).length
  
  Object.values(underConstructionStations).forEach(line => {
    underConstructionStationsCount += line.stations.length
  })
  
  return {
    operational: {
      stations: operationalStations,
      lines: operationalLines
    },
    underConstruction: {
      stations: underConstructionStationsCount,
      lines: underConstructionLinesCount
    },
    total: {
      stations: operationalStations + underConstructionStationsCount,
      lines: operationalLines + underConstructionLinesCount
    }
  }
}

// Check if a station is operational
export const isStationOperational = (stationName) => {
  return getAllStations().includes(stationName)
}

// Get stations by line (operational only)
export const getStationsByLine = (lineName) => {
  const line = metroLines[lineName]
  return line ? line.stations : []
}

// Get all lines with their status
export const getAllLinesWithStatus = () => {
  const operational = Object.entries(metroLines).map(([name, data]) => ({
    name,
    color: data.color,
    stations: data.stations.length,
    status: 'operational'
  }))
  
  const underConstruction = Object.entries(underConstructionStations).map(([name, data]) => ({
    name,
    color: data.color,
    stations: data.stations.length,
    status: 'under_construction'
  }))
  
  return [...operational, ...underConstruction]
}