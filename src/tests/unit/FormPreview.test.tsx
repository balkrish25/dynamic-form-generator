import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormPreview from "../../components/FormPreview";

const schema = {
  formTitle: "Test Form", // Add formTitle
  formDescription: "This is a test form.", // Add formDescription
  fields: [
    {
      id: "name",
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your name",
    },
  ],
};

describe("FormPreview Component", () => {
  it("renders a form field", () => {
    render(<FormPreview schema={schema} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("shows validation error on form submission", () => {
    render(<FormPreview schema={schema} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });

  it("submits successfully when the form is valid", () => {
    render(<FormPreview schema={schema} />);
    const input = screen.getByLabelText("Name");
    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
    expect(screen.getByText("Form submitted successfully")).toBeInTheDocument();
  });
});
