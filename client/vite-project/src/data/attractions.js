// Comprehensive tourist attractions and regional places in Kolkata
export const kolkataAttractions = [
  // Historical Places
  {
    id: 1,
    name: "Victoria Memorial",
    description: "Iconic marble monument dedicated to Queen Victoria, now a museum showcasing British colonial history",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://images.pexels.com/photos/16294/pexels-photo.jpg",
    category: "Historical"
  },
  {
    id: 2,
    name: "Fort William",
    description: "Historic British fort built in 1696, now headquarters of the Eastern Command of Indian Army",
    nearbyStations: ["Maidan", "Esplanade"],
    image: "https://en.banglapedia.org/images/5/59/FortWilliamKolkata.jpg",
    category: "Historical"
  },
  {
    id: 3,
    name: "Marble Palace",
    description: "19th-century mansion with marble walls and floors, featuring European sculptures and paintings",
    nearbyStations: ["Shyambazar", "Sovabazar-Sutanuti"],
    image: "https://kolkatatourism.travel/images/places-to-visit/headers/marble-palace-mansion-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    category: "Historical"
  },
  {
    id: 4,
    name: "South Park Street Cemetery",
    description: "Historic colonial cemetery with Gothic monuments and tombs of British officials",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2023/05/ksp_4770-2-2.jpg?w=1250&h=",
    category: "Historical"
  },
  {
    id: 5,
    name: "Writers' Building",
    description: "Historic government building that served as the secretariat of West Bengal",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnGCs3gdKr0otg_ARCUnXr1qS237026VF2A&s",
    category: "Historical"
  },
  {
    id: 6,
    name: "Raj Bhavan",
    description: "Official residence of the Governor of West Bengal, former Government House",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpgA5rf2PPzwpbm47h7vGZbj1dMIUij5Y_g&s",
    category: "Historical"
  },

  // Religious Places
  {
    id: 7,
    name: "Dakshineswar Kali Temple",
    description: "Sacred Hindu temple dedicated to Goddess Kali, associated with Sri Ramakrishna",
    nearbyStations: ["Dakshineswar"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG",
    category: "Religious"
  },
  {
    id: 8,
    name: "Kalighat Temple",
    description: "Ancient temple dedicated to Goddess Kali, one of the 51 Shakti Peethas",
    nearbyStations: ["Kalighat"],
    image: "https://www.trawell.in/admin/images/upload/555418767Kolkata_Kalighat_Temple_Main.jpg",
    category: "Religious"
  },
  {
    id: 9,
    name: "Belur Math",
    description: "Headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda",
    nearbyStations: ["Dakshineswar", "Baranagar"],
    image: "https://preview.redd.it/what-is-belur-math-exactly-v0-302tjeznuhpc1.jpeg?auto=webp&s=e6ef373f64f58c6a1bc1014712a225c5f008e5c5",
    category: "Religious"
  },
  {
    id: 10,
    name: "St. Paul's Cathedral",
    description: "Anglican cathedral and the first episcopal church in Asia",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/65/75/3b/st-paul-s-cathedral.jpg?w=1200&h=1200&s=1",
    category: "Religious"
  },
  {
    id: 11,
    name: "Nakhoda Mosque",
    description: "Principal mosque of Kolkata, built in Indo-Saracenic style",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwajd5dWRKY6ncYoEDZm8_pL-zuloSUnDbcQ&s",
    category: "Religious"
  },
  {
    id: 12,
    name: "Birla Mandir",
    description: "Modern Hindu temple dedicated to Lord Krishna and Radha",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://d3k1i85mml78tf.cloudfront.net/Blogs/1650298900679_post_image_1.jpg",
    category: "Religious"
  },
  {
    id: 13,
    name: "Jain Temple Pareshnath",
    description: "Beautiful Jain temple known for its intricate architecture and peaceful atmosphere",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Calcutta_Jain_Temple-Sheetalnath_Mandir-P1080642.jpg",
    category: "Religious"
  },

  // Cultural Places
  {
    id: 14,
    name: "Indian Museum",
    description: "Oldest and largest museum in India with rare collections of antiques and artifacts",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZgi-7h0G6DiOvD3AeZxi-HgtXA4aYbdOs5w&s",
    category: "Cultural"
  },
  {
    id: 15,
    name: "Academy of Fine Arts",
    description: "Premier institution for fine arts with galleries showcasing contemporary and traditional art",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://www.theatreroad.com/image.php?src=https://www.theatreroad.com/uploads/images/c197d6ada66ea07dc7410e3f48a2deea.jpg&h=416&zc=1&s=1",
    category: "Cultural"
  },
  {
    id: 16,
    name: "Rabindra Bharati Museum",
    description: "Museum dedicated to Nobel laureate Rabindranath Tagore's life and works",
    nearbyStations: ["Girish Park", "Sovabazar-Sutanuti"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/1f/70/20/rabindra-bharati-university.jpg?w=900&h=-1&s=1",
    category: "Cultural"
  },
  {
    id: 17,
    name: "Netaji Bhawan",
    description: "Ancestral home of Netaji Subhas Chandra Bose, now a museum",
    nearbyStations: ["Kalighat", "Jatin Das Park"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwnap0qq-tBrQD93FEQHVqLQR7hnElf9C0pw&s",
    category: "Cultural"
  },
  {
    id: 18,
    name: "Tagore House",
    description: "Ancestral home of the Tagore family, birthplace of Rabindranath Tagore",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/d6/b8/14/tagore-house-calcutta.jpg?w=900&h=-1&s=1",
    category: "Cultural"
  },
  {
    id: 19,
    name: "Kala Mandir",
    description: "Cultural center hosting theater performances, concerts, and cultural events",
    nearbyStations: ["Rabindra Sadan", "Maidan"],
    image: "https://content.jdmagicbox.com/v2/comp/kolkata/79/033p8000079/catalogue/kala-mandir-auditorium-park-circus-kolkata-auditoriums-0iVnNqL8lg-250.jpg",
    category: "Cultural"
  },

  // Educational Places
  {
    id: 20,
    name: "Science City",
    description: "Largest science center in the Indian subcontinent with interactive exhibits",
    nearbyStations: ["Rabindra Sarobar", "Tollygunge"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKTsR5SIjnjLAjKyXjVGhn61Mw674ix4IsA&s",
    category: "Educational"
  },
  {
    id: 21,
    name: "Birla Planetarium",
    description: "One of the largest planetariums in Asia with astronomy shows and exhibitions",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://www.indiaeasytrip.com/states-of-india/places-to-visit-in-kolkata/birla-planetarium.jpg",
    category: "Educational"
  },
  {
    id: 22,
    name: "Alipore Zoo",
    description: "One of the oldest zoos in India, home to diverse wildlife species",
    nearbyStations: ["Kalighat", "Jatin Das Park"],
    image: "https://kolkataa.weebly.com/uploads/1/1/3/9/11398851/3882976.jpg",
    category: "Educational"
  },
  {
    id: 23,
    name: "Aquatica",
    description: "Water theme park with thrilling rides and water attractions",
    nearbyStations: ["New Garia", "Kavi Nazrul"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJY8op1cOB-GMgbaZa0GcPTyRL7_nPXBvcatZOmVp-cLH_ZwzV3XtWOAzVR6mxHRetohg&usqp=CAU",
    category: "Educational"
  },

  // Shopping Places
  {
    id: 24,
    name: "New Market",
    description: "Historic shopping complex in central Kolkata, famous for variety of goods",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/New_Market%2C_Kolkata%2C_2011.jpg",
    category: "Shopping"
  },
  {
    id: 25,
    name: "Gariahat Market",
    description: "Popular shopping destination for traditional Bengali sarees and handicrafts",
    nearbyStations: ["Rabindra Sarobar", "Kalighat"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/c2/6c/6f/gariahat-market.jpg?w=900&h=500&s=1",
    category: "Shopping"
  },
  {
    id: 26,
    name: "College Street",
    description: "Famous book market, largest second-hand book market in the world",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://i.ytimg.com/vi/cABh0jL7nUA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCDcIgizZhjR5JmyGwn9ag3hC-Omw",
    category: "Shopping"
  },
  {
    id: 27,
    name: "Shyama Charan Street",
    description: "Traditional market known for ethnic wear and Bengali handicrafts",
    nearbyStations: ["Shyama Charan", "Shyambazar"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBU_eZfm53eqgmGlRJdUBGJD0z9USxp6WjA&s",
    category: "Shopping"
  },
  {
    id: 28,
    name: "Hatibagan Market",
    description: "Local market famous for fresh fish, vegetables, and daily essentials",
    nearbyStations: ["Shyambazar", "Sovabazar-Sutanuti"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qDNKCkmRgEsn6A8IHCGN04xeLMLfELnTBw&s",
    category: "Shopping"
  },
  {
    id: 29,
    name: "Burrabazar",
    description: "One of the largest wholesale markets in India for textiles and goods",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxSu1gxy5wfjJwUop7U51Hsg4z-Vm9jwOKg&s",
    category: "Shopping"
  },

  // Landmarks
  {
    id: 30,
    name: "Howrah Bridge",
    description: "Famous cantilever bridge over the Hooghly River, iconic symbol of Kolkata",
    nearbyStations: ["Howrah", "Howrah Maidan"],
    image: "https://indiano.travel/wp-content/uploads/2022/03/Kolkata.webp",
    category: "Landmark"
  },
  {
    id: 31,
    name: "Vidyasagar Setu",
    description: "Cable-stayed bridge connecting Kolkata and Howrah, second Hooghly bridge",
    nearbyStations: ["Howrah", "Esplanade"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZqx7Cob62hrL4eQcozMi2Iy_cBuhwh_eQw&s",
    category: "Landmark"
  },
  {
    id: 32,
    name: "Shaheed Minar",
    description: "Historic monument commemorating the martyrs of Indian independence",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://kolkatatourism.travel/images//tourist-places/shaheed-minar-kolkata/shaheed-minar-kolkata-tourism-holidays-closed-on-timings.jpg",
    category: "Landmark"
  },
  {
    id: 33,
    name: "Millennium Park",
    description: "Riverside park along the Hooghly River with beautiful city views",
    nearbyStations: ["Howrah", "Esplanade"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXIpgZnekMw-NljcvW5mLF0qIEO2lyz5neg&s",
    category: "Landmark"
  },

  // Sports & Recreation
  {
    id: 34,
    name: "Eden Gardens",
    description: "Historic cricket stadium and one of the largest in the world",
    nearbyStations: ["Maidan", "Esplanade"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmpzQhgnv4cc0htP4A2tfWGAHdqa2wVmNmQ&s",
    category: "Sports"
  },
  {
    id: 35,
    name: "Salt Lake Stadium",
    description: "Multi-purpose stadium, one of the largest football stadiums in the world",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUEjraj9RnrhIE3AAWycsscxstT7RM_reFw&s",
    category: "Sports"
  },
  {
    id: 36,
    name: "Maidan",
    description: "Large urban park, the lungs of Kolkata with various sports facilities",
    nearbyStations: ["Maidan", "Park Street"],
    image: "https://sceneloc8.com/wp-content/uploads/2024/03/5-44.png",
    category: "Sports"
  },
  {
    id: 37,
    name: "Rabindra Sarobar",
    description: "Artificial lake and recreational area, popular for morning walks and boating",
    nearbyStations: ["Rabindra Sarobar", "Tollygunge"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHau_pQFMM3Pbx7BFIpgoIdYpIg9HJJ-N7iQ&s",
    category: "Sports"
  },

  // Entertainment
  {
    id: 38,
    name: "Nicco Park",
    description: "Amusement park with thrilling rides and entertainment for families",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://indiano.travel/wp-content/uploads/2023/08/Nicco-Park_-Kolkata-2.webp",
    category: "Entertainment"
  },
  {
    id: 39,
    name: "Eco Park",
    description: "Large urban park with lakes, gardens, and recreational activities",
    nearbyStations: ["New Town", "Baguiati"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Eco_Park_Ticket_Counter.jpg/1280px-Eco_Park_Ticket_Counter.jpg",
    category: "Entertainment"
  },
  {
    id: 40,
    name: "Quest Mall",
    description: "Modern shopping mall with retail stores, restaurants, and entertainment",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWU9KWPbBt3J_ykttFNO-8lyObSDm414kNw&s",
    category: "Entertainment"
  },

  // Food & Culture
  {
    id: 41,
    name: "Park Street",
    description: "Famous street known for restaurants, pubs, and nightlife",
    nearbyStations: ["Park Street"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxSvxXgs_rZx2_oSJJ9LTxQoOkqUdJ_hn_g&s",
    category: "Food"
  },
  {
    id: 42,
    name: "Kumartuli",
    description: "Traditional potter's quarter famous for clay idol making",
    nearbyStations: ["Sovabazar-Sutanuti", "Girish Park"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9rCSszXrU34W66VmHX4ZeCiw507_EXQp6w&s",
    category: "Cultural"
  },
  {
    id: 43,
    name: "Chinatown",
    description: "Historic Chinese settlement with authentic Chinese restaurants and culture",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifSkY8VRc0n5NAGTZDFutAVb9Em4jIA2N-Q&s",
    category: "Food"
  },
  {
    id: 44,
    name: "Coffee House",
    description: "Historic coffee house, intellectual hub and cultural meeting place",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LVn9Z2_m76eN5U1QzkyPEwHKpVlTlVI2ug&s",
    category: "Food"
  },

  // Heritage & Architecture
  {
    id: 45,
    name: "High Court",
    description: "Historic building housing the Calcutta High Court, architectural marvel",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Calcutta_highcourt.jpg",
    category: "Historical"
  },
  {
    id: 46,
    name: "General Post Office",
    description: "Historic post office building with impressive colonial architecture",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsK8rE8kGd-QP72hKMRBWu5uK_CJP_LyInGbhYVnTEBQFKSnyc6Y32TFS_640TdekFwG_5sevR1ccCGDtMu3EjWdsGI0fE9X-T84DqO1dvbVL53amamCy1hwfqpO0v4SX8uUZEC12V6Jc/s1600/GPO+Front+Final.jpg",
    category: "Historical"
  },
  {
    id: 47,
    name: "Town Hall",
    description: "Neoclassical building housing various cultural and administrative offices",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://kolkatatourism.travel/images/places-to-visit/headers/town-hall-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    category: "Historical"
  },
  {
    id: 48,
    name: "Armenian Church",
    description: "Historic Armenian Apostolic church, one of the oldest in Kolkata",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://kolkatatourism.travel/images/places-to-visit/headers/armenian-church-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    category: "Religious"
  },

  // Modern Attractions
  {
    id: 49,
    name: "Mother House",
    description: "Mother Teresa's residence and final resting place, now a pilgrimage site",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3a/aa/ec/photo4jpg.jpg?w=1200&h=1200&s=1",
    category: "Religious"
  },
  {
    id: 50,
    name: "Prinsep Ghat",
    description: "Historic ghat on the Hooghly River with beautiful sunset views",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://www.backpacknxplore.com/wp-content/uploads/2023/08/Sunset-princep.jpg",
    category: "Landmark"
  },
  {
    id: 51,
    name: "Babu Ghat",
    description: "Historic bathing ghat on the Hooghly River, popular for evening walks",
    nearbyStations: ["Esplanade", "Maidan"],
    image: "https://kolkatatourism.travel/images/places-to-visit/headers/babughat-kolkata-header-kolkata-tourism.jpg.jpg",
    category: "Landmark"
  },
  {
    id: 52,
    name: "Botanical Garden",
    description: "Historic botanical garden famous for the Great Banyan Tree",
    nearbyStations: ["Howrah", "Howrah Maidan"],
    image: "https://i0.wp.com/footlooseforever.com/wp-content/uploads/2015/01/garden-path1.jpg?fit=1200%2C848&ssl=1",
    category: "Educational"
  },

  // Additional Cultural Sites
  {
    id: 53,
    name: "Jorasanko Thakur Bari",
    description: "Ancestral home of Rabindranath Tagore, now Rabindra Bharati University",
    nearbyStations: ["Girish Park", "Central"],
    image: "https://kolkatatourism.travel/images/places-to-visit/headers/jorasanko-thakurbari-house-of-the-thakurs-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
    category: "Cultural"
  },
  {
    id: 54,
    name: "Ramakrishna Mission Institute",
    description: "Educational and spiritual institution founded by Swami Vivekananda",
    nearbyStations: ["Tollygunge", "Rabindra Sarobar"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRuRnTigsp8Q6B-ZoNt9m26XGIcLzsK8WEA&s",
    category: "Educational"
  },
  {
    id: 55,
    name: "Calcutta University",
    description: "One of the oldest universities in India, historic educational institution",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaupaCY7BDPzbkrqn6uSM6HRbJIpyEHvyMxg&s",
    category: "Educational"
  },
  {
    id: 56,
    name: "Presidency University",
    description: "Premier educational institution with rich academic heritage",
    nearbyStations: ["Central", "Mahatma Gandhi Road"],
    image: "https://www.presiuniv.ac.in/web/img/IMG-20230705-WA0001.jpg",
    category: "Educational"
  },

  // Religious Diversity
  {
    id: 57,
    name: "Tipu Sultan Mosque",
    description: "Historic mosque built by Tipu Sultan, architectural significance",
    nearbyStations: ["Esplanade", "Central"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kolkata_Tipu_Sultan%27s_Mosque3.jpg",
    category: "Religious"
  },
  {
    id: 58,
    name: "Beth El Synagogue",
    description: "Historic Jewish synagogue, representing Kolkata's Jewish heritage",
    nearbyStations: ["Park Street", "Maidan"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZaY50c-5nU5yyr4diRxTZV4fY5NrbXbIvA&s",
    category: "Religious"
  },
  {
    id: 59,
    name: "Magen David Synagogue",
    description: "Beautiful synagogue showcasing Jewish architectural heritage",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Magen_David_Synagogue_Interiors_after_restoration.jpg/500px-Magen_David_Synagogue_Interiors_after_restoration.jpg",
    category: "Religious"
  },
  {
    id: 60,
    name: "Gurudwara Bhai Joga Singh",
    description: "Sikh temple serving the Sikh community with langar and prayers",
    nearbyStations: ["Central", "Chandni Chowk"],
    image: "https://hblimg.mmtcdn.com/content/hubble/img/ttd_images/mmt/activities/t_ufs/m_Hoshiarpur_Gurudwara_sahib_shaheedan-ladhewal_1_l_480_640.jpg",
    category: "Religious"
  },



]

// Get attractions near specific stations
export const getAttractionsNearStations = (stations) => {
  if (!stations || stations.length === 0) return kolkataAttractions
  
  // Extract station names from path objects (which have a 'stations' property)
  const stationNames = stations.map(station => 
    typeof station === 'string' ? station : station.stations
  )
  
  return kolkataAttractions.filter(attraction =>
    attraction.nearbyStations.some(station =>
      stationNames.includes(station)
    )
  )
}

// Get attractions by category
export const getAttractionsByCategory = (category) => {
  return kolkataAttractions.filter(attraction => attraction.category === category)
}

// Get all categories
export const getCategories = () => {
  return [...new Set(kolkataAttractions.map(attraction => attraction.category))]
}

// Get attractions by search term
export const searchAttractions = (searchTerm) => {
  if (!searchTerm) return kolkataAttractions
  
  const term = searchTerm.toLowerCase()
  return kolkataAttractions.filter(attraction =>
    attraction.name.toLowerCase().includes(term) ||
    attraction.description.toLowerCase().includes(term) ||
    attraction.category.toLowerCase().includes(term) ||
    attraction.nearbyStations.some(station => station.toLowerCase().includes(term))
  )
}

// Get random featured attractions
export const getFeaturedAttractions = (count = 6) => {
  const shuffled = [...kolkataAttractions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}