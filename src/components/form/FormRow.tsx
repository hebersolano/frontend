import { cloneElement, type ReactElement } from "react";
import type { FieldError } from "react-hook-form";
import { twJoin, twMerge } from "tailwind-merge";

type FormRowProps = {
  label?: string;
  labelStyle?: string;
  error: FieldError | undefined;
  rowStyle?: string;
  required: boolean;
  children: ReactElement<HTMLInputElement>;
};

function FormRow({
  label,
  labelStyle,
  error,
  rowStyle = "mb-2",
  required = false,
  children,
}: FormRowProps) {
  const className = twMerge(
    children.props.className || "",
    "rounded-md px-4 py-2 ring-2 ring-border",
    error && "ring-primary  focus:ring-primary focus:outline-none ",
  );

  const placeholder = children.props.placeholder
    ? `${children.props.placeholder}${required && !label ? "*" : ""}`
    : "";

  return (
    <div className={twJoin("relative flex flex-col gap-2", rowStyle)}>
      {label && (
        <label htmlFor={children.props?.id} className={twJoin("", labelStyle)}>
          {label}
          {required && <span className="text-primary">*</span>}
        </label>
      )}
      {cloneElement(children, { className, placeholder })}
      {error && (
        <span className="absolute -bottom-6 ml-1 text-sm text-primary">
          {error?.message}
        </span>
      )}
    </div>
  );
}

export default FormRow;
