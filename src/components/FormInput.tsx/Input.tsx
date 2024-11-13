import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  label?: string;
  id: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  type?: "text" | "search" | "email" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = ({
  id,
  label,
  placeholder,
  register,
  error,
  type,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className="input_group">
      {label ? (
        <label htmlFor={id} className="label_group">
          <span>{label}</span>
        </label>
      ) : (
        ""
      )}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          value={value}
          {...register}
          className={`${error ? "input_error" : "input"} ${
            type === "search" ? "shadow-3d" : ""
          }`}
        />
        {error && (
          <span className="text-red-500 text-[12px] mt-2">{error.message}</span>
        )}
      </div>
    </div>
  );
};

export default Input;
