import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  label: string;
  id: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

const Input = ({
  id,
  label,
  placeholder,
  register,
  error,
  type,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <div>
        <input type={type} placeholder={placeholder} id={id} {...register} />
        {error && (
          <span className="text-red-500 text-[12px] mt-2">{error.message}</span>
        )}
      </div>
    </div>
  );
};

export default Input;