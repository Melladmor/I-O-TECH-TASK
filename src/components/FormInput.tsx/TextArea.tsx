import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface InputProps {
  label?: string;
  id: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextArea = ({
  id,
  label,
  placeholder,
  register,
  error,
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
        <textarea
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          value={value}
          {...register}
          className={`${error ? "textarea_error" : "textarea"}`}
          rows={7}></textarea>
        {error && (
          <span className="text-red-500 text-[12px] mt-2">{error.message}</span>
        )}
      </div>
    </div>
  );
};

export default TextArea;
