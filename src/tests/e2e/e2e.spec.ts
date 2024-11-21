import { test, expect } from "@playwright/test";

test.describe("Dynamic Form Generator", () => {
  test("JSON editor updates form preview in real-time", async ({ page }) => {
    await page.goto("/");

    // Type in JSON editor
    await page.fill(
      ".json-editor textarea",
      JSON.stringify({
        formTitle: "Test Form",
        formDescription: "A dynamic form",
        fields: [{ id: "name", type: "text", label: "Name", required: true }],
      })
    );

    // Assert form preview updates
    const previewTitle = await page.textContent(".form-preview h1");
    expect(previewTitle).toBe("Test Form");
  });
});
