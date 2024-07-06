// import { User } from 'lucide-react';
import { logo } from "../../../public/assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full lg:h-24 py-6 border-b-2 top-bar px-11 border-slate_gray bg-near_black md:h-[72px] max-sm:h-[48px] max-lg:pl-2 max-md:pl-11 max-sm:px-4">
        <a href="https://swift-summarizer.vercel.app/" className="flex flex-row items-start justify-between gap-4 md:scale-75 w-fit lg:scale-100 max-sm:scale-50">
          <img src={logo} alt="swift_summarizer_logo" className="h-10 max-w-10" />
          <h4 className="text-[27px] font-goia_display_regular text-pastel_green max-md:hidden">Swift Summarizer</h4>
        </a>
        <div className="flex items-center justify-center lg:gap-5 max-md:gap-4 max-sm:gap-2">
          <a href="https://github.com/ABHAY-100/swift-summarizer" target="_blank" rel="noopener noreferrer" className="text-[16.3px] font-goia_regular flex justify-center items-center gap-[9px] bg-custom-bg px-3 py-2 rounded-[12px] hover:bg-slate_gray cursor-pointer md:scale-75 lg:scale-100 max-sm:scale-50">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <span className="max-md:hidden">About this tool</span>
          </a>
          {/* <ion-icon name="alert-circle-outline" onClick={handleClick}></ion-icon> */}
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "md:w-[28px] md:h-[28px] lg:h-[38px] lg:w-[38px] max-sm:h-[19px] max-sm:w-[19px]"
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Hero;
