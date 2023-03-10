import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      onlineStore: 'https://askomdch.com/',
      email: 'cj75yo@gmail.com',
      username: 'cj75yo',
      password: 'Test750!!'
    },
    viewportHeight: 1080,
    viewportWidth: 1920,

    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
