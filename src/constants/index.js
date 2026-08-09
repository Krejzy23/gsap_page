export const slidesData = [
  {
    slug: "steakhouse-restaurant",
    type: "web",
    title: "Steakhouse Restaurant",
    subTitle:"A modern website for a family restaurant with an emphasis on clarity and a simple user experience, complemented by eye-catching animations.",
    img: "/pictures/menu.webp",
    align: "left",
    theme: "dark",
    live: "https://steakhouse-gold.vercel.app/",
    git: "https://github.com/Krejzy23/steakhouse",
    tech:["react.svg","vite.svg","javascript.svg","gsap.svg","tailwind.svg" ]
  },
  {
    slug: "mern-blog",
    type: "web",
    title: "M.E.R.N. Blog",
    subTitle:"My personal blog written in M.E.R.N. stack with Firebase authentication, full admin dashboard with an interesting neo cyber design.",
    img: "/pictures/mernProjects.webp",
    align: "center",
    theme: "dark",
    live: "https://m-e-r-n-blog.onrender.com/",
    git: "https://github.com/Krejzy23/M.E.R.N-blog",
    tech:["react.svg","vite.svg","mongodb.svg","express.svg", "redux.svg", "nodejs.svg","gsap.svg", "tailwind.svg","firebase.svg"]
  },
  {
    slug: "image-ai-application",
    type: "web",
    title: "Image AI application",
    subTitle:"SaaS platform build for image processing.Offer secure payment integration by Stripe,multiple AI-powered features and user authentication handled by Clerk and database is connect to MongoDB",
    img: "/pictures/imageAiProjects.webp",
    align: "right",
    theme: "dark",
    live: "https://image-ai-nu.vercel.app/",
    git: "https://github.com/Krejzy23/Image-Ai",
    tech:["next.svg", "typescripts.svg", "clerk.svg", "mongodb.svg", "tailwind.svg"],
  },
  {
    slug: "personal-photograph",
    type: "web",
    title: "Personal Photograph",
    subTitle:"My very first responsive design photography portfolio project with a jQuery gallery and pop-up navigation bar.",
    img: "/pictures/photoProjects.webp",
    align: "split",
    theme: "image-heavy",
    live: "https://photographer-portfolio-nine.vercel.app/",
    git: "https://github.com/Krejzy23/Photographer_portfolio",
    tech:["html.svg", "css.svg", "javascript.svg","jquery.svg"],
  },
];

export const projectTypes = [
  { id: "all", label: "All projects" },
  { id: "web", label: "Web apps" },
  { id: "mobile", label: "Mobile apps" },
];

// Complete each project, then set isReady to true to publish it in the portfolio.
// `img` should point to one strong vertical app screenshot in public/pictures.
export const mobileProjects = [
  {
    slug: "curro",
    type: "mobile",
    isReady: true,
    title: "Curro",
    subTitle: "CURRO combines distance, time, and pace tracking with clear statistics, weekly goals, and a community feed to keep you moving.",
    img: "/pictures/cuuroMain.webp",
    live: "https://curro-eight.vercel.app/",
    git: "https://curro-eight.vercel.app/",
    tech: ["react.svg", "expo.svg", "typescripts.svg", "firebase.svg", "tailwind.svg"],
  },
  {
    slug: "egg-tracker",
    type: "mobile",
    isReady: true,
    title: "Egg Tracker",
    subTitle: "Egg Laying Tracker is a simple and powerful app for tracking your chickens' egg production.",
    img: "/pictures/eggMain.webp",
    live: "https://play.google.com/store/apps/details?id=com.aleskrejzl.eggtracker",
    git: "https://github.com/Krejzy23/Egg_tracker",
    tech: ["react.svg", "expo.svg", "typescripts.svg", "firebase.svg", "tailwind.svg"],
  },
  {
    slug: "river-diary",
    type: "mobile",
    isReady: true,
    title: "River Diary",
    subTitle: "Log the river, section, river kilometer, crew, boat type, difficulty, and your own notes. You can also save the route and water level for each trip, making it easy to return to later.",
    img: "/pictures/riverMain.webp",
    live: "https://play.google.com/store/apps/details?id=com.aleskrejzl.riverdiary",
    git: "https://github.com/Krejzy23/River_Diary",
    tech: ["react.svg", "expo.svg", "typescripts.svg", "api.svg", "firebase.svg", "tailwind.svg"],
  },
  {
    slug: "MeteoMind",
    type: "mobile",
    isReady: true,
    title: "MeteoMind",
    subTitle: "MeteoMind is a smart health tracker that helps you log symptoms, monitor atmospheric pressure, and predict migraines based on real meteorological data.",
    img: "/pictures/meteomindMain.webp",
    live: "https://play.google.com/store/apps/details?id=com.krejzy23.meteoapp",
    git: "https://github.com/Krejzy23/MeteoMind_App",
    tech: ["react.svg", "expo.svg", "typescripts.svg", "api.svg", "firebase.svg", "tailwind.svg"],
  },
];

export const items = [
  { text: "FONTS", style: "font-playfair tracking-widest text-neutral-500" },
  {
    text: "COLORS",
    style: "font-roboto italic tracking-tight text-neutral-500",
  },
  { text: "LAYOUTS", style: "font-cormorant italic text-neutral-500" },
  { text: "ANIMATIONS", style: "font-extrabold text-stone-500" },
  { text: "FUNCTIONS", style: "font-thin tracking-widest text-neutral-400" },
  { text: "TRENDS", style: "font-medium text-neutral-500" },
  { text: "FEELING", style: "font-bold text-neutral-100" },
];

export const posts = [
  {
    id: 1,
    slug: "steakhouse-restaurant",
    title: "Restaurant page",
    image: "/pictures/menu.webp",
    tags: ["React", "Tailwind","GSAP", "RestAPIs"],
  },
  {
    id: 2,
    slug: "mern-blog",
    title: "M.E.R.N Blog",
    image: "/pictures/mern.webp",
    tags: ["React","Firebase","Tailwind"],
  },
  {
    id: 3,
    slug: "image-ai-application",
    title: "IMAGE AI SAAS ",
    image: "/pictures/imageAI.webp",
    tags: ["Next", "Clerk", "MongoDB", "Tailwind"],
  },
  {
    id: 4,
    slug: "personal-photograph",
    title: "Personal Page",
    image: "/pictures/photo1.webp",
    tags: ["HTML5", "CSS3","jQuery"],
  },
];

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },


];

export const footerSocials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/420777936810",
    icon: "/icons/whatsapp.svg",
  },
  {
    label: "Email",
    href: "mailto:ales.krejzl@gmail.com",
    icon: "/icons/mail.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/Krejzy23",
    icon: "/icons/github1.svg",
  },
  {
    label: "Vercel",
    href: "https://vercel.com/krejzy23s-projects",
    icon: "/icons/vercel.svg",
  },
  {
    label: "TryHackMe",
    href: "https://tryhackme.com/p/AlKr",
    icon: "/icons/tryhackme.svg",
  },
];
