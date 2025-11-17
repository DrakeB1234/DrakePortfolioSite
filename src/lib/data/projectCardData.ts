export type ProjectCardData = {
  projectTitle: string;
  projectSubTitle: string;
  projectDescription: string;
  viewCodeLink?: string;
  viewLiveLink?: string;
  techStack?: TechStackData[];
  iconLink?: string;
  iconColor?: string;
  projectTextBlocks?: string[];
  projectScreenshotLinks?: string[];
  projectUsedResourcesLinks?: LibraryLink[];
}

type TechStackData = {
  name: string;
  color: string;
};

type LibraryLink = {
  link: string;
  text: string;
};

const TECH_STACK_DATA = {
  react: { name: "React", color: "#61DAFB" } as TechStackData,
  vite: { name: "Vite", color: "#9231BE" } as TechStackData,
  vercel: { name: "Vercel", color: "#212121" } as TechStackData,
  sveltekit: { name: "SvelteKit", color: "#FF3E00" } as TechStackData,
  nextjs: { name: "NextJs", color: "#212121" } as TechStackData,
  supabase: { name: "Supabase", color: "#3ECF8E" } as TechStackData,
  net: { name: ".NET", color: "#512BD4" } as TechStackData,
}

export const PROJECT_CARD_DATA: ProjectCardData[] = [
  {
    projectTitle: "Music Maestro",
    projectSubTitle: "Web app",
    projectDescription: "Web application designed to help teach those new to sight reading and music theory.",
    viewCodeLink: "https://github.com/DrakeB1234/Music-Maestro",
    viewLiveLink: "https://music-maestro-nine.vercel.app",
    iconLink: "icons/Music Maestro Icon.svg",
    iconColor: "#6aa3f7",
    techStack: [
      TECH_STACK_DATA.react, TECH_STACK_DATA.vite, TECH_STACK_DATA.vercel
    ],
    projectTextBlocks: [
      "Built using libraries such as Vexflow and Webmidi to handle staff generation and reading external MIDI inputs from compatible devices.",
      "Sight reading drills were made using Zustand to handle rapidly changing game state in a graceful and percise way. Zustand stores are used to handle states such as score, options, timers, and input devices",
      "Using the browsers native AudioPlayer API and piano samples, midi playback can be turned on in the app to allow for the corresponding piano sound to play in the sight-reading drill",
      "User config can be used to customize sight reading drills as well as allowing and modifying the MIDI playback option."
    ],
    projectScreenshotLinks: [
      "/images/music-maestro/screenshot-1.webp",
      "/images/music-maestro/screenshot-2.webp",
      "/images/music-maestro/screenshot-3.webp",
      "/images/music-maestro/screenshot-4.webp",
    ],
    projectUsedResourcesLinks: [
      { link: "https://www.vexflow.com/", text: "Vex Flow" },
      { link: "https://webmidijs.org/", text: "Web Midi" },
      { link: "https://github.com/pmndrs/zustand", text: "Zustand" },
      { link: "https://github.com/darosh/samples-piano-mp3", text: "Salamander Piano Samples" },
    ]
  },
  {
    projectTitle: "Kaitlyn B Photography",
    projectSubTitle: "Business Site",
    projectDescription: "Website for a local photography business who specializes in couples and newborn photography.",
    iconLink: "icons/Kaitlyn Buen Icon.svg",
    viewCodeLink: "https://github.com/DrakeB1234/Kaitlyn-Buen-Photography",
    viewLiveLink: "https://kaitlynbuenphotography.vercel.app/",
    iconColor: "#9A2C61",
    techStack: [
      TECH_STACK_DATA.sveltekit, TECH_STACK_DATA.vite, TECH_STACK_DATA.vercel
    ],
    projectTextBlocks: [
      "Project was made to be as efficient and fast as possible, as there are many images hosted on the site by the photographer.",
      "Images were normalized to be at most 2000px wide and converted into webp format for smallest possible size for hosting the images.",
      "All data is dynamic, from pricing guide, to the reviews, making changes easy and quick.",
    ],
    projectScreenshotLinks: [
      "/images/kaitlyn-buen-photography/screenshot-1.webp",
      "/images/kaitlyn-buen-photography/screenshot-2.webp",
      "/images/kaitlyn-buen-photography/screenshot-3.webp",
      "/images/kaitlyn-buen-photography/screenshot-4.webp",
    ],
  },
  {
    projectTitle: "Scratchify",
    projectSubTitle: "Web app",
    projectDescription: "Web application for creating and sharing homemade recipes and meal planning.",
    viewCodeLink: "https://github.com/DrakeB1234/Scratchify",
    iconLink: "icons/ScratchifyIcon.svg",
    iconColor: "#67E89F",
    techStack: [
      TECH_STACK_DATA.nextjs, TECH_STACK_DATA.supabase, TECH_STACK_DATA.vercel
    ],
    projectTextBlocks: [
      "Supabase was used to handle/store user data and authentication. Application was wrapped in a provider to provide supabase functions and authentication to protected routes in the app.",
      "Grocery list can utilize created/saved recipes to quickly add ingredients to your list.",
      "Meal planner also utilizes recipes to be able to set a link to a particular recipe when set for that day of the week."
    ],
    projectScreenshotLinks: [
      "/images/scratchify/screenshot-1.webp",
      "/images/scratchify/screenshot-2.webp",
      "/images/scratchify/screenshot-3.webp",
    ],
    projectUsedResourcesLinks: [
      { link: "https://supabase.com/", text: "Supabase" },
    ]
  },
  {
    projectTitle: "Tasty Scrapes",
    projectSubTitle: "Website",
    projectDescription: "Website designed to scrape provided URLS for relevant recipe data and have them formatted in a clean, readable way.",
    viewCodeLink: "https://github.com/DrakeB1234/Tastyscrapes",
    iconLink: "icons/TastyScrapesIcon.svg",
    iconColor: "#ffc0a1",
    techStack: [
      TECH_STACK_DATA.nextjs, TECH_STACK_DATA.vercel
    ],
    projectTextBlocks: [
      "Utilizes a web scraper library to parse through HTML to find relevant recipe data, such as ingredients, images, instructions, and various other meta-data",
      "Uses indexeddb to store recipes in a convient object that can easily be exported outside of the app and later reimported if desired",
      "All scraped data can be changed if parts of a recipe don't match what the user expects or liked from the original."
    ],
    projectScreenshotLinks: [
      "/images/tasty-scrapes/screenshot-1.webp",
      "/images/tasty-scrapes/screenshot-2.webp",
      "/images/tasty-scrapes/screenshot-3.webp",
    ],
  },
]