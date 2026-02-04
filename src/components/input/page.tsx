
type InputProps = React.InputHTMLAttributes<HTMLInputElement> 

function Input(props:InputProps){
  return(
    <input  
    className="w-full rounded-md border border-gray-300 px-3 py-2
                 focus:ring-2 focus:ring-blue-500 outline-none"
      {...props}
/>
  )
}
export default Input;