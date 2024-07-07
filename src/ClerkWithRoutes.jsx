import { Routes, Route, useNavigate } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import App from "./App.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      appearance={{baseTheme: dark,}}
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in/*"
          element={
            <SignIn
              forceRedirectUrl={"/protected"}
              routing="path"
              path="/sign-in"
            />
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <SignUp
              forceRedirectUrl={"/protected"}
              routing="path"
              path="/sign-up"
            />
          }
        />
        <Route
          path="/protected"
          element={<App />}
        />
      </Routes>
    </ClerkProvider>
  );
};

export default ClerkWithRoutes;
