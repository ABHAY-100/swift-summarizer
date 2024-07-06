import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react"
import Dashboard from "./_root/Dashboard";
import './App.css';

const App = () => {
  return (
    <>
      <header className="flex items-center justify-center h-screen">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Dashboard />
      </SignedIn>
    </header>
    <Analytics />
    </>
  )
}

export default App
