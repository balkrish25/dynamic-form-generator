import React from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  const [jsonValue, setJsonValue] = React.useState(
    JSON.stringify(
      {
        formTitle: "Project Requirements Survey",
        formDescription: "Please fill out this survey about your project needs",
        fields: [
          {
            id: "name",
            type: "text",
            label: "Full Name",
            required: true,
            placeholder: "Enter your full name",
          },
          {
            id: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "you@example.com",
            validation: {
              pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
              message: "Please enter a valid email address",
            },
          },
        ],
      },
      null,
      2
    )
  );

  const [error, setError] = React.useState("");
  const schema = error ? null : JSON.parse(jsonValue);

  return (
    <ErrorBoundary>
      <div className="flex h-screen">
        <div className="w-1/2 p-4 border-r">
          <h2 className="text-lg font-bold">JSON Editor</h2>
          <JSONEditor
            value={jsonValue}
            onChange={setJsonValue}
            onError={setError}
          />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg font-bold">Form Preview</h2>
          {schema ? (
            <FormPreview schema={schema} />
          ) : (
            <p className="text-red-500">Invalid JSON</p>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
