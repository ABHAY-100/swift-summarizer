import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col items-center justify-center flex-1 h-screen py-10">
            <Outlet /> 
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout