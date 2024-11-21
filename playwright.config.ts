import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests", // Directory for your tests
  use: {
    baseURL: "http://localhost:3000", // Ensure your app is running here
    headless: true, // Run tests in headless mode
  },
});
