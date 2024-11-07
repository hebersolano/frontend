import { cloneElement, type ReactElement } from "react";
import type { FieldError } from "react-hook-form";
import { twJoin, twMerge } from "tailwind-merge";

type FormRowProps = {
  label?: string;
  labelStyle?: string;
  error: FieldError | undefined;
  rowStyle?: string;
  required?: boolean;
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

      <div>
        {cloneElement(children, { placeholder })}
        {error && (
          <span className="absolute -bottom-4 ml-1 text-xs text-primary">
            {error?.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormRow;
