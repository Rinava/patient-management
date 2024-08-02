import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  defaultValue?: string;
  className?: string;
}

const Input = ({
  name,
  label,
  defaultValue,
  className,
  type,
  placeholder,
  ...props
}: InputProps) => (
  <div className="flex flex-col gap-px">
    {label && (
      <label className="pl-1 text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
    )}
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={clsx(
          "h-full w-full rounded-lg bg-slate-950/5 px-2 py-2 text-sm placeholder:text-slate-950/20",
          className,
        )}
      />
    ) : (
      <input
        type="text"
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={clsx(
          "h-full w-full rounded-lg bg-slate-950/5 px-2 py-2 text-sm placeholder:text-slate-950/20",
          className,
        )}
        {...props}
      />
    )}
  </div>
);

export default Input;
