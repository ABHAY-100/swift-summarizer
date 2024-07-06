// import { User } from 'lucide-react';
import { logo } from "../../../public/assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full py-6 border-b-2 lg:h-24 top-bar px-11 border-slate_gray bg-near_black max-md:px-6">
        <a href="https://swift-summarizer.vercel.app/" className="flex flex-row items-start justify-between gap-4">
          <img src={logo} alt="swift_summarizer_logo" className="h-10 max-w-10" />
          <h4 className="text-[27px] font-goia_display_regular text-pastel_green max-md:hidden">Swift Summarizer</h4>
        </a>
        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/ABHAY-100/swift-summarizer" target="_blank" rel="noopener noreferrer" className="text-[16.3px] font-goia_regular flex justify-center items-center gap-[9px] bg-custom-bg px-3 py-2 rounded-[12px] hover:bg-slate_gray cursor-pointer">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <span className="max-md:hidden">About this tool</span>
          </a>
          {/* <ion-icon name="alert-circle-outline" onClick={handleClick}></ion-icon> */}
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "h-[38px] w-[38px]"
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Hero;
