// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "~/assets/transition/fade.css",
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
  ],
  plugins: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
});
