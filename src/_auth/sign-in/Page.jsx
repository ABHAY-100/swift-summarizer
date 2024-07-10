import { SignIn } from "@clerk/clerk-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <SignIn 
        path="/sign-in" 
        routing="path" 
        forceRedirectUrl={"/"}
        signUpUrl="/sign-up"
      />
    </div>
  )
}
