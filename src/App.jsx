import AuthLayout from './_auth/AuthLayout.jsx';
import SigninForm from './_auth/forms/SigninForm.jsx';
import SignupForm from './_auth/forms/SignupForm.jsx';
import RootLayout from './_root/RootLayout.jsx';

import './App.css';
import './index.css'

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="w-screen h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />}/>
          <Route path='/sign-up' element={<SignupForm />}/>
        </Route>

        {/* Private Routes */}
        <Route index element={< RootLayout/>} />
      </Routes>
    </main>
  )
}

export default App
