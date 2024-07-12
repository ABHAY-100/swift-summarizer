import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import {logo} from '../../assets';
import { useNavigate } from "react-router";
  
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const SignInButton = () => {
    navigate('/sign-in')
  }

  const SignUpButton = () => {
    navigate('/sign-up')
  }
    
  return (
    <NextUINavbar 
      maxWidth={'full'}
      onMenuOpenChange={setIsMenuOpen}
      className="absolute z-10 flex items-center justify-between py-6 lg:h-24 top-bar px-5 bg-near-black max-md:px-1 max-md:h-[80px] top-0 md:h-[96px] border-b-2 border-just-gray"
      style={{ maxWidth: 'none' }}
    >
      <NavbarContent className="relative h-full">
        <NavbarBrand className="h-full w-fit">
          <Link href="/" className="flex flex-row items-center justify-center h-full gap-4">
              <img src={logo} alt="swift_summarizer_logo" className="w-10 h-full max-md:w-8" />
              <h4 className="text-[27px] font-goia-display text-like-yellow max-md:hidden">Swift Summarizer</h4>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarMenuToggle 
        className="scale-110"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
      <NavbarMenu className="md:mt-[30px] overflow-hidden ease-linear bg-[#17171D] items-center mx-auto max-md:mt-[14px] border-t-2 border-just-gray pt-[80px] font-goia-medium"
      style={{ height: '400px' }}>
        <NavbarMenuItem className="w-full">
          <Link 
            onClick={SignUpButton}
            className="px-[25px] w-full h-[52px] bg-like-yellow-light rounded-xl justify-center items-center gap-2.5 flex text-[18px] text-near-black max-sm:w-full"
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full">
          <Link
            onClick={SignInButton}
            className="px-[25px] h-[52px] rounded-xl border-2 border-shadow-gray-dark justify-center items-center gap-2.5 flex max-sm:w-full text-white text-[18px] hover:bg-subtle-shadow-gray ease-in-out duration-100"
          >
            Sign In
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      
    </NextUINavbar>
  );
};
  
export default NavBar;
