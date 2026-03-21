import { useEffect } from "react";
import { getLocalBusinessSchema } from "../lib/structuredData";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({
  title = "Brown's Sporting Goods | Outdoor Gear in Garberville, California",
  description = "Brown's Sporting Goods is a local Garberville destination for fishing, camping, hunting, sports and outdoor gear.",
}: SEOProps) {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Inject JSON-LD Schema
    const scriptId = "json-ld-local-business";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(getLocalBusinessSchema());
  }, [title, description]);

  return null;
}
