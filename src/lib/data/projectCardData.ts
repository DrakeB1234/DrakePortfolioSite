type ProjectCardData = {
  projectTitle: string;
  projectSubTitle: string;
  projectDescription: string;
  viewLiveLink?: string;
  techStack?: string[];
  iconLink?: string;
  iconColor?: string;
}

export const PROJECT_CARD_DATA: ProjectCardData[] = [
  {
    projectTitle: "Music Maestro",
    projectSubTitle: "Web app",
    projectDescription: "Web application designed to help teach those new to sight reading and music theory.",
    viewLiveLink: "https://music-maestro-nine.vercel.app",
    iconLink: "/Music Maestro Icon.svg",
    iconColor: "#6aa3f7",
    techStack: [
      "React", "Vite", "Vercel"
    ]
  },
  {
    projectTitle: "Kaitlyn B Photography",
    projectSubTitle: "Business Site",
    projectDescription: "Website for a local photography business who specializes in couples and newborn photography.",
    iconColor: "#A16778",
    techStack: [
      "Svelte", "Vite", "Vercel"
    ]
  },
  {
    projectTitle: "Scratchify",
    projectSubTitle: "Web app",
    projectDescription: "Web application for creating and sharing homemade recipes and meal planning.",
    iconLink: "/ScratchifyIcon.svg",
    iconColor: "#67E89F",
    techStack: [
      "NextJS", "Supabase", "Vercel"
    ]
  },
  {
    projectTitle: "Tasty Scrapes",
    projectSubTitle: "Website",
    projectDescription: "Website designed to scrape provided URLS for relevant recipe data and have them formatted in a clean, readable way.",
    iconLink: "/TastyScrapesIcon.svg",
    iconColor: "#ffc0a1",
    techStack: [
      "NextJS", "Vercel"
    ]
  },
]