import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react"
import './global.css';
import Dashboard from "./_root/pages/Dashboard";
import { useEffect, useState } from "react";
import { start_loader } from './assets'
import { useNavigate } from 'react-router-dom';
import SignInPage from "./_auth/sign-in/Page";

const App = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (isLoaded && !isSignedIn) {
        navigate('/home');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoaded, isSignedIn, navigate]);

  if (loading) {
    return (
      <header className="flex items-center justify-center h-screen">
        <img src={start_loader} className="flex items-center justify-center object-contain w-20 h-20" alt="loading"/>
      </header>
    );
  }

  return (
    <>
      <header className="flex items-center justify-center">
        <SignedOut>
          <SignInPage />
        </SignedOut>
        <SignedIn>
          <Dashboard />
        </SignedIn>
      </header>
      <Analytics />
    </>
  )
}

export default App;