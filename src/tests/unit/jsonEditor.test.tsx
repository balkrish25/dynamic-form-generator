import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import JSONEditor from "../../components/JSONEditor";
import FormPreview from "../../components/FormPreview";

describe("JSON Editor and Form Rendering", () => {
  const validJson = JSON.stringify(
    {
      formTitle: "Test Form",
      formDescription: "A form for testing",
      fields: [
        { id: "name", type: "text", label: "Name", required: true },
      ],
    },
    null,
    2
  );

  const invalidJson = `{ "formTitle": "Invalid JSON"`;

  it("renders JSON editor correctly", () => {
    const mockOnChange = jest.fn();
    const mockOnError = jest.fn();

    render(<JSONEditor value={validJson} onChange={mockOnChange} onError={mockOnError} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows error for invalid JSON", () => {
    const mockOnError = jest.fn();

    render(
      <JSONEditor
        value={invalidJson}
        onChange={jest.fn()}
        onError={mockOnError}
      />
    );

    expect(mockOnError).toHaveBeenCalledWith("Unexpected end of JSON input");
  });

  it("renders form preview correctly with valid schema", () => {
    const schema = JSON.parse(validJson);

    render(<FormPreview schema={schema} />);

    expect(screen.getByText("Test Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("shows invalid JSON message when schema is incorrect", () => {
    render(<FormPreview schema={null} />);
    expect(screen.getByText("Invalid JSON")).toBeInTheDocument();
  });
});
