import { Course } from "@/types/course";

export const generateMockCourse = (
  interest: string,
  level: string,
  learningStyle: string
): Course => {
  const baseCourse: Course = {
    id: "astronomy-101",
    title: "Astronomy: Exploring Our Universe",
    description:
      "Embark on a cosmic journey through our solar system and beyond. Discover planets, moons, stars, and the mysteries of space in this comprehensive astronomy course.",
    forInterest: interest,
    forLevel: level,
    forLearningStyle: learningStyle,
    sections: [
      {
        id: "section-1",
        title: "The Solar System",
        introduction:
          "An overview of the planets, asteroids, and comets that make up our solar system.",
        whyLearn:
          "Understanding the solar system helps us appreciate our place in the cosmos and the unique conditions that support life on Earth.",
        videoUrl: "https://www.youtube.com/embed/libKVRa01L8",
        keyPoints: [
          "The solar system consists of the Sun, planets, moons, asteroids, and comets.",
          "Planets are divided into inner, rocky planets and outer, gas giant planets.",
          "The asteroid belt lies between Mars and Jupiter.",
          "The Oort cloud is a distant region where comets originate.",
          "Gravity is the force that holds the solar system together."
        ],
        shortVideo: "https://www.youtube.com/embed/ht0ncjEkzLc",
        additionalShortVideos: [
          "https://www.youtube.com/embed/wt0dkj1k4xk",
          "https://www.youtube.com/embed/K0kJ6DypF3I"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/DMlqjCq-mSs",
          "https://www.youtube.com/embed/hewYl4wByRQ"
        ],
        image: {
          url: "/lovable-uploads/ad48c8d7-8aae-41a6-95ac-22af96b8a45a.png",
          description: "A visual representation of the solar system, showing the orbits of the planets around the Sun."
        },
        quiz: {
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Earth", "Mars", "Venus", "Jupiter"],
          correctAnswer: 1
        }
      },
      {
        id: "section-2",
        title: "The Inner Planets",
        introduction:
          "A closer look at Mercury, Venus, Earth, and Mars - the four terrestrial planets closest to the Sun.",
        whyLearn:
          "Studying the inner planets helps us understand the conditions necessary for life and the geological processes that shape planetary surfaces.",
        videoUrl: "https://www.youtube.com/embed/QtdjMLbqmCw",
        keyPoints: [
          "The inner planets are rocky and dense, with solid surfaces.",
          "Mercury is the smallest planet and closest to the Sun.",
          "Venus has a thick atmosphere and is extremely hot.",
          "Earth is the only known planet with liquid water on its surface.",
          "Mars has a thin atmosphere and evidence of past liquid water."
        ],
        shortVideo: "https://www.youtube.com/embed/KY2j8SOB9bc",
        additionalShortVideos: [
          "https://www.youtube.com/embed/NsBqJ59W4WM",
          "https://www.youtube.com/embed/bmJ0ROH-Ezs"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/qjF47wVvXA0",
          "https://www.youtube.com/embed/mgQMw47oXT4"
        ],
        image: {
          url: "/lovable-uploads/0228ba3e-a126-45c3-a728-10da3a418e4e.png",
          description: "A comparison of the sizes and features of the inner planets."
        },
        quiz: {
          question: "Which inner planet has the thickest atmosphere?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          correctAnswer: 1
        }
      },
      {
        id: "section-3",
        title: "Earth",
        introduction:
          "Our home planet - the blue marble of the Solar System and the only known world with abundant liquid water.",
        whyLearn:
          "Understanding Earth's systems is crucial for addressing environmental challenges and ensuring a sustainable future.",
        videoUrl: "https://www.youtube.com/embed/J8HA2J5OOUU",
        keyPoints: [
          "Earth has a diverse climate and a wide range of ecosystems.",
          "The atmosphere protects Earth from harmful solar radiation.",
          "The water cycle distributes water around the planet.",
          "Plate tectonics shape Earth's surface and cause earthquakes and volcanoes.",
          "Life on Earth depends on the interaction of the atmosphere, hydrosphere, and lithosphere."
        ],
        shortVideo: "https://www.youtube.com/embed/Ip2nUDygKWs",
        additionalShortVideos: [
          "https://www.youtube.com/embed/ZHjNJBzsH-w",
          "https://www.youtube.com/embed/D6iazvCuVA4"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/vIrwimxsU-s",
          "https://www.youtube.com/embed/HjtjJ5vvIjM"
        ],
        image: {
          url: "/lovable-uploads/6e29dd9e-5707-44ae-81af-d52de51f84e6.png",
          description: "A stunning view of Earth from space, showcasing its oceans, continents, and atmosphere."
        },
        quiz: {
          question: "What is the primary gas in Earth's atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correctAnswer: 1
        }
      },
      {
        id: "section-4",
        title: "The Moon",
        introduction:
          "Earth's natural satellite and our closest celestial neighbor.",
        whyLearn:
          "Studying the Moon helps us understand the early history of the solar system and the processes that shape planetary bodies.",
        videoUrl: "https://www.youtube.com/embed/F326bq6WwYg",
        keyPoints: [
          "The Moon is tidally locked to Earth, so we only see one side.",
          "The Moon has no atmosphere and extreme temperature variations.",
          "The lunar surface is covered in craters and maria (dark, basaltic plains).",
          "The Moon likely formed from debris after a giant impact on Earth.",
          "Future lunar missions aim to establish a permanent human presence on the Moon."
        ],
        shortVideo: "https://www.youtube.com/embed/o-f7BvJvH0w",
        additionalShortVideos: [
          "https://www.youtube.com/embed/qxzWv_jNTOE",
          "https://www.youtube.com/embed/UIQmSpJ-edg"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A detailed view of the Moon's surface, showing craters and maria."
        },
        quiz: {
          question: "What is the dark, basaltic plains on the Moon called?",
          options: ["Craters", "Maria", "Highlands", "Rilles"],
          correctAnswer: 1
        }
      },
      {
        id: "section-5",
        title: "The Moon in Our Skies",
        introduction:
          "Explore the phases of the Moon and its influence on Earth's tides.",
        whyLearn:
          "Understanding the Moon's phases and its effects on Earth helps us appreciate the interconnectedness of celestial bodies.",
        videoUrl: "https://www.youtube.com/embed/NC-ORyFvj8I",
        keyPoints: [
          "The Moon's phases are caused by the changing angles at which we view its illuminated surface.",
          "The Moon's gravity causes tides on Earth.",
          "Eclipses occur when the Sun, Earth, and Moon align.",
          "The Moon's orbit is elliptical, so its distance from Earth varies.",
          "The Moon has a synchronous rotation, so it always shows the same face to Earth."
        ],
        shortVideo: "https://www.youtube.com/embed/lK9-J99qVd0",
        additionalShortVideos: [
          "https://www.youtube.com/embed/MtAT-Gn1N5w",
          "https://www.youtube.com/embed/mz19W2R-K-w"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A diagram showing the different phases of the Moon."
        },
        quiz: {
          question: "What causes the phases of the Moon?",
          options: [
            "Earth's shadow",
            "The Moon's rotation",
            "Changing angles of sunlight",
            "Volcanic activity"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-6",
        title: "Mapping the Moon",
        introduction:
          "Learn about the history of lunar cartography and how we've mapped the Moon's surface.",
        whyLearn:
          "Mapping the Moon is essential for planning future lunar missions and understanding its geological features.",
        videoUrl: "https://www.youtube.com/embed/Q96vJaduGJA",
        keyPoints: [
          "Early lunar maps were based on telescopic observations.",
          "The first detailed lunar maps were created in the 17th century.",
          "Modern lunar maps are based on satellite imagery and laser altimetry.",
          "Lunar maps are used to identify potential landing sites for future missions.",
          "The Moon's far side was first mapped by the Soviet Luna 3 mission."
        ],
        shortVideo: "https://www.youtube.com/embed/rdlS-QEUlSQ",
        additionalShortVideos: [
          "https://www.youtube.com/embed/o-f7BvJvH0w",
          "https://www.youtube.com/embed/qxzWv_jNTOE"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A detailed map of the Moon's surface, showing craters, maria, and other features."
        },
        quiz: {
          question: "What is laser altimetry used for in lunar mapping?",
          options: [
            "Measuring surface temperatures",
            "Determining chemical composition",
            "Measuring surface elevations",
            "Detecting magnetic fields"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-7",
        title: "The Moon's Unseen Face",
        introduction:
          "Discover the hidden side of the Moon and its unique characteristics.",
        whyLearn:
          "Exploring the far side of the Moon helps us understand its formation and the differences between its two hemispheres.",
        videoUrl: "https://www.youtube.com/embed/vJ3zxJ9rocw",
        keyPoints: [
          "The far side of the Moon is not visible from Earth.",
          "The far side has a thicker crust and fewer maria than the near side.",
          "The South Pole-Aitken basin is the largest impact crater in the solar system.",
          "The far side was first photographed by the Soviet Luna 3 mission.",
          "Future missions aim to establish a radio telescope on the far side."
        ],
        shortVideo: "https://www.youtube.com/embed/rdlS-QEUlSQ",
        additionalShortVideos: [
          "https://www.youtube.com/embed/o-f7BvJvH0w",
          "https://www.youtube.com/embed/qxzWv_jNTOE"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/mJ_fK7a8xXo",
          "https://www.youtube.com/embed/wSFv1euqVwo"
        ],
        image: {
          url: "/lovable-uploads/e0d0af9e-9849-4955-ac58-29cf798cb880.png",
          description: "A view of the far side of the Moon, showing its heavily cratered surface."
        },
        quiz: {
          question: "Which mission first photographed the far side of the Moon?",
          options: [
            "Apollo 8",
            "Luna 3",
            "Chang'e 4",
            "Surveyor 1"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-8",
        title: "Stars",
        introduction:
          "An introduction to the life cycle, properties, and classification of stars.",
        whyLearn:
          "Understanding stars helps us understand the origin of elements, the evolution of galaxies, and the ultimate fate of the universe.",
        videoUrl: "https://www.youtube.com/embed/H7ykErj9jFg",
        keyPoints: [
          "Stars are born in nebulae from collapsing clouds of gas and dust.",
          "Stars generate energy through nuclear fusion in their cores.",
          "Stars are classified by their temperature, luminosity, and spectral type.",
          "Stars evolve through different stages, including main sequence, red giant, and white dwarf.",
          "Massive stars end their lives in supernova explosions, creating neutron stars or black holes."
        ],
        shortVideo: "https://www.youtube.com/embed/PM9CQ8i6W20",
        additionalShortVideos: [
          "https://www.youtube.com/embed/9wF01jJ4790",
          "https://www.youtube.com/embed/9wF01jJ4790"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/x0UNG2l3fgE",
          "https://www.youtube.com/embed/ifKBE62gomk"
        ],
        image: {
          url: "/lovable-uploads/9999961a-8219-4999-8999-5c9544845109.png",
          description: "A colorful image of a nebula, a stellar nursery where stars are born."
        },
        quiz: {
          question: "What process generates energy in the cores of stars?",
          options: [
            "Chemical reactions",
            "Nuclear fission",
            "Nuclear fusion",
            "Gravitational collapse"
          ],
          correctAnswer: 2
        }
      },
      {
        id: "section-9",
        title: "Telescopes",
        introduction:
          "Explore the history and technology of telescopes, from early refracting telescopes to modern space-based observatories.",
        whyLearn:
          "Telescopes allow us to observe distant objects in space and gather information about the universe beyond our solar system.",
        videoUrl: "https://www.youtube.com/embed/09f75QwzCQE",
        keyPoints: [
          "Telescopes collect and focus light from distant objects.",
          "Refracting telescopes use lenses to focus light.",
          "Reflecting telescopes use mirrors to focus light.",
          "Space-based telescopes avoid atmospheric distortion.",
          "Modern telescopes use advanced technologies like adaptive optics and interferometry."
        ],
        shortVideo: "https://www.youtube.com/embed/jE1BSj-iZu4",
        additionalShortVideos: [
          "https://www.youtube.com/embed/4gnF9j6lL0Q",
          "https://www.youtube.com/embed/4gnF9j6lL0Q"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/zrYxdb-V-iE",
          "https://www.youtube.com/embed/sQh9wtt8G1E"
        ],
        image: {
          url: "/lovable-uploads/79999b6d-4999-4999-b999-4999999b9999.png",
          description: "An image of a modern telescope, showcasing its advanced technology."
        },
        quiz: {
          question: "What type of telescope uses lenses to focus light?",
          options: [
            "Reflecting telescope",
            "Refracting telescope",
            "Radio telescope",
            "X-ray telescope"
          ],
          correctAnswer: 1
        }
      },
      {
        id: "section-10",
        title: "Space Exploration",
        introduction:
          "A journey through the history of space exploration, from the first satellites to human missions to the Moon and beyond.",
        whyLearn:
          "Space exploration expands our knowledge of the universe, drives technological innovation, and inspires future generations.",
        videoUrl: "https://www.youtube.com/embed/zSAJ0l4NQmI",
        keyPoints: [
          "The Space Race between the US and the Soviet Union spurred early space exploration.",
          "The first artificial satellite was Sputnik 1, launched by the Soviet Union.",
          "The first human in space was Yuri Gagarin, also from the Soviet Union.",
          "The Apollo program landed humans on the Moon.",
          "Future space missions aim to explore Mars, asteroids, and other destinations."
        ],
        shortVideo: "https://www.youtube.com/embed/yPE4fMhEqjk",
        additionalShortVideos: [
          "https://www.youtube.com/embed/lkzuWj7qqUc",
          "https://www.youtube.com/embed/lkzuWj7qqUc"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/Ky2j8SOB9bc",
          "https://www.youtube.com/embed/mgQMw47oXT4"
        ],
        image: {
          url: "/lovable-uploads/4999999c-9999-4999-b999-999999999999.png",
          description: "An iconic image of astronauts on the Moon during the Apollo program."
        },
        quiz: {
          question: "Which country launched the first artificial satellite into space?",
          options: ["USA", "Soviet Union", "China", "Germany"],
          correctAnswer: 1
        }
      },

      // Adding Section 11: The Sun
      {
        id: "section-11",
        title: "The Sun",
        introduction:
          "The Sun is our nearest star and the center of our solar system. This section explores its incredible power, structure, and importance to life on Earth.",
        whyLearn:
          "Understanding the Sun is essential to understanding our place in the universe and how it powers all life on Earth.",
        videoUrl: "https://www.youtube.com/embed/2HoTK_Gqi2Q",
        mainLesson2Url: "https://www.youtube.com/embed/C7cqc9jHFdg",
        keyPoints: [
          "The Sun is a G-type main-sequence star at the center of our solar system.",
          "It accounts for about 99.86% of the total mass of the Solar System.",
          "The Sun's core reaches temperatures of about 15 million degrees Celsius.",
          "Solar flares and coronal mass ejections can impact Earth's magnetic field.",
          "The Sun is approximately 4.6 billion years old and is halfway through its life cycle."
        ],
        shortVideo: "https://www.youtube.com/embed/pRQwXcn5VAA",
        additionalShortVideos: [
          "https://www.youtube.com/embed/4LFxL9VEM8w"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/X40Re7j1WlI",
          "https://www.youtube.com/embed/d-z0eQOEzkE"
        ],
        image: {
          url: "/lovable-uploads/fb49e844-5050-4fb0-9560-fd65c5e4dad5.png",
          description: "The Sun in different wavelengths, showing its various atmospheric layers and features."
        },
        quiz: {
          question: "What is the approximate temperature at the Sun's core?",
          options: [
            "5,500 degrees Celsius",
            "1 million degrees Celsius",
            "15 million degrees Celsius",
            "100 million degrees Celsius"
          ],
          correctAnswer: 2
        }
      },

      // Adding Section 12: Close to the Sun
      {
        id: "section-12",
        title: "Close to the Sun",
        introduction:
          "This section explores the missions and spacecraft that have ventured close to our star to study its mysteries and help us understand solar activity.",
        whyLearn:
          "Learning about solar missions helps us understand how scientists gather data about the Sun's behavior and its effects on Earth and space weather.",
        videoUrl: "https://www.youtube.com/embed/B3aNeJ5s7ew",
        keyPoints: [
          "The Parker Solar Probe is the closest human-made object to the Sun, designed to study its outer corona.",
          "The Solar Orbiter mission provides unprecedented close-up observations of the Sun.",
          "Solar missions must withstand extreme temperatures and radiation.",
          "Understanding the Sun helps predict space weather that affects Earth's technology.",
          "Solar observatories use special instruments to observe different wavelengths of solar radiation."
        ],
        shortVideo: "https://www.youtube.com/embed/DO03iFYdpp8",
        additionalShortVideos: [
          "https://www.youtube.com/embed/OCKb1v7k8i0"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/_OQzGKJkQEE",
          "https://www.youtube.com/embed/W_cLSvP9qSU",
          "https://www.youtube.com/embed/48_qGtI08i8",
          "https://www.youtube.com/embed/D56oR9-J5wE",
          "https://www.youtube.com/embed/SLmWY_ycFUA"
        ],
        visualUrl: "https://solarsystem.nasa.gov/gltf_embed/2352",
        image: {
          url: "/lovable-uploads/dac0c33f-58a2-44f3-81eb-5f00fda40b1b.png",
          description: "The Parker Solar Probe approaching the Sun's corona, protected by its heat shield."
        },
        quiz: {
          question: "Which spacecraft has traveled closest to the Sun?",
          options: [
            "Voyager 1",
            "Parker Solar Probe",
            "Solar Orbiter",
            "Helios 2"
          ],
          correctAnswer: 1
        }
      },

      // Adding Section 13: Mars
      {
        id: "section-13",
        title: "Mars",
        introduction:
          "Mars, the fourth planet from the Sun, has captivated human imagination for centuries. Known as the Red Planet, it's the most Earth-like world in our solar system.",
        whyLearn:
          "Mars is a primary target for human exploration and possibly future colonization, making it essential to understand its environment and history.",
        videoUrl: "https://www.youtube.com/embed/E-PuUs25rJA",
        mainLesson2Url: "https://www.youtube.com/embed/wFTGP7-n3J8",
        keyPoints: [
          "Mars has a thin atmosphere composed mainly of carbon dioxide.",
          "The planet experiences seasons due to its axial tilt, similar to Earth.",
          "Evidence suggests Mars once had liquid water flowing on its surface.",
          "Mars has the largest volcano in the solar system, Olympus Mons.",
          "The red color of Mars comes from iron oxide (rust) on its surface."
        ],
        shortVideo: "https://www.youtube.com/embed/p7f8oR5ELwk",
        additionalShortVideos: [
          "https://www.youtube.com/embed/dZ3vHb6YPmA"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/wFTGP7-n3J8?list=PL2gLpWRK0QlCXPhOqQD0wqPhLIvjq0BUj"
        ],
        bonusContent2: [
          "NASA's InSight lander detected and recorded sounds of Martian winds, giving us the first 'sounds' from another planet."
        ],
        image: {
          url: "/lovable-uploads/3d8b75cf-5e69-49ac-9444-9c3f6c33fb4c.png",
          description: "The surface of Mars showing its distinctive red landscape and rocky terrain."
        },
        quiz: {
          question: "What gives Mars its distinctive red color?",
          options: [
            "Volcanic activity",
            "Iron oxide (rust) in the soil",
            "Reflection from its moons",
            "Atmospheric methane"
          ],
          correctAnswer: 1
        }
      },

      // Adding Section 14: Mars from Above and the Moons of Mars
      {
        id: "section-14",
        title: "Mars from Above and the Moons of Mars",
        introduction:
          "This section explores the stunning geographical features of Mars as seen from orbit, along with its two small moons, Phobos and Deimos.",
        whyLearn:
          "Understanding Mars' geography and its moons provides crucial information for future exploration missions and insights into the planet's formation.",
        videoUrl: "https://www.youtube.com/embed/wFTGP7-n3J8",
        keyPoints: [
          "Mars has two small, irregularly shaped moons: Phobos and Deimos.",
          "Valles Marineris is a vast canyon system that would stretch across the United States.",
          "The Tharsis region contains massive shield volcanoes including Olympus Mons.",
          "Mars has polar ice caps composed of water ice and dry ice (frozen CO2).",
          "Global dust storms can occasionally cover the entire Martian surface."
        ],
        shortVideo: "https://www.youtube.com/embed/Oo51KBdURMo",
        additionalShortVideos: [
          "https://www.youtube.com/embed/8rjb4fM6EC8",
          "https://www.youtube.com/embed/lHSfFieToSM",
          "https://www.youtube.com/embed/o7RJeAdDmmE",
          "https://www.youtube.com/embed/cTMiM1UZfTc",
          "https://www.youtube.com/embed/JIzw9ap13yk"
        ],
        visualGalleryUrl: "https://mars.nasa.gov/mars2020/multimedia/raw-images/",
        image: {
          url: "/lovable-uploads/444d4246-3b56-42bd-8f43-4c561d66cd37.png",
          description: "Valles Marineris, the 'Grand Canyon of Mars,' stretching over 4,000 km across the planet's surface."
        },
        quiz: {
          question: "What is the name of the largest canyon system on Mars?",
          options: [
            "Olympus Canyon",
            "Valles Marineris",
            "Hellas Basin",
            "Mariner Valley"
          ],
          correctAnswer: 1
        }
      },

      // Adding Section 15: Roving over Mars
      {
        id: "section-15",
        title: "Roving over Mars",
        introduction:
          "This section focuses on the robotic explorers that have landed on Mars, from the early missions to the sophisticated rovers like Curiosity and Perseverance.",
        whyLearn:
          "Mars rovers represent the cutting edge of robotic exploration and have revolutionized our understanding of the Red Planet's history and potential for past life.",
        videoUrl: "https://www.youtube.com/embed/OO5CTBBgtXs",
        mainLesson2Url: "https://www.youtube.com/embed/WrTHX8t0yl8",
        keyPoints: [
          "Rovers have confirmed that Mars once had persistent liquid water on its surface.",
          "The Perseverance rover includes instruments specifically designed to look for signs of ancient microbial life.",
          "Mars rovers use nuclear power (RTGs) to operate for years despite dust storms and harsh conditions.",
          "The Ingenuity helicopter demonstrated the first powered flight on another planet.",
          "Rovers collect samples for potential future return to Earth for detailed analysis."
        ],
        shortVideo: "https://www.youtube.com/embed/IhFK-b5yd2M",
        additionalShortVideos: [
          "https://www.youtube.com/embed/3sbbk-VlRPk",
          "https://www.youtube.com/embed/3wwcN__g3kM",
          "https://www.youtube.com/embed/mfi7-12z_nE"
        ],
        bonusVideos: [
          "https://www.youtube.com/embed/T4UKr7W-YC8",
          "https://www.youtube.com/embed/WNrTttvdIMc",
          "https://www.youtube.com/embed/CIaHiGbFybQ",
          "https://www.youtube.com/embed/iK64wy0b2ic"
        ],
        visualUrl: "https://mars.nasa.gov/gltf_embed/24881",
        image: {
          url: "/lovable-uploads/930c9c02-d768-4457-9ff9-0304dc9579c7.png",
          description: "The Mars Perseverance rover exploring the Martian surface, equipped with scientific instruments and the Ingenuity helicopter."
        },
        quiz: {
          question: "What historic achievement did the Ingenuity helicopter accomplish?",
          options: [
            "First sample return from Mars",
            "First image of Mars from orbit",
            "First powered flight on another planet",
            "First detection of methane on Mars"
          ],
          correctAnswer: 2
        }
      }
    ]
  };

  return baseCourse;
};
