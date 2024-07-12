import { useNavigate } from "react-router";
import { NextUIProvider } from "@nextui-org/react";
import Nav from '../components/Nav'

const Home = () => {
  const navigate = useNavigate();
  const SummarizeNowButton = () => {
    navigate('/sign-in');
  };
    
  return (
    <>
      <section className="relative flex flex-col justify-center h-screen mx-auto bg-near-black">
          <NextUIProvider>
              <Nav/>
          </NextUIProvider>

          <div className="inline-flex flex-col items-center justify-center max-w-full gap-8 max-[480px]:scale-95">
              <div className="w-full h-fit flex-col justify-start items-center gap-[22px] flex">
                  <h1 className="text-center text-like-yellow font-normal font-goia-medium leading-[86.40px] max-md:leading-[58px] max-md:text-[54px] md:text-[87px] max-sm:px-5">Rapid web <br/>content digests</h1>
                  <h3 className="max-w-[550px] opacity-80 text-center text-white md:text-[22px] font-normal font-goia leading-[30px] max-md:text-[20px] max-md:leading-[28px] mx-4">Swift Summarizer transforms lengthy webpages into concise overviews. Paste URLs, get key points instantly. Streamline online research.</h3>
              </div>
              <div className="justify-center items-center gap-2.5 inline-flex font-goia-medium text-xl font-normal max-sm:flex-col w-full max-sm:px-5 max-sm:max-w-[320px]">
                  <button onClick={SummarizeNowButton} className="px-[25px] h-[51px] bg-like-yellow rounded-xl justify-center items-center gap-2.5 flex text-near-black max-sm:w-full">
                      Summarize Now
                  </button>
                  <a href="https://github.com/ABHAY-100/swift-summarizer" target="_blank" className="px-[25px] h-[51px] rounded-xl border-2 border-shadow-gray-dark justify-center items-center gap-2.5 flex max-sm:w-full text-white hover:bg-subtle-shadow-gray ease-in-out duration-100">
                      <span className="opacity-80">Explore Code</span>
                  </a>
              </div>
          </div>

          <footer className="w-full max-h-[74px] py-[24px] bg-shadow-gray-light justify-center items-center inline-flex absolute bottom-0">
              <h5 className="text-like-yellow text-[17px] font-normal font-goia w-fit max-md:text-[14.5px]">© 2024 Swift Summarizer - MIT License</h5>
          </footer>
      </section>
    </>
  )
}

export default Home