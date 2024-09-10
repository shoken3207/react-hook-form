import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CheckboxFieldProps {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

const Checkbox: FC<CheckboxFieldProps> = ({ label, error, registration }) => (
  <div className="flex flex-col items-center space-y-1">
    <label className="flex flex-row items-center space-x-2">
      <input type="checkbox" {...registration} className="h-5 w-5" />
      <p>{label}</p>
    </label>
    {error && (
      <div className="text-red-500 pl-1 pt-1 text-center text-xs">
        {error.message}
      </div>
    )}
  </div>
);

export default Checkbox;
