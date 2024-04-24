
import Link from "next/link";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
export default function TopNav() {
  const SocialClasses =
    "border-primary border-2 p-2.5 rounded-full hover:bg-primary text-primary hover:text-secondary hover:cursor-pointer hover:border-secondary";
  return (
    <footer className="fixed w-full flex bottom-0 px-5 py-5 text-md md:text-2xl">
      <div className="flex-1 w-full flex items-center"> 
      <Link href={'/'}>
      <IoHomeOutline  className="text-2xl md:text-4xl transition-all duration-200 hover:cursor-pointer hover:scale-125 hover:rotate-12"/>
      </Link>
      </div>
      <div className="flex-1 flex justify-end w-full space-x-4">
        <div className={SocialClasses}>
          <FaInstagram className="" />
        </div>
        <div className={SocialClasses}>
          <FaGithub className="" />
        </div>
        <div className={SocialClasses}>
          <FaWhatsapp className="" />
        </div>
      </div>
    </footer>
  );
}
