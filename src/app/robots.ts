import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://amikan-sshges.ru";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/privacy-policy",
        "/cookie-policy",
        "/terms-user",
        "/provide-policy",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
