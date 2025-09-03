import { ScrollText, Search, Quote, Key, Mic, LucideIcon } from "lucide-react";

// Define a TypeScript type for a single coordinator
export type Coordinator = {
  name: string;
  role: string;
  phone: string;
  image: string;
};

// Update the Event type to include an array of coordinators
export type Event = {
  id: string;
  title: string;
  subtitle: string;
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
  coordinators: Coordinator[]; // Added coordinators property
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
    subtitle: "Literature Quiz with a Twist",
    description:
      "An unconventional quiz where participants build stories on the fly, deliver dramatic speeches, and report on chaotic news, testing creativity, adaptability, and wit.",
    icon: ScrollText,
    color: "from-purple-600 to-indigo-600",
    coverImage:
      "https://files.brainfall.com/wp-content/uploads/2020/08/the_ultimate_english_literature_quiz_featured.jpg",
    teamComposition: "Individual",
    venue: "The Globe Theatre Hall",
    date: "March 15th, 2025",
    time: "2:00 PM - 4:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round – Twist-a-Tale",
        description:
          "Participants are given a sentence prompt and must build a short story within the given time. The host may interrupt and alter the story direction, and participants must adapt instantly. Creativity, adaptability, and fluency will determine who qualifies for the next round.",
        cardImage:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        mysticalSymbol: "🌟",
        arcana: "The Fool's Journey",
      },
      {
        title: "Semi-Final Round – Oscar Speech",
        description:
          "Participants pick a random award category and deliver a one-minute humorous and engaging thank you speech. Judging is based on creativity, humor, and delivery.",
        cardImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        mysticalSymbol: "🎭",
        arcana: "The Magician",
      },
      {
        title: "Final Round – Newsroom Chaos",
        description:
          "Participants act as news anchors and must deliver a serious one-minute news report using three random, unrelated words. Creativity, humor, adaptability, and fluency will decide the winner.",
        cardImage:
          "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=600&fit=crop",
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
        name: "Aarav Sharma",
        role: "Event Head",
        phone: "+91 98765 12345",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        name: "Priya Singh",
        role: "Co-coordinator",
        phone: "+91 98765 12346",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
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
    subtitle: "Author and Plot Deduction",
    description:
      "Decode mysterious clues to identify famous authors and their masterworks through layered puzzles and plot deductions.",
    icon: Search,
    color: "from-emerald-600 to-teal-600",
    coverImage: "/penman.jpg",
    teamComposition: "2 Members",
    venue: "The Manuscript Library",
    date: "March 16th, 2025",
    time: "10:00 AM - 12:00 PM",
    eventStructure: [
      {
        title: "Prelims",
        description:
          "Participants are given short plot synopses, disguised character arcs, or shuffled storylines. They must deduce the correct author or title. This round tests deep reading and critical analysis. Top scorers proceed to the finals.",
        cardImage:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        mysticalSymbol: "🔍",
        arcana: "The Hermit",
      },
      {
        title: "Finals",
        description:
          "Finalists will be presented with layered clues—quotes, paraphrased plotlines, or obscured character identifiers—and must match them to authors, genres, or periods. Bonus rounds may include buzzer questions and red herrings to elevate difficulty.",
        cardImage:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
        mysticalSymbol: "🗝️",
        arcana: "The High Priestess",
      },
    ],
    generalRules: [
      "Each team must consist of 2 members.",
      "Use of mobile phones or reference material is strictly prohibited.",
      "The decision of the judges/organizers will be final and binding.",
    ],
    coordinators: [
      {
        name: "Rohan Verma",
        role: "Event Head",
        phone: "+91 91234 56789",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        name: "Ananya Gupta",
        role: "Co-coordinator",
        phone: "+91 91234 56780",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    description:
      "Challenge your memory of literary quotations by matching famous lines to their authors and original works in themed rounds.",
    icon: Quote,
    color: "from-rose-600 to-pink-600",
    coverImage:
      "https://static.vecteezy.com/system/resources/previews/010/354/340/non_2x/poetry-day-background-template-free-vector.jpg",
    teamComposition: "2–3 Members",
    venue: "The Bard's Chamber",
    date: "March 17th, 2025",
    time: "3:00 PM - 5:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round",
        description:
          "A written round where teams are shown a set of famous quotes from literature and must identify either the author or the book. Speed and accuracy are key for evaluation.",
        cardImage:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        mysticalSymbol: "📜",
        arcana: "The World",
      },
      {
        title: "Final Round",
        description:
          "The final will consist of themed rounds such as Romantic Quotes, War Speeches, Opening Lines, etc. Participants may be required to identify the speaker, state the context, or provide the book title. Bonus points will be awarded for explaining the context or literary significance.",
        cardImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
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
        name: "Vikram Reddy",
        role: "Event Head",
        phone: "+91 87654 32109",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "Saanvi Joshi",
        role: "Co-coordinator",
        phone: "+91 87654 32108",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
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
    subtitle: "Guess the Word & Memory Challenge",
    description:
      "A two-part challenge involving clever word-guessing in the prelims and a sharp image memory test in the finals.",
    icon: Key,
    color: "from-violet-600 to-purple-600",
    coverImage: "https://i.imgur.com/c4fJ2gH.jpeg",
    teamComposition: "2–3 Members",
    venue: "The Cipher Hall",
    date: "March 18th, 2025",
    time: "1:00 PM - 3:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round",
        description:
          "One player becomes the Word Master and thinks of a secret word, revealing only the first letter. Guessers suggest words and ask category-based questions. If two Guessers repeat a word, the next letter is revealed. The round continues until the word is guessed.",
        cardImage:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
        mysticalSymbol: "🔮",
        arcana: "The Moon",
      },
      {
        title: "Final Round – Image Memory Challenge",
        description:
          "A detailed picture with multiple objects is shown for 30 seconds. After it's removed, participants must answer questions about the image (e.g., objects, colors, positions). Each correct answer earns points.",
        cardImage:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
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
        name: "Aditya Kumar",
        role: "Event Head",
        phone: "+91 76543 21098",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        name: "Diya Patel",
        role: "Co-coordinator",
        phone: "+91 76543 21097",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Diya Patel",
        role: "Co-coordinator",
        phone: "+91 76543 21097",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Diya Patel",
        role: "Co-coordinator",
        phone: "+91 76543 21097",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Diya Patel",
        role: "Co-coordinator",
        phone: "+91 76543 21097",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Diya Patel",
        role: "Co-coordinator",
        phone: "+91 76543 21097",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
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
    description:
      "Demonstrate the art of public speaking through impromptu speeches, dramatic recitations, and persuasive presentations.",
    icon: Mic,
    color: "from-amber-600 to-orange-600",
    coverImage: "https://i.imgur.com/m3N0Z9X.jpeg",
    teamComposition: "Individual",
    venue: "The Grand Auditorium",
    date: "March 19th, 2025",
    time: "4:00 PM - 6:00 PM",
    eventStructure: [
      {
        title: "Preliminary Round",
        description:
          "Participants select from a set of literary and social themes and must speak for 2 minutes on the chosen topic. Judging will be based on content, clarity, and confidence.",
        cardImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
        mysticalSymbol: "🎤",
        arcana: "Strength",
      },
      {
        title: "Final Round",
        description:
          "Participants are given on-the-spot topics with limited preparation time. They must deliver a structured and impactful speech. Surprise formats such as debate or rebuttal may be included.",
        cardImage:
          "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=600&fit=crop",
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
        name: "Ishaan Mehra",
        role: "Event Head",
        phone: "+91 65432 10987",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        name: "Zara Khan",
        role: "Co-coordinator",
        phone: "+91 65432 10986",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
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
