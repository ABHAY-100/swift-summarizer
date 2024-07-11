import { Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import App from "./App.jsx";
import SignInPage from "./_auth/sign-in/Page.jsx";
import SignUpPage from "./_auth/sign-up/Page.jsx";
import Home from "./_root/pages/Home.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ClerkWithRoutes = () => {
  return (
    <ClerkProvider
      appearance={{baseTheme: dark,}}
      publishableKey={PUBLISHABLE_KEY}
    >
      <Routes>
        <Route
          path="/sign-in/*"
          element={<SignInPage />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUpPage />}
        />
        <Route 
          path="/" 
          element={<App />} 
        />
        <Route 
          path="/home"
          element={<Home />}
        />
      </Routes>
    </ClerkProvider>
  );
};

export default ClerkWithRoutes;
