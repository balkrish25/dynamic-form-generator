import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern: string;
    message: string;
  };
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface FormPreviewProps {
  schema: FormSchema | null;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema ? <h1 className="text-2xl font-bold">{schema.formTitle}</h1> : <p className="text-gray-500 mb-4">Invalid JSON</p>}
      <p className="text-gray-500 mb-4">{schema?.formDescription}</p>

      {schema?.fields.map((field) => (
        <div key={field.id} className="flex flex-col space-y-2">
          <label htmlFor={field.id} className="font-medium">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              id={field.id}
              {...register(field.id, {
                required: field.required
                  ? `${field.label} is required`
                  : undefined,
              })}
              className="border rounded p-2"
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "radio" ? (
            field.options?.map((option) => (
              <div key={option.value}>
                <input
                  type="radio"
                  id={`${field.id}-${option.value}`}
                  value={option.value}
                  {...register(field.id, {
                    required: field.required
                      ? `${field.label} is required`
                      : undefined,
                  })}
                />
                <label htmlFor={`${field.id}-${option.value}`} className="ml-2">
                  {option.label}
                </label>
              </div>
            ))
          ) : field.type === "textarea" ? (
            <textarea
              id={field.id}
              {...register(field.id, {
                required: field.required
                  ? `${field.label} is required`
                  : undefined,
              })}
              placeholder={field.placeholder}
              className="border rounded p-2"
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              {...register(field.id, {
                required: field.required
                  ? `${field.label} is required`
                  : undefined,
                pattern: field.validation?.pattern
                  ? {
                      value: new RegExp(field.validation.pattern),
                      message: field.validation.message,
                    }
                  : undefined,
              })}
              placeholder={field.placeholder}
              className="border rounded p-2"
            />
          )}

          {errors[field.id]?.message && (
            <p className="text-red-500 text-sm">
              {errors[field.id]?.message as string}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
