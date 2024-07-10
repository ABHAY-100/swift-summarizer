import { SignUp } from "@clerk/clerk-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <SignUp
        path="/sign-up" 
        routing="path" 
        forceRedirectUrl={"/"}
        signInUrl="/sign-in"
    />
    </div>
  )  
}
