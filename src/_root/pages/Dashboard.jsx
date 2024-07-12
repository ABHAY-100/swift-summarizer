import NavBar from '../components/NavBar';
import ArticleBox from '../components/ArticleBox';

const Dashboard = () => {
  return (
    <main className="w-screen h-screen">
      <div className="app bg-near-black">
          <NavBar />
          <ArticleBox />
      </div>
    </main>
  )
}

export default Dashboard;