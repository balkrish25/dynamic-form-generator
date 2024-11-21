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

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

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

