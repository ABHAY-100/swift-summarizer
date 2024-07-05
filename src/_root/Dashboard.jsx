import Hero from './components/Hero';
import Demo from './components/Demo';

const Dashboard = () => {
  return (
    <main className="w-screen h-screen">
      <div className="main">
          <div className="gradient"></div>
      </div>

      <div className="app">
          <Hero />
          <Demo />
      </div>
    </main>
  )
}

export default Dashboard;