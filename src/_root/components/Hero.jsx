// import { User } from 'lucide-react';
import { logo } from "../../../public/assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full h-24 py-6 border-b-2 top-bar px-11 border-slate_gray bg-near_black">
        <a href="https://swift-summary.vercel.app" className="flex flex-row items-start justify-between gap-4">
          <img src={logo} alt="swift_summarizer_logo" className="w-10 h-10" />
          <h4 className="text-[27px] font-goia_display_regular text-pastel_green">Swift Summarizer</h4>
        </a>
        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/ABHAY-100/swift-summary" target="_blank" rel="noopener noreferrer" className="text-[16.3px] font-goia_regular flex justify-center items-center gap-[9px] bg-custom-bg px-3 py-2 rounded-[12px] hover:bg-slate_gray cursor-pointer">
            <ion-icon name="alert-circle-outline"></ion-icon>
            About this tool
          </a>
          {/* <ion-icon name="alert-circle-outline" onClick={handleClick}></ion-icon> */}
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-[38px] h-[38px]"
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Hero;
