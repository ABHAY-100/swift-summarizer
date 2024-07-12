import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    // NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
  } from "@nextui-org/react";
  import { useState } from "react";
import {logo} from '../../assets'
  
  const CustomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
      <NextUINavbar maxWidth={'full'}
        onMenuOpenChange={setIsMenuOpen}
        className="absolute z-10 flex items-center justify-between py-6 lg:h-24 top-bar px-5 bg-near-black max-md:px-6 max-md:h-[80px] top-0 md:h-[96px] w-[1440px] mx-auto"
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
        <NavbarMenu className="md:mt-[30px] ease-linear bg-[#17171D] font-goia justify-center items-center max-w-[1440px] mx-auto max-md:mt-[14px]"
        style={{ height: '400px' }}>
          <NavbarMenuItem>
            <Link href="https://msahalkc.netlify.app" className="text-3xl text-like-yellow">
              Sign Up
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              href="https://github.com/msahalkc/KTU-Result-Viewer"
              className="text-3xl text-like-yellow"
            >
              Login
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NextUINavbar>
    );
  };
  
  export default CustomNavbar;