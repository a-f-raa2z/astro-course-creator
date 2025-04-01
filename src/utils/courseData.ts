import { AssessmentQuestion, Course } from "@/types/course";

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "interest",
    question: "What aspect of astronomy fascinates you the most?",
    description: "Drag the option to fill in the blank.",
    template: "I am most fascinated by ___.",
    blanks: [
      { id: "stars", text: "stars and stellar evolution", value: "stars" },
      { id: "planets", text: "planets and solar systems", value: "planets" },
      { id: "galaxies", text: "galaxies and deep space", value: "galaxies" },
      { id: "cosmology", text: "cosmology and the early universe", value: "cosmology" },
      { id: "space-tech", text: "space technology and exploration", value: "space-tech" }
    ]
  },
  {
    id: "level",
    question: "What's your current level of astronomy knowledge?",
    description: "Drag the option to fill in the blank.",
    template: "My astronomy knowledge level is ___.",
    blanks: [
      { id: "beginner", text: "beginner - I know the basics", value: "beginner" },
      { id: "intermediate", text: "intermediate - I understand core concepts", value: "intermediate" },
      { id: "advanced", text: "advanced - I'm looking to deepen expertise", value: "advanced" }
    ]
  },
  {
    id: "learning-style",
    question: "How do you prefer to learn new concepts?",
    description: "Drag the option to fill in the blank.",
    template: "I learn best through ___ content.",
    blanks: [
      { id: "visual", text: "visual - images and diagrams", value: "visual" },
      { id: "interactive", text: "interactive - hands-on activities", value: "interactive" },
      { id: "conceptual", text: "conceptual - theoretical explanations", value: "conceptual" },
      { id: "practical", text: "practical - real-world applications", value: "practical" }
    ]
  }
];

