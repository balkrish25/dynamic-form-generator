import { useState, useCallback } from "react";

/**
 * Interface for form field validation rules
 */
interface ValidationRules {
  required?: boolean;
  pattern?: string;
  message?: string;
}

/**
 * Interface for form field data
 */
interface Field {
  id: string;
  value: string | number | boolean;
  validation?: ValidationRules;
}

/**
 * Interface for validation errors
 */
interface ValidationError {
  [fieldId: string]: string;
}

/**
 * Hook to manage form validation
 * @param fields - Array of fields to validate
 * @returns Object containing validation state and functions
 */
export function useFormValidation(fields: Field[]) {
  const [errors, setErrors] = useState<ValidationError>({});

  /**
   * Validate a single field based on its validation rules
   * @param field - The field to validate
   * @returns Error message if invalid, or an empty string if valid
   */
  const validateField = useCallback((field: Field): string => {
    const { value, validation } = field;

    if (validation?.required && !value) {
      return `${field.id} is required`;
    }

    if (validation?.pattern) {
      const regex = new RegExp(validation.pattern);
      if (!regex.test(value as string)) {
        return validation.message || `${field.id} is invalid`;
      }
    }

    return "";
  }, []);

  /**
   * Validate all fields and update errors state
   * @returns Boolean indicating if the form is valid
   */
  const validateAll = useCallback((): boolean => {
    const newErrors: ValidationError = {};

    fields.forEach((field) => {
      const error = validateField(field);
      if (error) {
        newErrors[field.id] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [fields, validateField]);

  /**
   * Reset all validation errors
   */
  const resetErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateField,
    validateAll,
    resetErrors,
  };
}
