// import { User } from 'lucide-react';
import { logo } from "../../../public/assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  const handleClick = () => {
    window.open('https://github.com/ABHAY-100/swift-summary', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full h-24 py-6 border-b-2 top-bar px-11 border-slate_gray bg-near_black">
        <div className="flex flex-row items-start justify-between gap-4">
          <img src={logo} alt="swift_summarizer_logo" className="w-10 h-10" />
          <h4 className="text-[27px] font-goia_display_regular text-pastel_green">Swift Summarizer</h4>
        </div>
        <div className="flex items-center justify-center gap-5">
          <ion-icon name="alert-circle-outline" onClick={handleClick}></ion-icon>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-[33px] h-[33px]"
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Hero;
