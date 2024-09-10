import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextareaFieldProps {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

const Textarea: FC<TextareaFieldProps> = ({ label, error, registration }) => (
  <label className="flex flex-col space-y-1">
    <div className="text-sm font-bold mb-1">{label}</div>
    <textarea {...registration} className="h-36 border px-2 py-1"></textarea>
    {error && (
      <div className="text-red-500 pl-1 pt-1 text-xs">{error.message}</div>
    )}
  </label>
);

export default Textarea;
