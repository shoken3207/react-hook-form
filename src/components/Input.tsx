import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

const Input: FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  error,
  registration,
}) => (
  <label className="flex flex-col space-y-1">
    <div className="text-sm font-bold mb-1">{label}</div>
    <input
      type={type}
      {...registration}
      className="text-gray-800 mt-4 rounded-md border py-2 px-3"
      placeholder={placeholder}
    />
    {error && (
      <div className="text-red-500 pl-1 pt-1 text-xs">{error.message}</div>
    )}
  </label>
);

export default Input;
