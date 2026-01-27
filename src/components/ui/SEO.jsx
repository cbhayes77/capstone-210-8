import { useEffect } from "react";

export default function SEO({
  title,
  description,
  image = "/assets/brackets-curly-svgrepo-com.svg",
  url = window.location.href,
  type = "website",
}) {
  const siteName = "CB Hayes - Portfolio";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("author", "CB Hayes");

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, image, url, type, siteName]);

  return null;
}
