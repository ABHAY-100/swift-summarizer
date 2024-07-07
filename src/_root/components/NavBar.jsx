import { logo, alert_cirlce } from "../../assets";
import { UserButton } from "@clerk/clerk-react";

const Hero = () => {
  return (
    <>
      <nav className="fixed z-10 flex items-center justify-between w-full py-6 border-b-2 lg:h-24 top-bar px-11 border-just-gray bg-near-black max-md:px-6 max-md:h-[80px]">
        <a href="https://swift-summarizer.vercel.app/" className="flex flex-row items-start justify-between gap-4">
          <img src={logo} alt="swift_summarizer_logo" className="w-10 max-md:w-8" />
          <h4 className="text-[27px] font-goia-display text-like-yellow max-md:hidden">Swift Summarizer</h4>
        </a>
        
        <div className="flex items-center justify-center gap-5">
          <a href="https://github.com/ABHAY-100/swift-summarizer" target="_blank" rel="noopener noreferrer" className="text-[16.3px] font-goia flex justify-center items-center gap-[9px] bg-shadow-gray px-3 py-2 rounded-[12px] hover:bg-just-gray cursor-pointer">
            <img src={alert_cirlce} alt="alert cirlce icon" className="w-[22px] h-[22px] opacity-80 cursor-pointer" />
            <span className="max-md:hidden">About this tool</span>
          </a>
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "h-[38px] w-[38px] max-md:w-8 max-md:h-8"
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Hero;
