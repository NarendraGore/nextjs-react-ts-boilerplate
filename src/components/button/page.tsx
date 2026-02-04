
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({label, ...props}:ButtonProps){
  return(
    <button  className="rounded-md bg-blue-600 px-4 py-2 text-white
                 hover:bg-blue-700 transition"
      {...props}>
        {label}
    </button>
  )
}
export default Button;