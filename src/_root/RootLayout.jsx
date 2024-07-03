import React from 'react'

const RootLayout = () => {
  return (
    <>
        <div className="main">
            <div className="gradient"></div>
        </div>

        <div className="app">
            <Hero />
            <Demo /> 
        </div>
    </>
  )
}

export default RootLayout