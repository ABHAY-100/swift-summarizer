import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react"
import './global.css';
import Dashboard from "./_root/Dashboard";
import { useEffect, useState } from "react";
import {start_loader} from './assets'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <>
      <header className="flex items-center justify-center h-screen">
        {
          loading ? (
            <img src={start_loader} className="flex items-center justify-center object-contain w-20 h-20" alt=""/>
          )
         : (
          <>
            <SignedOut>
              <SignIn />
            </SignedOut>
            <SignedIn>
              <Dashboard />
            </SignedIn>
          </>
         )}
      </header>
  
      <Analytics />
    </>
  )
}

export default App
