import { Course, CourseSection, QuizQuestion } from "@/types/course";

// Generate quizzes based on section title
const generateQuizzes = (sectionTitle: string): QuizQuestion[] => {
  switch(sectionTitle) {
    case "The Solar System":
      return [
        {
          question: "What is the correct order of planets from the Sun?",
          options: [
            "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
            "Mercury, Venus, Earth, Mars, Saturn, Jupiter, Uranus, Neptune",
            "Venus, Mercury, Earth, Mars, Jupiter, Saturn, Neptune, Uranus",
            "Mercury, Earth, Venus, Mars, Jupiter, Saturn, Uranus, Neptune"
          ],
          correctAnswer: 0
        },
        {
          question: "Which of these is NOT considered a planet in our Solar System?",
          options: ["Mars", "Pluto", "Neptune", "Saturn"],
          correctAnswer: 1
        },
        {
          question: "Approximately how old is our Solar System?",
          options: ["1 billion years", "4.6 billion years", "10 billion years", "13.8 billion years"],
          correctAnswer: 1
        },
        {
          question: "What object contains approximately 99.8% of all the mass in our Solar System?",
          options: ["Jupiter", "The Sun", "All planets combined", "The asteroid belt"],
          correctAnswer: 1
        },
        {
          question: "What force keeps planets in orbit around the Sun?",
          options: ["Magnetic force", "Nuclear force", "Gravitational force", "Centrifugal force"],
          correctAnswer: 2
        }
      ];
    
    case "The Inner Planets":
      return [
        {
          question: "Which of these is NOT an inner planet?",
          options: ["Mercury", "Venus", "Earth", "Jupiter"],
          correctAnswer: 3
        },
        {
          question: "What distinguishes inner planets from outer planets?",
          options: [
            "Inner planets are made primarily of rock and metal",
            "Inner planets have more moons",
            "Inner planets are larger",
            "Inner planets have ring systems"
          ],
          correctAnswer: 0
        },
        {
          question: "Which is the largest inner planet?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          correctAnswer: 2
        },
        {
          question: "What zone of the Solar System do the inner planets occupy?",
          options: ["Habitable zone", "Frost line", "Terrestrial zone", "Kuiper belt"],
          correctAnswer: 0
        },
        {
          question: "Which inner planet has the longest day?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          correctAnswer: 1
        }
      ];
      
    case "Earth":
      return [
        {
          question: "What percentage of Earth's surface is covered by water?",
          options: ["50%", "60%", "71%", "85%"],
          correctAnswer: 2
        },
        {
          question: "What is Earth's position from the Sun?",
          options: ["First", "Second", "Third", "Fourth"],
          correctAnswer: 2
        },
        {
          question: "How long does it take Earth to complete one orbit around the Sun?",
          options: ["365 days", "365.25 days", "366 days", "364 days"],
          correctAnswer: 1
        },
        {
          question: "What is the name of Earth's magnetic field?",
          options: ["Biosphere", "Magnetosphere", "Atmosphere", "Lithosphere"],
          correctAnswer: 1
        },
        {
          question: "What causes Earth's seasons?",
          options: [
            "Variable distance from the Sun",
            "Earth's axial tilt",
            "Solar flares",
            "Ocean currents"
          ],
          correctAnswer: 1
        }
      ];
      
    case "The Moon":
      return [
        {
          question: "How was the Moon likely formed?",
          options: [
            "It was captured by Earth's gravity",
            "From a collision between Earth and a Mars-sized object",
            "It formed alongside Earth from the solar nebula",
            "It broke off from Earth during early formation"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the approximate diameter of the Moon?",
          options: ["1,000 km", "2,159 km", "3,475 km", "5,000 km"],
          correctAnswer: 2
        },
        {
          question: "What phenomenon is caused by the Moon's gravitational pull on Earth?",
          options: ["Seasons", "Tides", "Earthquakes", "Auroras"],
          correctAnswer: 1
        },
        {
          question: "How long does it take the Moon to complete one orbit around Earth?",
          options: ["24 hours", "7 days", "27.3 days", "30 days"],
          correctAnswer: 2
        },
        {
          question: "What is unusual about the Moon's rotation compared to other satellites?",
          options: [
            "It rotates backward",
            "It shows the same face to Earth at all times",
            "It doesn't rotate at all",
            "It rotates faster than Earth"
          ],
          correctAnswer: 1
        }
      ];
      
    case "The Moon in Our Skies":
      return [
        {
          question: "What causes the phases of the Moon?",
          options: [
            "Earth's shadow on the Moon",
            "The changing angle from which we see the illuminated part of the Moon",
            "Clouds in Earth's atmosphere",
            "The Moon's own light production"
          ],
          correctAnswer: 1
        },
        {
          question: "During which Moon phase is the entire face visible from Earth?",
          options: ["New Moon", "Waxing Crescent", "Full Moon", "Waning Gibbous"],
          correctAnswer: 2
        },
        {
          question: "What is a lunar eclipse?",
          options: [
            "When the Moon passes between Earth and the Sun",
            "When Earth passes between the Moon and the Sun",
            "When the Moon is not visible in the night sky",
            "When the Moon appears larger than usual"
          ],
          correctAnswer: 1
        },
        {
          question: "How often does the Moon rise each day?",
          options: [
            "Exactly once every 24 hours",
            "About 50 minutes later each day",
            "At the exact same time each day",
            "Twice per day"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the 'Harvest Moon'?",
          options: [
            "A special red-colored Moon",
            "The full Moon closest to the autumnal equinox",
            "The largest full Moon of the year",
            "A Moon that appears during daytime"
          ],
          correctAnswer: 1
        }
      ];
      
    case "Mapping the Moon":
      return [
        {
          question: "What are the dark patches visible on the Moon?",
          options: ["Mountains", "Oceans", "Maria (ancient lava flows)", "Forests"],
          correctAnswer: 2
        },
        {
          question: "Which astronauts first mapped the far side of the Moon?",
          options: [
            "Apollo astronauts",
            "Soviet Luna 3 mission (unmanned)",
            "Chinese Chang'e mission",
            "Hubble Space Telescope scientists"
          ],
          correctAnswer: 1
        },
        {
          question: "How are most features on the Moon's surface formed?",
          options: ["Volcanic activity", "Meteor impacts", "Tectonic movement", "Erosion"],
          correctAnswer: 1
        },
        {
          question: "What are lunar 'seas' actually made of?",
          options: ["Water", "Frozen ice", "Basaltic lava", "Silicon dust"],
          correctAnswer: 2
        },
        {
          question: "What is a lunar 'rille'?\",\n          options: [\n            \"A mountain range",
            "A valley or channel on the Moon's surface",
            "A crater chain",
            "A dome-shaped feature"
          ],
          correctAnswer: 1
        }
      ];
      
    case "The Moon's Unseen Face":
      return [
        {
          question: "Why can't we see the far side of the Moon from Earth?",
          options: [
            "It's too dark",
            "It's always facing away from the Sun",
            "The Moon's rotation and orbit are synchronized",
            "Earth's atmosphere blocks the view"
          ],
          correctAnswer: 2
        },
        {
          question: "How does the far side of the Moon differ from the near side?",
          options: [
            "It has more maria (dark areas)",
            "It has fewer craters",
            "It has more craters and fewer maria",
            "It has a different color"
          ],
          correctAnswer: 2
        },
        {
          question: "When was the far side of the Moon first photographed?",
          options: ["1959", "1969", "1972", "1986"],
          correctAnswer: 0
        },
        {
          question: "What spacecraft first landed on the far side of the Moon?",
          options: [
            "Apollo 11",
            "Luna 9",
            "Chang'e 4",
            "Surveyor 1"
          ],
          correctAnswer: 2
        },
        {
          question: "Why is radio astronomy particularly valuable on the far side of the Moon?",
          options: [
            "Higher temperatures allow better signal processing",
            "The Moon blocks Earth's radio interference",
            "Signals from deep space are stronger there",
            "Lunar soil enhances radio reception"
          ],
          correctAnswer: 1
        }
      ];
      
    case "Venus":
      return [
        {
          question: "Why is Venus often called Earth's sister planet?",
          options: [
            "They formed at the same time",
            "They have similar size and mass",
            "They both have oceans",
            "They have similar atmospheres"
          ],
          correctAnswer: 1
        },
        {
          question: "What is the surface temperature on Venus?",
          options: ["100°C (212°F)", "260°C (500°F)", "462°C (864°F)", "600°C (1112°F)"],
          correctAnswer: 2
        },
        {
          question: "What makes Venus's atmosphere so thick?",
          options: [
            "Oxygen and nitrogen",
            "Carbon dioxide and nitrogen",
            "Sulfuric acid clouds",
            "Water vapor"
          ],
          correctAnswer: 1
        },
        {
          question: "In which direction does Venus rotate compared to other planets?",
          options: [
            "Same direction as Earth (counterclockwise)",
            "Opposite direction to Earth (clockwise)",
            "It doesn't rotate",
            "It flips direction periodically"
          ],
          correctAnswer: 1
        },
        {
          question: "What is unusual about a Venusian day compared to its year?",
          options: [
            "It has no day/night cycle",
            "Its day is longer than its year",
            "Its day and year are exactly the same length",
            "It has multiple sunrises per day"
          ],
          correctAnswer: 1
        }
      ];
      
    case "Mercury":
      return [
        {
          question: "What makes Mercury's temperature so extreme?",
          options: [
            "Its proximity to the Sun and lack of substantial atmosphere",
            "Its metallic core generates heat",
            "Volcanic activity across the surface",
            "Its slow rotation causes heat buildup"
          ],
          correctAnswer: 0
        },
        {
          question: "What is the temperature range on Mercury?",
          options: [
            "0°C to 100°C (32°F to 212°F)",
            "-173°C to 427°C (-280°F to 800°F)",
            "-200°C to 200°C (-328°F to 392°F)",
            "100°C to 300°C (212°F to 572°F)"
          ],
          correctAnswer: 1
        },
        {
          question: "How long is a day on Mercury?",
          options: ["24 Earth hours", "59 Earth days", "176 Earth days", "88 Earth days"],
          correctAnswer: 2
        },
        {
          question: "What is Mercury's surface mostly comprised of?",
          options: [
            "Iron deserts",
            "Rocky, cratered terrain similar to the Moon",
            "Ice sheets and glaciers",
            "Liquid metal lakes"
          ],
          correctAnswer: 1
        },
        {
          question: "What causes Mercury's 'wandering' movement as viewed from Earth?",
          options: [
            "Its elliptical orbit",
            "Earth's wobbling axis",
            "Mercury's retrograde rotation",
            "The Sun's gravitational influence"
          ],
          correctAnswer: 0
        }
      ];
      
    case "Messenger at Mercury":
      return [
        {
          question: "What was NASA's first mission to orbit Mercury?",
          options: ["Mariner 10", "Pioneer Venus", "MESSENGER", "BepiColombo"],
          correctAnswer: 2
        },
        {
          question: "What does the MESSENGER acronym stand for?",
          options: [
            "Mercury Surface, Space Environment, Geochemistry, and Ranging",
            "Mercury Exploration and Scientific Study in Elliptical Networked Gravitational Exploration Regime",
            "Mercury Environmental Research and Mapping of Surface Systems Exploration and Navigation by Global Executives Reconnaissance",
            "Mercury Study and Survey of Elemental Nomenclature, Geomorphology, and Radiation"
          ],
          correctAnswer: 0
        },
        {
          question: "What discovery did MESSENGER make about Mercury's poles?",
          options: [
            "Active volcanoes",
            "Frozen water ice",
            "Magnetic anomalies",
            "Atmosphere pockets"
          ],
          correctAnswer: 1
        },
        {
          question: "How did the MESSENGER mission end?",
          options: [
            "It continues to orbit Mercury today",
            "It was redirected to Venus",
            "It crashed into Mercury's surface",
            "It ran out of fuel and is now a derelict satellite"
          ],
          correctAnswer: 2
        },
        {
          question: "What was challenging about sending a spacecraft to Mercury?",
          options: [
            "The high radiation from the Sun",
            "Mercury has a powerful magnetic field that disrupts electronics",
            "The extreme heat and the Sun's gravitational pull",
            "All of the above"
          ],
          correctAnswer: 2
        }
      ];
      
    case "The Sun":
      return [
        {
          question: "What is the Sun primarily composed of?",
          options: ["Oxygen and carbon", "Iron and nickel", "Hydrogen and helium", "Silicon and aluminum"],
          correctAnswer: 2
        },
        {
          question: "What is the Sun's core temperature?",
          options: ["5,500°C", "1 million °C", "15 million °C", "100 million °C"],
          correctAnswer: 2
        },
        {
          question: "What are sunspots?",
          options: [
            "Solar flares visible from Earth",
            "Cooler regions on the Sun's surface",
            "Fusion reaction sites",
            "Holes in the Sun's corona"
          ],
          correctAnswer: 1
        },
        {
          question: "What causes the Sun to shine?",
          options: [
            "Chemical burning",
            "Nuclear fusion",
            "Radioactive decay",
            "Electrical discharge"
          ],
          correctAnswer: 1
        },
        {
          question: "How old is the Sun estimated to be?",
          options: ["1 billion years", "4.6 billion years", "10 billion years", "13.8 billion years"],
          correctAnswer: 1
        }
      ];
      
    case "Close to the Sun":
      return [
        {
          question: "Which NASA mission was designed specifically to study the Sun's corona?",
          options: ["Solar Dynamics Observatory", "Ulysses", "Parker Solar Probe", "Solar and Heliospheric Observatory"],
          correctAnswer: 2
        },
        {
          question: "What is the Sun's corona?",
          options: [
            "The Sun's core",
            "The visible surface of the Sun",
            "The outer atmosphere of the Sun",
            "The Sun's magnetic field"
          ],
          correctAnswer: 2
        },
        {
          question: "What is the 'solar wind'?",
          options: [
            "Strong winds on Earth caused by solar heating",
            "A stream of charged particles ejected from the Sun",
            "The movement of gases inside the Sun",
            "The rotation of the Sun's surface"
          ],
          correctAnswer: 1
        },
        {
          question: "What protects Earth from the full force of the solar wind?",
          options: [
            "Earth's atmosphere",
            "Earth's magnetic field (magnetosphere)",
            "The ozone layer",
            "The Moon's shadow"
          ],
          correctAnswer: 1
        },
        {
          question: "What phenomenon on Earth is directly caused by particles from the Sun?",
          options: [
            "Earthquakes",
            "Hurricanes",
            "Aurora borealis (Northern Lights)",
            "Tsunamis"
          ],
          correctAnswer: 2
        }
      ];
      
    case "Mars":
      return [
        {
          question: "What gives Mars its distinctive red color?",
          options: [
            "Iron oxide (rust) in the soil",
            "Red vegetation",
            "Reflection from its moons",
            "Atmospheric gases"
          ],
          correctAnswer: 0
        },
        {
          question: "What are the names of Mars' two moons?",
          options: [
            "Europa and Ganymede",
            "Titan and Enceladus",
            "Phobos and Deimos",
            "Luna and Charon"
          ],
          correctAnswer: 2
        },
        {
          question: "What is Olympus Mons?",
          options: [
            "A Martian crater",
            "The largest volcano in the solar system",
            "A Martian moon",
            "An ancient Martian sea"
          ],
          correctAnswer: 1
        },
        {
          question: "What evidence suggests Mars once had liquid water?",
          options: [
            "The presence of methane",
            "Channels and valley networks on its surface",
            "Its red color",
            "Its thin atmosphere"
          ],
          correctAnswer: 1
        },
        {
          question: "How long is a day on Mars?",
          options: ["24 hours and 37 minutes", "36 hours", "12 hours", "7 days"],
          correctAnswer: 0
        }
      ];
      
    case "Mars from Above and the Moons of Mars":
      return [
        {
          question: "What are the largest canyons on Mars called?",
          options: [
            "Olympus Canyons",
            "Martian Trenches",
            "Valles Marineris",
            "Tharsis Valleys"
          ],
          correctAnswer: 2
        },
        {
          question: "What is unusual about Phobos compared to most moons?",
          options: [
            "It orbits in the opposite direction of Mars' rotation",
            "It orbits Mars faster than Mars rotates",
            "It's a captured asteroid",
            "It has a substantial atmosphere"
          ],
          correctAnswer: 1
        },
        {
          question: "What will eventually happen to Phobos?",
          options: [
            "It will escape Mars' gravity",
            "It will crash into Mars",
            "It will combine with Deimos",
            "It will become a ring around Mars"
          ],
          correctAnswer: 1
        },
        {
          question: "What geological feature covers much of Mars' northern hemisphere?",
          options: [
            "Olympus Mons",
            "Tharsis Bulge",
            "Northern Lowlands (Vastitas Borealis)",
            "Hellas Basin"
          ],
          correctAnswer: 2
        },
        {
          question: "Which spacecraft first mapped Mars in detail from orbit?",
          options: [
            "Viking 1",
            "Mars Global Surveyor",
            "Mariner 9",
            "Mars Reconnaissance Orbiter"
          ],
          correctAnswer: 2
        }
      ];
      
    case "Roving over Mars":
      return [
        {
          question: "Which was the first rover to successfully operate on Mars?",
          options: ["Curiosity", "Opportunity", "Sojourner", "Perseverance"],
          correctAnswer: 2
        },
        {
          question: "What powered the Opportunity and Spirit rovers?",
          options: [
            "Nuclear power",
            "Solar panels",
            "Batteries only",
            "Hydrogen fuel cells"
          ],
          correctAnswer: 1
        },
        {
          question: "What instrument on the Curiosity rover analyzes Martian soil and rock samples?",
          options: [
            "MOXIE",
            "ChemCam",
            "MAHLI",
            "SAM (Sample Analysis at Mars)"
          ],
          correctAnswer: 3
        },
        {
          question: "What is the main objective of the Perseverance rover mission?",
          options: [
            "To search for evidence of ancient microbial life",
            "To establish a human colony",
            "To mine valuable minerals",
            "To capture Mars' moons"
          ],
          correctAnswer: 0
        },
        {
          question: "What small aircraft accompanied Perseverance to Mars?",
          options: [
            "Mars Flyer",
            "Ingenuity helicopter",
            "RedWing drone",
            "Martian Glider"
          ],
          correctAnswer: 1
        }
      ];
      
    default:
      // Default quiz for any other section
      return [
        {
          question: `What is the primary focus of ${sectionTitle}?`,
          options: ["Planetary formation", "Stellar evolution", "Space exploration", "Astronomical observation"],
          correctAnswer: 2
        },
        {
          question: `Which instrument is most commonly used to study ${sectionTitle}?`,
          options: ["Radio telescope", "Optical telescope", "Spectrometer", "Space probe"],
          correctAnswer: 3
        },
        {
          question: `When did scientists first begin serious study of ${sectionTitle}?`,
          options: ["Ancient times", "17th century", "20th century", "21st century"],
          correctAnswer: 2
        },
        {
          question: `Which space agency has contributed most to our understanding of ${sectionTitle}?`,
          options: ["NASA", "ESA", "Roscosmos", "CNSA"],
          correctAnswer: 0
        },
        {
          question: `What is the biggest challenge in studying ${sectionTitle}?`,
          options: ["Distance", "Atmospheric interference", "Technical limitations", "Funding constraints"],
          correctAnswer: 0
        }
      ];
  }
};

// Create a basic quiz if needed
const createBasicQuiz = (sectionTitle: string): QuizQuestion => {
  return {
    question: `Test your knowledge about ${sectionTitle}`,
    options: [
      "Option A is correct",
      "Option B is incorrect",
      "Option C is incorrect",
      "Option D is incorrect"
    ],
    correctAnswer: 0
  };
};

// Function to generate a mock course
export const generateMockCourse = (
  interest: string = "planets",
  level: string = "beginner",
  learningStyle: string = "visual"
): Course => {
  const courseTitle = `Astronomy ${level} Course for ${interest} Learners`;
  const courseDescription = `This course is designed for ${level} learners who are interested in ${interest}. It is a ${learningStyle} learning style course.`;

  const sections: CourseSection[] = [
    {
      id: "section1",
      title: "The Solar System",
      introduction: "The Solar System is our cosmic neighborhood, comprising the Sun and everything that orbits around it. This includes planets, dwarf planets, moons, asteroids, comets, and more.",
      whyLearn: "Understanding the Solar System helps us comprehend our place in the cosmos and the forces that shape our existence.",
      videoUrl: "https://www.youtube.com/embed/libKVRa01L8",
      keyPoints: [
        "The Solar System formed about 4.6 billion years ago from a cloud of gas and dust",
        "It consists of the Sun, eight planets, dwarf planets, moons, and smaller objects",
        "The four inner planets (Mercury, Venus, Earth, Mars) are rocky, while the outer planets are gas giants",
        "The Sun contains 99.8% of the Solar System's mass",
        "The planets all orbit the Sun in the same direction and roughly the same plane"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700",
        description: "A schematic view of our Solar System showing the Sun and planets in their orbital paths."
      },
      shortVideo: "https://www.youtube.com/embed/pS7p6FfU4bE?si=QJHfJh5SyF3cnqI-",
      quiz: createBasicQuiz("The Solar System"),
      quizzes: generateQuizzes("The Solar System"),
      funFacts: [
        "If you could fly a plane to Pluto, it would take more than 800 years",
        "The Great Red Spot on Jupiter is a storm that has been raging for at least 400 years",
        "One day on Venus is longer than one year on Venus",
        "Saturn is the only planet that could float in water (if there were a bathtub big enough)",
        "All planets in our Solar System could fit between Earth and the Moon"
      ]
    },
    {
      id: "section2",
      title: "The Inner Planets",
      introduction: "The inner planets, also known as terrestrial planets, are the four planets closest to the Sun: Mercury, Venus, Earth, and Mars.",
      whyLearn: "The inner planets provide clues about Earth's formation and potential future, as well as possibilities for human exploration.",
      videoUrl: "https://www.youtube.com/embed/JyDGO7GH5_M",
      keyPoints: [
        "Inner planets are relatively small and composed primarily of rock and metal",
        "They have few or no moons compared to the outer planets",
        "Their surfaces are solid with features like mountains, valleys, and craters",
        "They have relatively thin atmospheres compared to gas giants",
        "They formed from the accretion of heavy elements close to the Sun"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700",
        description: "The four inner planets of our Solar System: Mercury, Venus, Earth, and Mars, shown to scale."
      },
      shortVideo: "https://www.youtube.com/embed/pS7p6FfU4bE?si=QJHfJh5SyF3cnqI-",
      quiz: createBasicQuiz("The Inner Planets"),
      quizzes: generateQuizzes("The Inner Planets")
    },
    {
      id: "section3",
      title: "Earth",
      introduction: "Earth is our home planet, the only known world where life exists, with liquid water on the surface and an oxygen-rich atmosphere.",
      whyLearn: "Understanding Earth's unique properties helps us appreciate its fragility and the conditions necessary for life.",
      videoUrl: "https://www.youtube.com/embed/HCDVN7DCzYE",
      keyPoints: [
        "Earth is the third planet from the Sun and the only known planet with abundant liquid water",
        "It has a protective magnetic field that shields us from harmful solar radiation",
        "The atmosphere consists primarily of nitrogen (78%) and oxygen (21%)",
        "Earth's climate is regulated by a complex system of ocean and atmospheric circulation",
        "The planet is geologically active with plate tectonics reshaping its surface"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4",
        description: "Earth as seen from space, showing the blue oceans, green and brown landmasses, and white cloud formations."
      },
      shortVideo: "https://www.youtube.com/embed/JGXi_9A__Vc",
      visualUrl: "https://www.youtube.com/embed/YeTMJYEDvnk", 
      quiz: createBasicQuiz("Earth"),
      quizzes: generateQuizzes("Earth"),
      bonusVideos: ["https://www.youtube.com/embed/0MzqdQ_ZNvA"]
    },
    {
      id: "section4",
      title: "The Moon",
      introduction: "The Moon is Earth's only natural satellite and our closest celestial neighbor, playing a vital role in Earth's evolution and our understanding of the Solar System.",
      whyLearn: "The Moon helps us understand planetary formation and has been crucial to the development of life on Earth by stabilizing our planet's rotation.",
      videoUrl: "https://www.youtube.com/embed/mCzchPx3yF8",
      keyPoints: [
        "The Moon is believed to have formed about 4.5 billion years ago from debris after a Mars-sized object collided with Earth",
        "It has no atmosphere and experiences extreme temperature variations",
        "The Moon is gradually moving away from Earth at about 3.8 cm per year",
        "Its surface is covered with regolith, a layer of fine dust and broken rock",
        "The Moon influences Earth's tides and helped stabilize Earth's axial tilt"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
        description: "The Moon's cratered surface as seen from Earth, showing the contrast between the dark maria and lighter highlands."
      },
      shortVideo: "https://www.youtube.com/embed/6AviDjR9mmo",
      visualUrl: "https://www.youtube.com/embed/XgsQNXrFmBc",
      funFacts: [
        "The Moon is not a perfect sphere but is slightly egg-shaped",
        "A person would weigh about 1/6th on the Moon compared to Earth",
        "The Moon has moonquakes, caused by the gravitational influence of Earth",
        "The far side of the Moon was first photographed in 1959",
        "There's enough gold on the Moon's surface to cover a football field"
      ],
      quiz: createBasicQuiz("The Moon"),
      quizzes: generateQuizzes("The Moon")
    },
    {
      id: "section5",
      title: "The Moon in Our Skies",
      introduction: "The Moon's appearance changes dramatically as seen from Earth, creating phases and influencing human culture throughout history.",
      whyLearn: "Understanding the Moon's phases and movement helps us connect astronomical observations to everyday experiences.",
      videoUrl: "https://www.youtube.com/embed/AQ5vty8f9Xc",
      keyPoints: [
        "Moon phases occur because we see different portions of the illuminated half as it orbits Earth",
        "A complete cycle of phases takes about 29.5 days (a synodic month)",
        "Lunar and solar eclipses occur when the Sun, Earth, and Moon align",
        "The Moon rises about 50 minutes later each day due to its orbital motion",
        "The Moon always shows the same face to Earth due to tidal locking"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
        description: "A composite showing the different phases of the Moon throughout its monthly cycle."
      },
      shortVideo: "https://www.youtube.com/embed/AQ5vty8f9Xc",
      visualUrl: "https://www.youtube.com/embed/1SN1BOpLZAs",
      quiz: createBasicQuiz("The Moon in Our Skies"),
      quizzes: generateQuizzes("The Moon in Our Skies")
    },
    {
      id: "section6",
      title: "Mapping the Moon",
      introduction: "Scientists have mapped the Moon's surface in increasing detail over centuries, revealing a complex landscape with unique features and history.",
      whyLearn: "Lunar mapping helps us understand the Moon's geological history and plan future exploration missions.",
      videoUrl: "https://www.youtube.com/embed/UIKmSQqp8wY",
      keyPoints: [
        "The Moon's surface features include maria (dark plains), highlands, craters, mountains, and rilles",
        "Maria are ancient lava flows that filled impact basins billions of years ago",
        "Craters were formed by asteroid and meteor impacts over billions of years",
        "The Moon has no active plate tectonics or significant erosion",
        "Modern mapping uses laser altimetry and high-resolution cameras from orbit"
      ],
      image: {
        url: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
        description: "A detailed topographical map of the Moon's surface showing major craters and maria."
