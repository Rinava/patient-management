import clsx from "clsx";

const variants = {
  default:
    "bg-slate-800 text-slate-50 hover:opacity-90 transition-opacity duration-300",
  ghost:
    "border border-slate-950/10 hover:bg-slate-950/5 transition-colors duration-300",
  plain: "hover:bg-slate-950/5 transition-colors duration-300",
};

const sizes = {
  sm: "px-2 py-1.5 text-sm",
  md: "px-3 py-2 text-base",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

const Button = ({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}: ButtonProps) => (
  <button
    className={clsx(
      "flex h-fit w-fit gap-1 whitespace-nowrap rounded-lg px-2 py-1.5 text-sm font-medium leading-none",
      variants[variant],
      sizes[size],
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
