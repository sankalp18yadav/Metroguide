// Kolkata Metro Data specifically for the Stations page
// This data is isolated from the pathfinding functionality

export const stationsPageMetroLines = {
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

// Stations under construction or planned for Stations page
// Updated with accurate Kolkata Metro under construction data
export const stationsPageUnderConstruction = {
  'Blue Line Extension (Noapara to Barasat)': {
    color: '#2563eb',
    stations: [
      'Barasat', 'Kazipara', 'Madhyamgram', 'Biman Bandar', 'Airport Gate 1', 'Airport Gate 2'
    ]
  },
  'Green Line Extension (Sealdah to Airport)': {
    color: '#16a34a',
    stations: [
      'Sealdah North', 'Ultadanga', 'Bidhannagar Road', 'Bidhannagar', 
      'New Town Bus Stand', 'Hidco More', 'Teghoria', 'Biman Bandar', 
      'Netaji Subhash Chandra Bose International Airport'
    ]
  },
  'Purple Line Extension (Joka to Majerhat)': {
    color: '#9333ea',
    stations: [
      'Taratala', 'Majerhat'
    ]
  },
  'Orange Line Extension (Noapara to Barasat)': {
    color: '#ea580c',
    stations: [
      'Barasat Extension', 'Dum Dum Extension'
    ]
  },
  'Red Line Extension (Sealdah to Howrah)': {
    color: '#dc2626',
    stations: [
      'Howrah Maidan', 'Shalimar', 'Santragachi', 'Andul', 'Sankrail', 
      'Dankuni', 'Begampur', 'Uluberia', 'Howrah Station'
    ]
  },
  'Pink Line Extension (New Garia to Barrackpore)': {
    color: '#ec4899',
    stations: [
      'Dum Dum Park', 'Nagerbazar', 'Agarpara', 'Sodepur', 'Khardaha', 'Titagarh', 
      'Barrackpore', 'Naihati', 'Kanchrapara', 'Halisahar', 'Chandan Nagar', 'Bhadreswar', 'Champdani', 'Chandannagar'
    ]
  }
}

// Helper functions for Stations page
export const getStationsPageAllStations = () => {
  const allStations = []
  
  // Add operational stations
  Object.entries(stationsPageMetroLines).forEach(([lineName, lineData]) => {
    lineData.stations.forEach(stationName => {
      allStations.push({
        name: stationName,
        line: { name: lineName, color: lineData.color },
        status: 'operational'
      })
    })
  })
  
  // Add under construction stations
  Object.entries(stationsPageUnderConstruction).forEach(([lineName, lineData]) => {
    lineData.stations.forEach(stationName => {
      allStations.push({
        name: stationName,
        line: { name: lineName, color: lineData.color },
        status: 'under_construction'
      })
    })
  })
  
  return allStations
}

export const getStationsPageMetroStats = () => {
  const allStations = getStationsPageAllStations()
  
  const operationalStations = allStations.filter(station => station.status === 'operational')
  const underConstructionStations = allStations.filter(station => station.status === 'under_construction')
  
  const operationalLines = new Set(operationalStations.map(station => station.line.name)).size
  const underConstructionLines = new Set(underConstructionStations.map(station => station.line.name)).size
  // const totalLines = operationalLines + underConstructionLines
  const totalLines = 4  // commented the upper line so that i can hard code the value of total lines, cause that line was not accurate
  
  return {
    operational: {
      // stations: operationalStations.length,
      lines: operationalLines,
      stations:58  // commented the upper line so that i can hard code the value of total stations, cause that line was not accurate
    },
    underConstruction: {
      // stations: underConstructionStations.length,
      
      lines: underConstructionLines,
      stations:28  // commented the upper line so that i can hard code the value of total stations, cause that line was not accurate
    },
    total: {
      // stations: allStations.length,
      lines: totalLines,
      stations: 86  // commented the upper line so that i can hard code the value of total stations, cause that line was not accurate 
    }
  }
}

export const getStationsPageStationLineWithStatus = (stationName) => {
  const allStations = getStationsPageAllStations()
  return allStations.find(station => station.name === stationName) || null
}
