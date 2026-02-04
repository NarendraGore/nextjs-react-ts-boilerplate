import Button from "@/components/button/page";
import Input from "@/components/input/page";

function RegisterPage(){
  return(  <div className="mx-auto max-w-sm space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button label="Register" 
      className="w-full bg-purple-600 hover:bg-purple-700"/>
    </div>)
}
export default RegisterPage;