export const generateMockCourse = (interest: string, level: string, learningStyle: string): Course => {
  const interestTitles: Record<string, string> = {
    stars: "Stellar Evolution: From Dust to Supernovae",
    planets: "Exploring Our Solar System and Beyond",
    galaxies: "Galaxy Formation and Cosmic Structure",
    cosmology: "The Universe's Beginning and Ultimate Fate",
    "space-tech": "Space Exploration: Technologies and Missions",
    "ai": "Artificial Intelligence: Concepts and Applications"
  };

  const levelDescriptors: Record<string, string> = {
    beginner: "foundational",
    intermediate: "comprehensive",
    advanced: "advanced"
  };

  const courseTitle = interestTitles[interest] || "Personalized Learning Journey";
  const levelAdjective = levelDescriptors[level] || "personalized";

  if (interest === "ai") {
    return generateAICourse(level, learningStyle);
  }

  return {
    id: `course-${interest}-${level}-${Date.now()}`,
    title: courseTitle,
    description: `A ${levelAdjective} journey through the wonders of astronomy, tailored to your specific interests and learning preferences.`,
    forInterest: interest,
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-1",
        title: "The Solar System",
        introduction: "This section introduces the fundamental concepts of astronomy that serve as building blocks for understanding the universe. We'll explore the basic principles that astronomers use to study celestial objects and phenomena.",
        whyLearn: "Understanding these core principles is essential as they form the foundation for all astronomical knowledge. These concepts will help you grasp how we measure the vast distances in space and understand the nature of light as our primary source of cosmic information.",
        videoUrl: "https://www.youtube.com/embed/libKVRa01L8",
        keyPoints: [
          "The scale of the universe spans from subatomic particles to superclusters of galaxies",
          "Light is our primary source of information about distant objects", 
          "The electromagnetic spectrum reveals different properties of celestial objects",
          "Modern astronomy combines observations across multiple wavelengths"
        ],
        shortVideo: "https://www.youtube.com/embed/lzsf1-vMUdY",
        additionalShortVideos: ["https://www.youtube.com/embed/HDSKuln-5qU"],
        bonusVideos: ["https://www.youtube.com/embed/lcZTcfdZ3Ow"],
        image: {
          url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
          description: "The night sky reveals countless stars, each one potentially hosting planetary systems similar or vastly different from our own."
        },
        quiz: {
          question: "Which property of light allows astronomers to determine the chemical composition of stars?",
          options: [
            "Reflection",
            "Absorption and emission spectra",
            "Luminosity",
            "Color temperature"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "Which property of light allows astronomers to determine the chemical composition of stars?",
            options: [
              "Reflection",
              "Absorption and emission spectra",
              "Luminosity",
              "Color temperature"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the primary force that shapes the large-scale structure of the universe?",
            options: [
              "Electromagnetic force",
              "Strong nuclear force",
              "Weak nuclear force",
              "Gravity"
            ],
            correctAnswer: 3
          },
          {
            question: "Which type of telescope is best for observing objects that emit radio waves?",
            options: [
              "Refracting telescope",
              "Reflecting telescope",
              "Radio telescope",
              "X-ray telescope"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the name of the theory that describes the beginning of our universe?",
            options: [
              "Steady State Theory",
              "Big Bang Theory",
              "Inflation Theory",
              "String Theory"
            ],
            correctAnswer: 1
          },
          {
            question: "What makes up most of the mass in our solar system?",
            options: [
              "All the planets combined",
              "Jupiter",
              "The Sun",
              "Asteroid belt"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-2",
        title: "The Inner Planets",
        introduction: "In this section, we'll explore Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun that make up the inner solar system.",
        whyLearn: "The inner planets offer valuable insights into the formation of rocky worlds and provide important comparisons to understand what makes Earth uniquely habitable.",
        videoUrl: "https://www.youtube.com/embed/05E1uMh15QQ",
        keyPoints: [
          "The inner planets (Mercury, Venus, Earth, Mars) are mostly composed of rock and metal",
          "Each inner planet has unique characteristics that influence its environment",
          "Earth is the only inner planet confirmed to currently support life",
          "The inner planets formed from similar materials but evolved very differently"
        ],
        shortVideo: "https://www.youtube.com/embed/_rzAbPtUamA",
        additionalShortVideos: ["https://www.youtube.com/embed/4qCczin1Muo"],
        bonusVideos: ["https://www.youtube.com/embed/_rzAbPtUamA", "https://www.youtube.com/embed/4qCczin1Muo"],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/pia25016.width-1320.jpg",
          description: "The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial (rocky) worlds."
        },
        quiz: {
          question: "Which inner planet has the longest day, lasting approximately 116 Earth days?",
          options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
          ],
          correctAnswer: 0
        },
        quizzes: [
          {
            question: "Which inner planet has the longest day, lasting approximately 116 Earth days?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 0
          },
          {
            question: "Which inner planet has a surface temperature hot enough to melt lead?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 1
          },
          {
            question: "Which inner planet has the largest volcano in the solar system?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 3
          },
          {
            question: "Which inner planet has the thinnest atmosphere?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 0
          },
          {
            question: "Which planet has the highest surface gravity among the inner planets?",
            options: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-3",
        title: "Earth",
        introduction: "Our home planet - Earth is the blue marble of the Solar System and the only known world with abundant liquid water and thriving ecosystems.",
        whyLearn: "Understanding Earth as a planet helps us appreciate both its uniqueness and its place in the cosmic context, while providing insights into planetary science and climate systems.",
        videoUrl: "https://www.youtube.com/embed/HCDVN7DCzYE",
        keyPoints: [
          "Earth is the only planet known to support life, with a unique atmosphere and hydrosphere",
          "Our planet has a protective magnetic field generated by its molten iron core",
          "Earth's surface is dynamic, with active plate tectonics shaping continents and oceans",
          "The climate system involves complex interactions between land, oceans, atmosphere, and life"
        ],
        shortVideo: "https://www.youtube.com/embed/HRwNdMoNUq4",
        additionalShortVideos: ["https://www.youtube.com/embed/eCj5KgfRRGQ"],
        bonusVideos: [
          "https://www.youtube.com/embed/videoseries?list=PL50KW6aT4Ugw65Ex89Z2XrBxQVZLdyOZ9",
          "https://www.youtube.com/embed/mrYjJ9Jl9dA?list=PL2gLpWRK0QlCXPhOqQD0wqPhLIvjq0BUj"
        ],
        visualUrl: "https://world-geography-games.com/en/world_earth.html",
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/06/as17-148-22727-earth-full-disk-apollo-17-1972.width-1320.jpg",
          description: "Earth, our home planet, is the only place we know of so far that's inhabited by living things."
        },
        quiz: {
          question: "What percentage of Earth's surface is covered by water?",
          options: [
            "50%",
            "60%",
            "71%",
            "85%"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What percentage of Earth's surface is covered by water?",
            options: [
              "50%",
              "60%",
              "71%",
              "85%"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary gas in Earth's atmosphere?",
            options: [
              "Oxygen",
              "Carbon dioxide",
              "Nitrogen",
              "Argon"
            ],
            correctAnswer: 2
          },
          {
            question: "What causes Earth's seasons?",
            options: [
              "Variations in distance from the Sun",
              "Changes in the Sun's energy output",
              "Earth's axial tilt relative to its orbital plane",
              "Ocean current patterns"
            ],
            correctAnswer: 2
          },
          {
            question: "How old is Earth estimated to be?",
            options: [
              "2.5 billion years",
              "4.5 billion years",
              "6.5 billion years",
              "10 billion years"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the name of the supercontinent that existed about 250 million years ago?",
            options: [
              "Atlantis",
              "Gondwana",
              "Pangaea",
              "Laurasia"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-4",
        title: "The Moon",
        introduction: "Earth's natural satellite and our closest celestial neighbor, the Moon has fascinated humanity throughout history and continues to be a focus of scientific study and exploration.",
        whyLearn: "The Moon provides insights into Earth's history, the evolution of rocky bodies, and serves as a potential stepping stone for future human exploration of the solar system.",
        videoUrl: "https://www.youtube.com/embed/6AviDjR9mmo",
        keyPoints: [
          "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system",
          "Its formation likely resulted from a massive collision between Earth and a Mars-sized body",
          "The Moon has no atmosphere and experiences extreme temperature variations",
          "Lunar exploration has provided valuable scientific data and technological advancements"
        ],
        shortVideo: "https://www.youtube.com/embed/rVMvzH1FxfE",
        additionalShortVideos: ["https://www.youtube.com/embed/fTok7usLXb4"],
        bonusVideos: ["https://www.youtube.com/embed/rVMvzH1FxfE", "https://www.youtube.com/embed/fTok7usLXb4"],
        visualUrl: "https://eyes.nasa.gov/apps/solar-system/#/earth/moons/moon",
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon.width-1320.jpg",
          description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system."
        },
        quiz: {
          question: "What causes the Moon to always show the same face to Earth?",
          options: [
            "The Moon doesn't rotate at all",
            "The Moon's rotation period equals its orbital period around Earth",
            "Earth's gravity prevents the Moon from rotating",
            "The Moon's axis is perfectly aligned with Earth's axis"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What causes the Moon to always show the same face to Earth?",
            options: [
              "The Moon doesn't rotate at all",
              "The Moon's rotation period equals its orbital period around Earth",
              "Earth's gravity prevents the Moon from rotating",
              "The Moon's axis is perfectly aligned with Earth's axis"
            ],
            correctAnswer: 1
          },
          {
            question: "What are the dark patches visible on the Moon's surface?",
            options: [
              "Large lakes",
              "Ancient volcanic plains (maria)",
              "Shadows from mountains",
              "Forests"
            ],
            correctAnswer: 1
          },
          {
            question: "How long does it take for the Moon to complete one orbit around Earth?",
            options: [
              "1 day",
              "7 days",
              "27.3 days",
              "365 days"
            ],
            correctAnswer: 2
          },
          {
            question: "When was the first human landing on the Moon?",
            options: [
              "1961",
              "1969",
              "1975",
              "1986"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the approximate surface temperature range on the Moon?",
            options: [
              "-30°C to +30°C",
              "-73°C to +127°C",
              "-173°C to +127°C",
              "-273°C to +227°C"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-5",
        title: "The Moon in Our Skies",
        introduction: "This section explores how the Moon appears from Earth, including lunar phases, eclipses, and the many ways it influences our planet and culture.",
        whyLearn: "Understanding lunar phenomena helps us appreciate our closest celestial neighbor's impact on Earth, from tides to calendars, and the science behind spectacular events like eclipses.",
        videoUrl: "https://www.youtube.com/embed/lhKMQIRdaeo",
        keyPoints: [
          "The Moon's phases result from the changing angles between Earth, Moon, and Sun",
          "Solar and lunar eclipses occur when the Earth, Moon, and Sun align precisely",
          "The Moon is gradually moving away from Earth at about 3.8 cm per year",
          "The Moon stabilizes Earth's axial tilt, helping create a stable climate"
        ],
        shortVideo: "https://www.youtube.com/embed/1lwke71q6hs",
        additionalShortVideos: ["https://www.youtube.com/embed/MikmkUbz8eo"],
        bonusVideos: [
          "https://www.youtube.com/embed/VW2xRR75lKE",
          "https://www.youtube.com/embed/AebowXnINj4"
        ],
        visualUrl: "https://spaceplace.nasa.gov/eclipses/en/",
        visualGalleryUrl: "https://unsplash.com/s/photos/supermoon",
        mainLesson2Url: "https://www.youtube.com/embed/cxrLRbkOwKs",
        interactiveUrl2: "https://eyes.nasa.gov/apps/eclipse2017/",
        bonusContent2: ["https://www.youtube.com/embed/BkQH8VdSdyc"],
        image: {
          url: "https://images.unsplash.com/photo-1522030299830-16b8d1d4bc80",
          description: "The Moon appears different throughout its monthly cycle as its position relative to Earth and the Sun changes."
        },
        quiz: {
          question: "What causes the different phases of the Moon?",
          options: [
            "Earth's shadow on the Moon",
            "The Moon's different distances from Earth",
            "The changing angles between Earth, Moon, and Sun",
            "Clouds in Earth's atmosphere"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What causes the different phases of the Moon?",
            options: [
              "Earth's shadow on the Moon",
              "The Moon's different distances from Earth",
              "The changing angles between Earth, Moon, and Sun",
              "Clouds in Earth's atmosphere"
            ],
            correctAnswer: 2
          },
          {
            question: "How long is a lunar month (the time it takes the Moon to go through all its phases)?",
            options: [
              "About 24 hours",
              "About 7 days",
              "About 29.5 days",
              "About 365 days"
            ],
            correctAnswer: 2
          },
          {
            question: "What type of eclipse occurs when the Moon passes between the Sun and Earth?",
            options: [
              "Lunar eclipse",
              "Solar eclipse",
              "Partial eclipse",
              "Annular eclipse"
            ],
            correctAnswer: 1
          },
          {
            question: "What is a 'supermoon'?",
            options: [
              "When the Moon appears red",
              "When the Moon appears larger because it's at its closest point to Earth",
              "When two full moons occur in the same month",
              "When the Moon appears to have rings around it"
            ],
            correctAnswer: 1
          },
          {
            question: "What phenomenon causes the tides on Earth?",
            options: [
              "Lunar gravity",
              "Solar radiation",
              "Earth's rotation alone",
              "Underwater volcanic activity"
            ],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "section-6",
        title: "Mapping the Moon",
        introduction: "This section explores the lunar surface features that can be observed from Earth and how astronomers have mapped our natural satellite over centuries.",
        whyLearn: "Learning to identify lunar features enhances your observation skills and connects you to centuries of human curiosity about the Moon's mysterious surface.",
        videoUrl: "https://www.youtube.com/embed/2iSZMv64wuU",
        keyPoints: [
          "The Moon's surface features include maria (dark plains), craters, mountains, and rilles",
          "Major landmarks like the Sea of Tranquility can be observed with the naked eye",
          "Craters are formed by meteorite impacts and tell us about the Moon's geological history",
          "Astronomical mapping of the Moon began in the 17th century with Galileo's telescope observations"
        ],
        bonusVideos: ["https://www.youtube.com/embed/j91XTV_p9pc"],
        visualUrl: "https://moon.nasa.gov/moon-observation/daily-moon-guide/?intent=021",
        visualGalleryUrl: "https://www.planetary.org/space-images/moon-features-you-can-see-from-earths-northern-hemisphere-square",
        funFacts: [
          "https://www.youtube.com/embed/rVMvzH1FxfE"
        ],
        funFacts2: [
          "https://www.youtube.com/embed/_fCQQybyiWM"
        ],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon-nearside-lro.width-1320.jpg",
          description: "The near side of the Moon as seen from Earth, showing the dark maria (seas) and bright highland regions."
        },
        quiz: {
          question: "What are the dark regions on the Moon called?",
          options: [
            "Highlands",
            "Maria (seas)",
            "Craters",
            "Rilles"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What are the dark regions on the Moon called?",
            options: [
              "Highlands",
              "Maria (seas)",
              "Craters",
              "Rilles"
            ],
            correctAnswer: 1
          },
          {
            question: "What caused most of the large craters on the Moon?",
            options: [
              "Volcanic eruptions",
              "Ancient rivers",
              "Meteorite impacts",
              "Tectonic activity"
            ],
            correctAnswer: 2
          },
          {
            question: "Which Apollo mission made the first human landing on the Moon?",
            options: [
              "Apollo 8",
              "Apollo 11",
              "Apollo 13",
              "Apollo 17"
            ],
            correctAnswer: 1
          },
          {
            question: "What is the large, bright crater with rays extending across much of the Moon's surface?",
            options: [
              "Tycho",
              "Copernicus",
              "Kepler",
              "Plato"
            ],
            correctAnswer: 0
          },
          {
            question: "What is a lunar 'sea' actually composed of?",
            options: [
              "Water ice",
              "Ancient water basins",
              "Solidified lava flows",
              "Fine lunar dust"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-7",
        title: "The Moon's Unseen Face",
        introduction: "This section explores the far side of the Moon, which remained completely unknown to humanity until the space age, and how it differs from the familiar near side.",
        whyLearn: "The Moon's far side reveals crucial information about lunar formation and evolution that complements what we know from the near side, providing a more complete picture of Earth's companion.",
        videoUrl: "https://www.youtube.com/embed/kJkVegBsNyE",
        keyPoints: [
          "The Moon is tidally locked to Earth, meaning the same side always faces us",
          "The far side has far fewer maria (dark regions) than the near side",
          "The far side's crust is thicker, possibly explaining its different appearance",
          "China's Chang'e 4 mission was the first to land on the far side in 2019"
        ],
        funFacts: [
          "https://www.youtube.com/embed/KDUX73ZAATw",
          "https://www.youtube.com/embed/6Pe7jKbnCZU"
        ],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/09/moon-farside-lro.width-1320.jpg",
          description: "The far side of the Moon as imaged by spacecraft, showing a surface with more craters and fewer dark maria than the near side."
        },
        quiz: {
          question: "Why is the far side of the Moon never visible from Earth?",
          options: [
            "It's always in shadow",
            "Earth's atmosphere blocks our view",
            "The Moon rotates too quickly",
            "The Moon's rotation period matches its orbital period"
          ],
          correctAnswer: 3
        },
        quizzes: [
          {
            question: "Why is the far side of the Moon never visible from Earth?",
            options: [
              "It's always in shadow",
              "Earth's atmosphere blocks our view",
              "The Moon rotates too quickly",
              "The Moon's rotation period matches its orbital period"
            ],
            correctAnswer: 3
          },
          {
            question: "What is a major difference between the Moon's near side and far side?",
            options: [
              "The far side has more maria (dark regions)",
              "The far side has fewer craters",
              "The far side has thicker crust and fewer maria",
              "The far side is always in darkness"
            ],
            correctAnswer: 2
          },
          {
            question: "When was the far side of the Moon first photographed?",
            options: [
              "1959 by Soviet Luna 3",
              "1969 by Apollo 11",
              "1972 by Apollo 17",
              "1990 by Hubble Space Telescope"
            ],
            correctAnswer: 0
          },
          {
            question: "What is the 'dark side of the Moon'?",
            options: [
              "The side that never receives sunlight",
              "A common misnomer for the far side",
              "The side that contains mostly craters",
              "The side with more maria"
            ],
            correctAnswer: 1
          },
          {
            question: "Which natural phenomenon can never be seen from the far side of the Moon?",
            options: [
              "Solar eclipses",
              "Earth",
              "Stars",
              "The Sun"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-8",
        title: "Venus",
        introduction: "This section explores Venus, Earth's closest planetary neighbor and often called our 'sister planet' despite its drastically different conditions from Earth.",
        whyLearn: "Studying Venus provides crucial insights into planetary evolution, climate change, and serves as a cautionary example of how similar planets can develop very differently.",
        videoUrl: "https://www.youtube.com/embed/BvXa1n9fjow",
        keyPoints: [
          "Venus is the hottest planet in our solar system despite not being closest to the Sun",
          "Its extreme greenhouse effect creates surface temperatures that can melt lead",
          "Venus rotates very slowly in the opposite direction of most planets",
          "Its thick atmosphere makes it the brightest natural object in our sky after the Sun and Moon"
        ],
        bonusVideos: ["https://www.youtube.com/embed/djP-IdHFQWU"],
        funFacts: [
          "https://www.youtube.com/embed/vjT10myBoZE",
          "https://www.youtube.com/embed/2GxhEOnsLY8"
        ],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/venus-surface-magellan-3d.width-1320.jpg",
          description: "Venus's surface as revealed by radar mapping, showing mountains, plains, and volcanic features beneath its perpetual cloud cover."
        },
        quiz: {
          question: "What is the main component of Venus's atmosphere?",
          options: [
            "Nitrogen",
            "Oxygen",
            "Carbon dioxide",
            "Hydrogen"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "What is the main component of Venus's atmosphere?",
            options: [
              "Nitrogen",
              "Oxygen",
              "Carbon dioxide",
              "Hydrogen"
            ],
            correctAnswer: 2
          },
          {
            question: "What is unusual about Venus's rotation compared to most planets?",
            options: [
              "It rotates extremely fast",
              "It rotates backward (retrograde)",
              "It doesn't rotate at all",
              "It wobbles significantly"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is closest to Venus's surface temperature?",
            options: [
              "100°C (212°F)",
              "250°C (482°F)",
              "470°C (878°F)",
              "1000°C (1832°F)"
            ],
            correctAnswer: 2
          },
          {
            question: "What ancient name is often associated with Venus when seen in the evening?",
            options: [
              "Morning Star",
              "Evening Star",
              "Red Planet",
              "Wandering Star"
            ],
            correctAnswer: 1
          },
          {
            question: "Why is it difficult to observe Venus's surface from Earth?",
            options: [
              "It's too far away",
              "It's covered by thick clouds",
              "It's too bright",
              "Earth's atmosphere blocks the view"
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "section-9",
        title: "Mercury",
        introduction: "This section explores Mercury, the smallest planet in our solar system and the closest to the Sun, with its extreme temperatures and cratered surface.",
        whyLearn: "Mercury's unique characteristics help us understand planetary formation, and its position provides insights into how planets evolve under intense solar influence.",
        videoUrl: "https://www.youtube.com/embed/0KBjnNuhRHs",
        keyPoints: [
          "Mercury is the smallest true planet and closest to the Sun",
          "It has virtually no atmosphere and experiences extreme temperature variations",
          "Mercury has a surprisingly large iron core relative to its size",
          "Its surface resembles our Moon, heavily cratered from ancient impacts"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/rsa92VNVY7A",
          "https://www.youtube.com/embed/9T8lLtlZ8Xs",
          "https://www.youtube.com/embed/31HAFceuvb0",
          "https://www.youtube.com/embed/B588JHKSlEE"
        ],
        funFacts: [
          "https://www.youtube.com/embed/uDurw7YxX3U",
          "https://www.youtube.com/embed/-DuQEeq4ZLw"
        ],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/PIA16853.width-1320.jpg",
          description: "Mercury's heavily cratered surface as captured by NASA's MESSENGER spacecraft, showing a landscape that has remained largely unchanged for billions of years."
        },
        quiz: {
          question: "Why is Mercury difficult to observe from Earth?",
          options: [
            "It's too small",
            "It's always on the opposite side of the Sun from Earth",
            "It's too far away",
            "It's never far from the Sun in our sky"
          ],
          correctAnswer: 3
        },
        quizzes: [
          {
            question: "Why is Mercury difficult to observe from Earth?",
            options: [
              "It's too small",
              "It's always on the opposite side of the Sun from Earth",
              "It's too far away",
              "It's never far from the Sun in our sky"
            ],
            correctAnswer: 3
          },
          {
            question: "What is unusual about Mercury's orbit?",
            options: [
              "It's perfectly circular",
              "It's the most elliptical of the inner planets",
              "It crosses Venus's orbit",
              "It's perpendicular to the orbits of other planets"
            ],
            correctAnswer: 1
          },
          {
            question: "Approximately how long is a day on Mercury (from one sunrise to the next)?",
            options: [
              "24 Earth hours",
              "58 Earth days",
              "88 Earth days",
              "176 Earth days"
            ],
            correctAnswer: 3
          },
          {
            question: "What is the approximate temperature range on Mercury's surface?",
            options: [
              "-173°C to +427°C (-280°F to +878°F)",
              "-73°C to +127°C (-100°F to +260°F)",
              "0°C to +100°C (+32°F to +212°F)",
              "+100°C to +300°C (+212°F to +572°F)"
            ],
            correctAnswer: 0
          },
          {
            question: "What percentage of Mercury's volume is estimated to be its iron core?",
            options: [
              "About 10%",
              "About 30%",
              "About 55%",
              "About 75%"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-10",
        title: "Messenger at Mercury",
        introduction: "This section explores NASA's MESSENGER mission, the first spacecraft to orbit Mercury, and what we learned from its groundbreaking observations of the innermost planet.",
        whyLearn: "MESSENGER revolutionized our understanding of Mercury, revealing its composition, geological history, and unexpected features that challenge our models of planetary formation.",
        videoUrl: "https://www.youtube.com/embed/1MwGXzKjFfY",
        keyPoints: [
          "MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) orbited Mercury from 2011-2015",
          "The mission revealed Mercury's unexpectedly high sulfur content and volatile elements",
          "MESSENGER discovered evidence of past volcanic activity and a partially molten core",
          "The spacecraft mapped Mercury completely, discovered water ice in permanently shadowed craters"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/NJAfP9QLkN8",
          "https://www.youtube.com/embed/gHn19Ce2sCE",
          "https://www.youtube.com/embed/XPy9qQq6QT4"
        ],
        funFacts: [
          "https://www.youtube.com/embed/tQjVO6BtT7A",
          "https://www.youtube.com/embed/U1cMS8K2uhk"
        ],
        image: {
          url: "https://science.nasa.gov/wp-content/uploads/2023/11/pia19419-mercury-in-color-wide.width-1320.jpg",
          description: "Enhanced color image of Mercury created from data collected by MESSENGER, revealing the differences in composition across the planet's surface."
        },
        quiz: {
          question: "What major discovery did MESSENGER make about Mercury's poles?",
          options: [
            "Active volcanoes",
            "Water ice in permanently shadowed craters",
            "Evidence of ancient oceans",
            "Signs of microbial life"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What major discovery did MESSENGER make about Mercury's poles?",
            options: [
              "Active volcanoes",
              "Water ice in permanently shadowed craters",
              "Evidence of ancient oceans",
              "Signs of microbial life"
            ],
            correctAnswer: 1
          },
          {
            question: "How many years did the MESSENGER spacecraft spend in orbit around Mercury?",
            options: [
              "Less than 1 year",
              "About 4 years",
              "About 7 years",
              "Over 10 years"
            ],
            correctAnswer: 1
          },
          {
            question: "What was unexpected about Mercury's chemical composition?",
            options: [
              "Its high concentration of uranium",
              "The presence of precious metals like gold and platinum",
              "Its high levels of sulfur and volatile elements",
              "Complete absence of iron"
            ],
            correctAnswer: 2
          },
          {
            question: "How did the MESSENGER mission end?",
            options: [
              "It continues to orbit Mercury today",
              "It was captured by Mercury's gravity well",
              "It was intentionally crashed into Mercury's surface",
              "It was redirected to Venus"
            ],
            correctAnswer: 2
          },
          {
            question: "What made getting a spacecraft to Mercury particularly challenging?",
            options: [
              "The planet's high magnetic field",
              "Solar radiation and Mercury's proximity to the Sun",
              "The planet's low mass and weak gravity",
              "Interference from Venus's atmosphere"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  };
};

export const astronomyCourseData = generateMockCourse("planets", "intermediate", "visual");
export const aiCourseData = generateAICourse("intermediate", "visual");

function generateAICourse(level: string, learningStyle: string): Course {
  const levelAdjective = level === "beginner" ? "foundational" : level === "advanced" ? "advanced" : "comprehensive";
  
  return {
    id: `course-ai-${level}-${Date.now()}`,
    title: "Artificial Intelligence: Concepts and Applications",
    description: `A ${levelAdjective} journey through the world of artificial intelligence, tailored to your learning preferences.`,
    forInterest: "ai",
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-ai-1",
        title: "Intro of Artificial Intelligence",
        introduction: "This section introduces the fundamental concepts of artificial intelligence. We'll explore what AI is, its history, and its impact on our world today.",
        whyLearn: "Understanding AI fundamentals is essential as they form the foundation for all AI knowledge. These concepts will help you grasp the big picture of AI development and application.",
        videoUrl: "https://www.youtube.com/embed/ad79nYk2keg",
        keyPoints: [
          "AI refers to systems or machines that mimic human intelligence",
          "Machine Learning is a subset of AI focused on data learning",
          "Neural networks are computing systems inspired by biological brains",
          "AI can be narrow (specialized) or general (broad capabilities)"
        ],
        shortVideo: "https://www.youtube.com/embed/FCvK8Bbc0HU",
        additionalShortVideos: ["https://www.youtube.com/embed/bs7DxD9XGwA"],
        bonusVideos: ["https://www.youtube.com/embed/RzkD_rTEBYs"],
        visualUrl: "https://sightengine.com/ai-or-not?version=2024Q3",
        image: {
          url: "https://images.unsplash.com/photo-1677442135073-8edf721c002b",
          description: "AI systems analyze and process data to make predictions and decisions based on patterns they've learned."
        },
        quiz: {
          question: "Which of the following is NOT a major type of machine learning?",
          options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Predictive Learning",
            "Reinforcement Learning"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which of the following is NOT a major type of machine learning?",
            options: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Predictive Learning",
              "Reinforcement Learning"
            ],
            correctAnswer: 2
          },
          {
            question: "What year was the term 'Artificial Intelligence' first coined?",
            options: [
              "1943",
              "1956",
              "1969",
              "1981"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is an example of narrow AI?",
            options: [
              "HAL 9000 from 2001: A Space Odyssey",
              "A chess-playing program",
              "A fully autonomous robot with consciousness",
              "A system that can solve any intellectual task a human can"
            ],
            correctAnswer: 1
          },
          {
            question: "Which field focuses on making computers understand and generate human language?",
            options: [
              "Computer Vision",
              "Natural Language Processing",
              "Robotics",
              "Evolutionary Computing"
            ],
            correctAnswer: 1
          },
          {
            question: "What was the name of the IBM computer system that defeated chess champion Garry Kasparov in 1997?",
            options: [
              "Watson",
              "AlphaGo",
              "Deep Blue",
              "ENIAC"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-2",
        title: "Machine Learning",
        introduction: "Machine learning is at the core of modern AI applications. This section explores how machines can learn from data and make predictions without being explicitly programmed.",
        whyLearn: "Machine learning drives most practical AI applications today. Understanding these concepts will help you recognize how AI systems learn and improve over time.",
        videoUrl: "https://www.youtube.com/embed/ukzFI9rgwfU",
        keyPoints: [
          "Machine learning algorithms learn patterns from training data",
          "Supervised learning requires labeled data for training",
          "Unsupervised learning identifies patterns without labeled data",
          "Reinforcement learning uses rewards to guide learning"
        ],
        shortVideo: "https://www.youtube.com/embed/PeMlggyqz0Y",
        additionalShortVideos: [
          "https://www.youtube.com/embed/59bMh59JQDo",
          "https://www.youtube.com/embed/MYWpaNYAo0o"
        ],
        bonusVideos: ["https://www.youtube.com/embed/T2qQGqZxkD0"],
        image: {
          url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
          description: "Machine learning models continuously improve by analyzing patterns in data to make better predictions."
        },
        quiz: {
          question: "What is overfitting in machine learning?",
          options: [
            "When a model performs poorly on both training and test data",
            "When a model performs well on training data but poorly on new data",
            "When a model takes too long to train",
            "When a model requires too much computing power"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What is overfitting in machine learning?",
            options: [
              "When a model performs poorly on both training and test data",
              "When a model performs well on training data but poorly on new data",
              "When a model takes too long to train",
              "When a model requires too much computing power"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT a common machine learning algorithm?",
            options: [
              "Decision Trees",
              "Neural Networks",
              "Quantum Regression",
              "Support Vector Machines"
            ],
            correctAnswer: 2
          },
          {
            question: "What is the primary goal of the training phase in supervised learning?",
            options: [
              "To minimize the number of features",
              "To maximize computational efficiency",
              "To minimize prediction error on training data",
              "To identify hidden patterns without labeled data"
            ],
            correctAnswer: 2
          },
          {
            question: "Which of the following is an example of unsupervised learning?",
            options: [
              "Email spam detection",
              "Image classification",
              "Customer segmentation based on purchasing behavior",
              "Predicting house prices"
            ],
            correctAnswer: 2
          },
          {
            question: "What technique is used to avoid overfitting in machine learning models?",
            options: [
              "Increasing model complexity",
              "Using more parameters",
              "Regularization",
              "Using all available features"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-3",
        title: "Deep Learning",
        introduction: "Deep learning is a specialized form of machine learning that uses multi-layered neural networks to model complex patterns. This section explores how deep learning powers many modern AI applications.",
        whyLearn: "Deep learning powers the most advanced AI applications today. Understanding neural networks is essential for working with cutting-edge AI technologies.",
        videoUrl: "https://www.youtube.com/embed/bfmFfD2RIcg",
        keyPoints: [
          "Deep learning uses neural networks with multiple hidden layers",
          "Each layer in a neural network extracts different features",
          "Deep learning excels at processing unstructured data like images and text",
          "Training deep neural networks requires significant data and computational resources"
        ],
        shortVideo: "https://www.youtube.com/embed/kQl45ophSVQ",
        additionalShortVideos: ["https://www.youtube.com/embed/xZ0Bdg5yOuk"],
        bonusVideos: ["https://www.youtube.com/embed/WXuK6gekU1Y"],
        image: {
          url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
          description: "Neural networks mimic human brain structure to process complex relationships between inputs and outputs."
        },
        quiz: {
          question: "Which component allows neural networks to learn non-linear relationships?",
          options: [
            "Weights",
            "Biases",
            "Activation functions",
            "Loss functions"
          ],
          correctAnswer: 2
        },
        quizzes: [
          {
            question: "Which component allows neural networks to learn non-linear relationships?",
            options: [
              "Weights",
              "Biases",
              "Activation functions",
              "Loss functions"
            ],
            correctAnswer: 2
          },
          {
            question: "What is a convolutional neural network (CNN) primarily used for?",
            options: [
              "Text processing",
              "Image recognition",
              "Time series forecasting",
              "Reinforcement learning"
            ],
            correctAnswer: 1
          },
          {
            question: "How many layers must a neural network have to be considered 'deep'?",
            options: [
              "At least 2 layers",
              "At least 3 layers including input and output",
              "More than 3 hidden layers",
              "More than 10 layers"
            ],
            correctAnswer: 2
          },
          {
            question: "What is backpropagation in neural networks?",
            options: [
              "A method to initialize weights",
              "An algorithm to update weights based on error gradients",
              "A technique to reduce dimensionality",
              "A way to normalize input data"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT a common activation function in deep learning?",
            options: [
              "ReLU (Rectified Linear Unit)",
              "Sigmoid",
              "Hyperbolic Tangent (tanh)",
              "Polynomial"
            ],
            correctAnswer: 3
          }
        ]
      },
      {
        id: "section-ai-4",
        title: "Generative AI",
        introduction: "Generative AI creates new content including text, images, music, and more. This section explores how generative models work and their applications across different domains.",
        whyLearn: "Generative AI is transforming creative work and content creation. Understanding these technologies helps you appreciate their capabilities and limitations.",
        videoUrl: "https://www.youtube.com/embed/NRmAXDWJVnU",
        keyPoints: [
          "Generative AI creates new content based on patterns in training data",
          "GANs (Generative Adversarial Networks) use competing neural networks",
          "Transformer models like GPT underpin large language models",
          "Ethical considerations include copyright, bias, and misinformation"
        ],
        shortVideo: "https://www.youtube.com/embed/5O-_1zR04Yc",
        additionalShortVideos: ["https://www.youtube.com/embed/JUFdC-Jcuvo"],
        visualUrl: "https://rosebud.ai/p/abc075c1-8054-426c-a68b-942da1ec77d7",
        image: {
          url: "https://images.unsplash.com/photo-1586374579358-9d19d632b6df",
          description: "Generative AI can create realistic images, text, and other content that never existed before."
        },
        quiz: {
          question: "What is the primary difference between discriminative and generative models?",
          options: [
            "Discriminative models classify inputs, while generative models create new outputs",
            "Generative models require less data than discriminative models",
            "Discriminative models use neural networks, while generative models use decision trees",
            "Generative models are supervised, while discriminative models are unsupervised"
          ],
          correctAnswer: 0
        },
        quizzes: [
          {
            question: "What is the primary difference between discriminative and generative models?",
            options: [
              "Discriminative models classify inputs, while generative models create new outputs",
              "Generative models require less data than discriminative models",
              "Discriminative models use neural networks, while generative models use decision trees",
              "Generative models are supervised, while discriminative models are unsupervised"
            ],
            correctAnswer: 0
          },
          {
            question: "Which of these is NOT a common type of generative AI?",
            options: [
              "Generative Adversarial Networks (GANs)",
              "Variational Autoencoders (VAEs)",
              "Diffusion Models",
              "Supervised Vector Machines (SVMs)"
            ],
            correctAnswer: 3
          },
          {
            question: "What is 'prompt engineering' in the context of generative AI?",
            options: [
              "Designing the neural network architecture",
              "Creating effective instructions for AI to generate desired outputs",
              "Fixing bugs in AI code",
              "Setting up the hardware for AI training"
            ],
            correctAnswer: 1
          },
          {
            question: "Which generative AI model type was used to create DALL-E and Midjourney?",
            options: [
              "Recurrent Neural Networks",
              "Transformers",
              "Diffusion Models",
              "Long Short-Term Memory networks"
            ],
            correctAnswer: 2
          },
          {
            question: "What ethical concern is most specific to generative AI?",
            options: [
              "Data privacy",
              "Algorithmic bias",
              "Deepfakes and synthetic content",
              "Energy consumption"
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: "section-ai-5",
        title: "Chatbots",
        introduction: "Chatbots are AI systems designed to converse with humans through text or speech. This section explores how modern conversational AI works and its applications.",
        whyLearn: "Conversational AI is becoming ubiquitous in customer service, personal assistants, and many other domains. Understanding chatbots helps you interact with and potentially develop these systems.",
        videoUrl: "https://www.youtube.com/embed/o9-ObGgfpEk",
        keyPoints: [
          "Modern chatbots use large language models trained on vast text data",
          "Chatbots can be rule-based or use machine learning approaches",
          "Contextual understanding is key to natural-sounding conversations",
          "Challenges include maintaining coherence, factuality, and appropriate responses"
        ],
        shortVideo: "https://www.youtube.com/embed/56AOfobY6do",
        additionalShortVideos: ["https://www.youtube.com/embed/gmUHEvrpYoU"],
        bonusVideos: ["https://www.youtube.com/embed/X-AWdfSFCHQ"],
        visualUrl: "https://play.aidungeon.com/scenario/BspAiw_VrLtr/how-it-ends",
        image: {
          url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
          description: "Chatbots enable natural conversations between humans and machines through text or voice interfaces."
        },
        quiz: {
          question: "What is the Turing Test designed to evaluate?",
          options: [
            "The computational power of an AI system",
            "The ability of an AI to mimic human conversation convincingly",
            "The factual accuracy of an AI's responses",
            "The speed at which an AI can process information"
          ],
          correctAnswer: 1
        },
        quizzes: [
          {
            question: "What is the Turing Test designed to evaluate?",
            options: [
              "The computational power of an AI system",
              "The ability of an AI to mimic human conversation convincingly",
              "The factual accuracy of an AI's responses",
              "The speed at which an AI can process information"
            ],
            correctAnswer: 1
          },
          {
            question: "Which of these is NOT typically a component of a chatbot system?",
            options: [
              "Natural Language Understanding (NLU)",
              "Dialogue Management",
              "Physical Robotics Interface",
              "Response Generation"
            ],
            correctAnswer: 2
          },
          {
            question: "What causes chatbot 'hallucinations'?",
            options: [
              "Electrical interference in the server",
              "Generating content that seems plausible but is factually incorrect",
              "Users asking deliberately confusing questions",
              "Insufficient memory allocation"
            ],
            correctAnswer: 1
          },
          {
            question: "Which type of chatbot would be most suitable for highly regulated industries like healthcare?",
            options: [
              "Open-domain generative chatbots",
              "Retrieval-based chatbots with verified knowledge bases",
              "Social media chatbots",
              "Entertainment chatbots"
            ],
            correctAnswer: 1
          },
          {
            question: "What is 'context window' in relation to chatbots?",
            options: [
              "The user interface that displays the conversation",
              "The amount of previous conversation the chatbot can access for understanding context",
              "The physical dimensions of the chatbot's avatar",
              "The timeframe in which a chatbot responds to queries"
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  };
}
