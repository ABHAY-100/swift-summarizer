import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react"
import RootLayout from "./_root/RootLayout";
import './global.css';

const App = () => {
  return (
    <>
      <header className="flex items-center justify-center h-screen">
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <RootLayout />
        </SignedIn>
      </header>
    
      <Analytics />
    </>
  )
}

export default App
