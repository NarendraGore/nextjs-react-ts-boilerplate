
type InputProps = React.InputHTMLAttributes<HTMLInputElement> 

function Input({ className, ...props }: InputProps) {
  const resolvedClassName = [
    "w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input className={resolvedClassName} {...props} />;
}
export default Input;