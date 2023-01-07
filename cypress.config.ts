import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      onlineStore: 'https://askomdch.com/',
      email: 'c@c.com',
      username: 'cj',
      password: 'Test750!!'
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
