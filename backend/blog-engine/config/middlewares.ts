export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["https://your-frontend-domain.com"], // Add your production frontend domain here
      headers: ["Content-Type", "Authorization"], // Customize headers if needed
      methods: ["GET", "POST", "PUT", "DELETE"], // Customize methods if needed
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
