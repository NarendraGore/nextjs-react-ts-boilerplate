
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ label, className, ...props }: ButtonProps) {
  const resolvedClassName = [
    "rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={resolvedClassName} {...props}>
      {label}
    </button>
  );
}
export default Button;