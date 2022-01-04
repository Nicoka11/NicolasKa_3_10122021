const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "NicolasKa_3_10122021/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        restaurant1: resolve(__dirname, "pages/restaurant-a-la-francaise.html"),
        restaurant2: resolve(
          __dirname,
          "pages/restaurant-la-note-enchantee.html"
        ),
        restaurant3: resolve(
          __dirname,
          "pages/restaurant-la-palette-du-gout.html"
        ),
        restaurant4: resolve(
          __dirname,
          "pages/restaurant-le-delice-des-sens.html"
        ),
      },
    },
  },
});
