import { ReactElement } from "react";

type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  title: string;
  type?: string;
};

export const TextInput = ({
  value,
  onChange,
  placeholder = "",
  title = "",
  type = "text",
}: TextInputProps): ReactElement => {
  return (
    <div className="flex flex-col w-full">
      <p>{title}</p>
      <input
        type={type}
        name={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent p-2 border-2 rounded w-full focus:outline-none focus:ring focus:ring-current-color transition duration-300 ease-in-out"
      />
    </div>
  );
};
