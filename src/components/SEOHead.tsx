import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  image?: string;
}

const BASE_URL = "https://badshahproperty.in";

const SEOHead = ({
  title,
  description,
  keywords,
  type = "website",
  image = `${BASE_URL}/og-image.jpg`,
}: SEOHeadProps) => {
  const location = useLocation();
  const fullUrl = `${BASE_URL}${location.pathname}`;
  const fullTitle = `${title} | Badshah Property Advisor`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Basic Meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Badshah Property Advisor");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

    // Local Business Schema (Real Estate Agent - Ujjain)
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Badshah Property Advisor",
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.ico`,
      image: image,
      description:
        "Trusted real estate consultant in Ujjain offering residential plots, apartments, villas and commercial property investment advisory services.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Freeganj Mini Chopati street near Gurudwara",
        addressLocality: "Ujjain",
        addressRegion: "Madhya Pradesh",
        postalCode: "456006",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.1765",
        longitude: "75.7885",
      },
      telephone: "+91 98260 44152",
      email: "info@badshahproperty.in",
      areaServed: {
        "@type": "City",
        name: "Ujjain",
      },
      priceRange: "₹₹₹",
    };

    const scriptId = "jsonld-local";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [fullTitle, description, keywords, type, fullUrl, image]);

  return null;
};

export default SEOHead;