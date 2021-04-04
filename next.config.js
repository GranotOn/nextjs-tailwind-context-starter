// const withCSS = require('@zeit/next-css')
const withImages = require("next-images");

module.exports = withImages({
  // withCSS({
  async headers() {
    return [
      {
        // mathching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/agent-broker": { page: "/agent=broker" },
      "/amc-roster": { page: "/amc-roster" },
      "/amcs": { page: "/amcs" },
      "/api-solution": { page: "/api-solution" },
      "/appraiser": { page: "/appraiser" },
      "/background-check": { page: "/background-check" },
      // "/blog": { page: "/blog" },
      // "/blog/[slug]": { page: "/blog" },
      "/bpo-providers": { page: "/bpo-providers" },
      "/company": { page: "/company" },
      "/compliance-risk": { page: "/compliance" },
      "/contact": { page: "/contact" },
      "/dash": { page: "/dash" },
      "/fee-survey": { page: "/fee-survey" },
      "/lenders": { page: "/lenders" },
      "/login": { page: "/login" },
      "/map": { page: "/map" },
      "/newsletter": { page: "/newsletter" },
      "/press": { page: "/press" },
      "/press/[slug]": { page: "/press" },
      "/privacy-policy": { page: "/privacy-policy" },
      "/products": { page: "/products" },
      "/qscore": { page: "/qscore" },
      "/regulators": { page: "/regulators" },
      "/signup": { page: "/signup" },
      "/signup-api": { page: "/signup-api" },
      "/signup-amc": { page: "/signup-amc" },
      "/signup-agent": { page: "/signup-agent" },
      "/signup-broker": { page: "/signup-broker" },
      "/signup-company": { page: "/signup-company" },
      "/signup-lender": { page: "/signup-lender" },
      "/stakeholders": { page: "/stakeholders" },
      "/support": { page: "/support" },
    };
  },
});
