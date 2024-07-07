import NavBar from './components/NavBar';
import ArticleBox from './components/ArticleBox';

const RootLayout = () => {
  return (
    <main className="w-screen h-screen">
      <div className="app">
          <NavBar />
          <ArticleBox />
      </div>
    </main>
  )
}

export default RootLayout;