import { ScrollText, Search, Quote, Key, Mic, LucideIcon } from "lucide-react";

// Define a TypeScript type for a single coordinator
export type Coordinator = {
  name: string;
  role: string;
  phone: string;
  image: string;
};

// Update the Event type to include an array of coordinators and a tagline
export type Event = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string; // Added tagline property
  description: string;
  icon: LucideIcon;
  color: string;
  coverImage: string;
  registerLink?: string;
  teamComposition: string;
  venue: string;
  date: string;
  time: string;
  eventStructure: {
    title: string;
    description: string;
    cardImage?: string;
    mysticalSymbol?: string;
    arcana?: string;
  }[];
  generalRules: string[];
  coordinators: Coordinator[];
  mysticalTheme?: {
    primaryColor: string;
    secondaryColor: string;
    cardBorder: string;
    smokeEffect: string;
  };
};

// An array containing all the detailed information for each event.
export const eventsData: Event[] = [
  {
    id: "litwit",
    title: "LITWIT",
    subtitle: "The Art of Spontaneity",
    tagline: "Think fast, talk faster.",
    description:
      "An unconventional quiz where participants build stories on the fly, deliver dramatic speeches, and report on chaotic news, testing creativity, adaptability, and wit.",
    icon: ScrollText,
    color: "from-yellow-600 via-amber-500 to-yellow-600",
    coverImage: "/litwit.jpg",
    registerLink:
      "https://conoscenza2025.stjosephstechnology.ac.in/registration/",
    teamComposition: "Individual",
    venue: "AV Hall II",
    date: "September 13th, 2025",
    time: "8:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round – Similar Sense",
        description:
          "This round is a quick-fire quiz where participants must identify the correct synonyms for the given words. The challenge tests their speed, vocabulary knowledge, and accuracy, with only the sharpest participants qualifying for the next round.",
        cardImage: "/litwit-round-1.jpg",
        mysticalSymbol: "🌟",
        arcana: "The Fool's Journey",
      },
      {
        title: "Semi-Final Round – Flash Fiction",
        description:
          "In this round, participants will be given three unrelated words and must creatively weave them into a short story. They will have 2 minutes of brainstorming time before presenting their story, which will be judged based on creativity, coherence, and fluency, highlighting both imagination and storytelling skills.",
        cardImage: "/litwit-round-2.jpg",
        mysticalSymbol: "🎭",
        arcana: "The Magician",
      },
      {
        title: "Final Round – Reverse Talk",
        description:
          "In this round, participants will be given a topic to speak on, but with a twist — if the host says “Pros”, they must instantly respond with a Con, and if the host says “Cons”, they must quickly counter with a Pro. The challenge tests their quick thinking, adaptability, and ability to present relevant points, with the most spontaneous and logical speaker emerging as the winner.",
        cardImage: "/litwit-round-3.jpg",
        mysticalSymbol: "⚡",
        arcana: "The Tower",
      },
    ],
    generalRules: [
      "This is an individual event.",
      "Time limits must be strictly followed.",
      "Use of offensive or inappropriate content is prohibited.",
      "No external aids (notes, phones, props, etc.) are allowed.",
      "The judges' decision will be final and binding.",
    ],
    coordinators: [
      {
        name: "Jayasadana",
        role: "Event Head",
        phone: "9840836207",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      {
        name: "Jostina Rachel",
        role: "Co-ordinator",
        phone: "9094057388",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Manashaa U",
        role: "Co-ordinator",
        phone: "7200048392",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        name: "Jayamkuru Karthik N",
        role: "Co-ordinator",
        phone: "9363392004",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      {
        name: "Kishore Kumar S",
        role: "Co-ordinator",
        phone: "9345575478",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
    mysticalTheme: {
      primaryColor: "purple",
      secondaryColor: "indigo",
      cardBorder: "border-purple-400/50",
      smokeEffect: "from-purple-500/20",
    },
  },
  {
    id: "penman",
    title: "PENMAN'S CODE",
    subtitle: "Words bleed fear",
    tagline: "Unlock the secrets of literature.",
    description:
      "Step into a world of mystery, thrill, and chills with our ultimate quiz challenge, where quotes and image clues from books, movies, and TV series test your wits — only the fastest and sharpest minds will make it through!",
    icon: Search,
    color: "from-yellow-600 via-amber-500 to-yellow-600",
    coverImage: "/penman.jpg",
    registerLink:
      "https://conoscenza2025.stjosephstechnology.ac.in/registration/",
    teamComposition: "2 - 3 Members",
    venue: "AV Hall III",
    date: "September 13th, 2025",
    time: "8:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Prelims - Connect and conquer",
        description:
          "This round is based on the Horror, Thriller, and Fantasy Mystery genres, drawing inspiration from literature, TV series, and movies. Each question will present participants with 2 to 4 images that serve as visual clues, collectively hinting at a character, title, or genre-related word. Participants must carefully analyze the clues and identify the correct answer within 30 seconds. The shortlisting of teams will be done based on their scores, rewarding both accuracy and quick thinking.",
        cardImage: "/penman-round-1.jpg",
        mysticalSymbol: "🔍",
        arcana: "The Hermit",
      },
      {
        title: "Finals - Thrill to chill",
        description:
          "In this round, each team will be given a scene from a well-known book, movie, or series belonging to the Horror, Thriller, or Fantasy Mystery genres. The challenge is to recreate the scene in a comic way, transforming fear into laughter through humor, exaggeration, and unexpected twists. Teams will be given 3 minutes to prepare and a maximum of 5 minutes to perform their act. Performances will be evaluated based on acting and expression, comedic recreation of the scene, team coordination, creativity, execution, and overall humor, ensuring a fun-filled and entertaining experience for both participants and the audience.",
        cardImage: "/penman-round-2.jpg",
        mysticalSymbol: "🗝️",
        arcana: "The High Priestess",
      },
    ],
    generalRules: [
      "Each team must consist of 2 - 3 members.",
      "Use of mobile phones or reference material is strictly prohibited.",
      "The decision of the judges/organizers will be final and binding.",
    ],
    coordinators: [
      {
        name: "A JEEVIKA",
        role: "Event Head",
        phone: "9444135198",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        name: "JASLINE G",
        role: "Co-ordinator",
        phone: "7904955221",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
      },
      {
        name: "M.SASIDHARAN",
        role: "Co-ordinator",
        phone: "9500009481",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
      },
      {
        name: "V.C.SRIRAAM",
        role: "Co-ordinator",
        phone: "7305896363",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        name: "HEMANTH R",
        role: "Co-ordinator",
        phone: "8754406927",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    ],
    mysticalTheme: {
      primaryColor: "emerald",
      secondaryColor: "teal",
      cardBorder: "border-emerald-400/50",
      smokeEffect: "from-emerald-500/20",
    },
  },
  {
    id: "mindquote",
    title: "MIND QUOTE",
    subtitle: "Match Quotes to Authors",
    tagline: "Whose line is it anyway?",
    description:
      "Challenge your memory of literary quotations by matching famous lines to their authors and original works in themed rounds.",
    icon: Quote,
    color: "from-yellow-600 via-amber-500 to-yellow-600",
    coverImage: "/mindquote.jpg",
    teamComposition: "2–3 Members",
    venue: "AV Hall I",
    registerLink:
      "https://conoscenza2025.stjosephstechnology.ac.in/registration/",
    date: "September 13th, 2025",
    time: "8:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round",
        description:
          "A written round where teams are shown a set of famous quotes from literature and must identify either the author or the book. Speed and accuracy are key for evaluation.",
        cardImage:
          "https://i.ytimg.com/vi/601IkI1HEmI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0Pl4VfnUzd66uKp4NJCL3Usfazg",
        mysticalSymbol: "📜",
        arcana: "The World",
      },
      {
        title: "Final Round",
        description:
          "The final will consist of themed rounds such as Romantic Quotes, War Speeches, Opening Lines, etc. Participants may be required to identify the speaker, state the context, or provide the book title. Bonus points will be awarded for explaining the context or literary significance.",
        cardImage:
          "https://www.alphr.com/wp-content/uploads/2022/03/Find-a-Book-Title-When-You-Dont-Know-the-Name.jpeg",
        mysticalSymbol: "💫",
        arcana: "The Star",
      },
    ],
    generalRules: [
      "Each team must consist of 2 or 3 members only.",
      "Use of mobile phones or reference material is strictly prohibited.",
      "The decision of the judges/organizers will be final and binding.",
      "In case of a tie, a tie-breaker round will be conducted.",
      "Teams are expected to maintain discipline and academic integrity throughout.",
    ],
    coordinators: [
      {
        name: "Suji S",
        role: "Coordinator",
        phone: "+91 9092631365",
        image: "https://randomuser.me/api/portraits/women/9.jpg",
      },
      {
        name: "Sam Judson J",
        role: "Coordinator",
        phone: "+91 9444829037",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
      },
      {
        name: "Samuel Sangeeth Ponraj",
        role: "Coordinator",
        phone: "+91 7358056766",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Tharaneeshwaran M M",
        role: "Coordinator",
        phone: "+91 9600045434",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
      },
      {
        name: "Ridsiyanimi",
        role: "Coordinator",
        phone: "+91 8807124257",
        image: "https://randomuser.me/api/portraits/women/13.jpg",
      },
    ],

    mysticalTheme: {
      primaryColor: "rose",
      secondaryColor: "pink",
      cardBorder: "border-rose-400/50",
      smokeEffect: "from-rose-500/20",
    },
  },
  {
    id: "litcrypt",
    title: "LITCRYPT",
    subtitle: "Decode the literary ciphers",
    tagline: "Decode the word, master the memory.",
    description:
      "The event features a two round format - anagrammed dialogues and mind palace. These rounds are intended to evaluate participants' ability to decipher the clues for information, observation skills and recollecting capacity.",
    icon: Key,
    color: "from-yellow-600 via-amber-500 to-yellow-600",
    registerLink:
      "https://conoscenza2025.stjosephstechnology.ac.in/registration/",
    coverImage: "/litcrypt.jpg",
    teamComposition: "3 Members",
    venue: "Library Conference Hall",
    date: "September 13th, 2025",
    time: "8:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round - Anagrammed dialogues",
        description:
          "Participants will be presented with anagrammed dialogues from detective novels. With the help of provided clues, they must arrange the dialogues in the correct format within a 2-minute time limit. In the case of a tie, a 1-minute tie-breaker round will be conducted. The total number of rounds will be decided based on the number of participating teams.",
        cardImage:
          "https://t4.ftcdn.net/jpg/04/72/55/21/360_F_472552101_F5jfrd6Mg2UNsb640dHH1bNJ9DDW7vC1.jpg",
        mysticalSymbol: "🔮",
        arcana: "The Moon",
      },
      {
        title: "Final Round – Image Memory Challenge",
        description:
          "A detailed picture with multiple objects is shown for 30 seconds. After it's removed, participants must answer questions about the image (e.g., objects, colors, positions). Each correct answer earns points.",
        cardImage:
          "https://img.freepik.com/free-photo/top-view-memory-concept-with-post-its-magnifying-glass_23-2149320984.jpg",
        mysticalSymbol: "👁️",
        arcana: "The Sun",
      },
    ],
    generalRules: [
      "Each team must consist of 2–3 members.",
      "No writing or note-taking is allowed during rounds.",
      "Use of mobile phones or external help is prohibited.",
      "Time limits must be followed strictly.",
      "The judges'/organizers' decision will be final.",
    ],
    coordinators: [
      {
        name: "Abishek",
        role: "Event Head",
        phone: "7200471396",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Abhinaya",
        role: "Co-ordinator",
        phone: "6379068324",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Harikrishnan",
        role: "Co-ordinator",
        phone: "7010438341",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
      },
      {
        name: "Abinaya M",
        role: "Co-ordinator",
        phone: "7200460864",
        image: "https://randomuser.me/api/portraits/women/14.jpg",
      },
      {
        name: "Gunapriya R",
        role: "Co-ordinator",
        phone: "8148894259",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
      },
    ],
    mysticalTheme: {
      primaryColor: "violet",
      secondaryColor: "purple",
      cardBorder: "border-violet-400/50",
      smokeEffect: "from-violet-500/20",
    },
  },
  {
    id: "eloquentia",
    title: "ELOQUENTIA",
    subtitle: "Oratory Challenge",
    tagline: "Command the stage.",
    description:
      "Demonstrate the art of public speaking through impromptu speeches, dramatic recitations, and persuasive presentations.",
    icon: Mic,
    color: "from-yellow-600 via-amber-500 to-yellow-600",
    coverImage: "/eloquentia-image.jpg",
    teamComposition: "Individual",
    venue: "AV Hall I",
    registerLink:
      "https://conoscenza2025.stjosephstechnology.ac.in/registration/",
    date: "September 13th, 2025",
    time: "8:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round",
        description:
          "Participants select from a set of literary and social themes and must speak for 2 minutes on the chosen topic. Judging will be based on content, clarity, and confidence.",
        cardImage:
          "https://www.brainwonders.in/blog_feature_images/2021/11/2021-11-13-10-47-57Public_speaking_Banner_Image.webp",
        mysticalSymbol: "🎤",
        arcana: "Strength",
      },
      {
        title: "Final Round",
        description:
          "Participants are given on-the-spot topics with limited preparation time. They must deliver a structured and impactful speech. Surprise formats such as debate or rebuttal may be included.",
        cardImage:
          "https://i.ytimg.com/vi/ZV9sUy0XM00/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzh2hdZnGun_Ufums6j1ixHsdSZg",
        mysticalSymbol: "👑",
        arcana: "The Emperor",
      },
    ],
    generalRules: [
      "This is an individual event.",
      "Use of notes, phones, or props is not allowed.",
      "Respectful and appropriate content is expected.",
      "Time limits must be strictly followed.",
      "The judges' decision is final.",
    ],
    coordinators: [
      {
        name: "Sharmila O",
        role: "Event Head",
        phone: "9566876742",
        image: "https://randomuser.me/api/portraits/women/17.jpg",
      },
      {
        name: "Varshini R",
        role: "Co-ordinator",
        phone: "9176985071",
        image: "https://randomuser.me/api/portraits/women/16.jpg",
      },

      {
        name: "Harini T",
        role: "Co-ordinator",
        phone: "8667455451",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
      },
      {
        name: "Joshva D",
        role: "Co-ordinator",
        phone: "9677370450",
        image: "https://randomuser.me/api/portraits/men/19.jpg",
      },
      {
        name: "Taasha V",
        role: "Co-ordinator",
        phone: "9080344640",
        image: "https://randomuser.me/api/portraits/women/20.jpg",
      },
    ],
    mysticalTheme: {
      primaryColor: "amber",
      secondaryColor: "orange",
      cardBorder: "border-amber-400/50",
      smokeEffect: "from-amber-500/20",
    },
  },
];
