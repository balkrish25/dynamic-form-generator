import React, { useState } from "react";

interface JSONEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  onError: (error: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange, onError }) => {
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    try {
      JSON.parse(newValue);
      setError("");
      onError("");
    } catch (err) {
      setError("Invalid JSON");
      onError("Invalid JSON");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-96 p-4 border rounded font-mono"
        value={value}
        onChange={handleInputChange}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
