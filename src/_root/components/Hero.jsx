// import { User } from 'lucide-react';
import { logo } from "../../../public/assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full h-24 py-6 border-b-2 top-bar px-11 border-slate_gray bg-near_black">
        <div className="flex flex-row items-start justify-between gap-4">
          <img src={logo} alt="swift_summarizer_logo" className="w-10 h-10" />
          <h4 className="text-[27px] font-goia_display_regular text-pastel_green">Swift Summarizer</h4>
        </div>
        <div className="flex items-center justify-center gap-5">
          <ion-icon name="alert-circle-outline"></ion-icon>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-[33px] h-[33px]"
              }
            }}
          />
        </div>
      </nav>
{/* 
      <header className="flex flex-col items-center justify-center w-full">
        <h1 className="head_text">
          Summarize Articles with <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAi GPT-4</span>
        </h1>
        <h2 className="desc">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </header> */}
    </>
  );
};

export default Hero;
