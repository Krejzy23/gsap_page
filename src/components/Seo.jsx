import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "AK Portfolio";

const pageMetadata = {
  "/": {
    title: "Creative Developer — React, WebGL & GSAP",
    description:
      "Portfolio of Aleš Krejzl, a creative developer building expressive digital experiences with React, WebGL and GSAP.",
  },
  "/about": {
    title: "About — Creative Developer",
    description:
      "Learn about Aleš Krejzl, a creative developer focused on motion, typography, React, WebGL and interactive systems.",
  },
  "/projects": {
    title: "Projects — Selected Web Experiences",
    description:
      "Explore selected web projects by Aleš Krejzl, from interactive sites to full-stack applications and AI tools.",
  },
  "/contact": {
    title: "Contact — Let's Work Together",
    description:
      "Get in touch with Aleš Krejzl for freelance work, collaborations and long-term digital projects.",
  },
};

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    const title = `${metadata.title} | ${siteName}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", metadata.description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", metadata.description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", metadata.description);
  }, [pathname]);

  return null;
}
