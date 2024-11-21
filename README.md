# Dynamic Form Generator

A React-based application for dynamically generating and previewing forms based on a customizable JSON schema. The application includes a real-time JSON editor, form preview functionality, and supports features such as validation and dynamic field rendering.

## Features

- **JSON Editor**: Define forms using a JSON schema.
- **Real-time Preview**: Visualize changes in the form as you update the JSON.
- **Validation**: Add validation rules for form fields.
- **Dynamic Fields**: Support for text, radio, checkbox, select, and textarea fields.
- **Responsive Design**: Fully responsive and styled with Tailwind CSS.
- **TypeScript Support**: Built with TypeScript for strong typing and maintainability.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/dynamic-form-generator.git
   cd dynamic-form-generator
   
2. Install dependencies:
   ```bash
   npm install
   
3. Start the development server:
   ```bash
   npm run dev
   
4. Open the application in your browser:
   
   http://localhost:3000
   
5. Project Structure:
   ```bash
   src/
   ├── components/         # Reusable React components
   ├── hooks/              # Custom React hooks
   ├── tests/              # Unit and E2E test files
   ├── App.tsx             # Root application component
   ├── main.tsx            # Application entry point
   ├── index.css           # Global styles
   └── types.d.ts          # TypeScript type definitions
   
   public/                 # Public assets (e.g., favicon, images)


# Usage

## Define a Form Schema
Update the JSON in the JSON Editor panel to define your form fields. Example:


```json
{
  "formTitle": "Contact Us",
  "formDescription": "Please fill out the form below.",
  "fields": [
    {
    "id": "name",
      "type": "text",
      "label": "Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email",
      "required": true,
      "placeholder": "Enter your email"
    },
    {
      "id": "message",
      "type": "textarea",
      "label": "Message",
      "placeholder": "Write your message"
    }
  ]
}
```

Submit the Form
Preview the form in the form preview panel and submit to see the submitted data.

# Testing

## Run Unit Tests
To execute unit tests using Jest:
   ```bash
   npm run test
   ```

## Run End-to-End Tests
To execute E2E tests using Playwright:
   ```bash
   npx playwright test
   ```

## Dependencies
React: Frontend library for building the UI. \
react-hook-form: For form handling and validation. \
Tailwind CSS: For styling. \
TypeScript: For type checking. \
@testing-library/react: For unit tests. \
Playwright: For end-to-end testing.

