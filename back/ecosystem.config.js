module.exports = {
  apps: [
    {
      name: "gestion-stock",
      script: "./build/back/server.js",
      env: {
        PORT: "7777",
      },
    },
  ],
};
