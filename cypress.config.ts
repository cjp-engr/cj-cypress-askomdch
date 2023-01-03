import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      onlineStore: 'https://askomdch.com/',
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
