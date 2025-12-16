import { FaDiscord,FaGithub,FaTwitter } from "react-icons/fa";

const links = [
    { href: 'https://discord.com', icon:<FaDiscord/> },
    { href: 'https://github.com/AdityaS1204', icon:<FaGithub/> },
    { href: 'https://Twitter.com/aaditya0124',icon:<FaTwitter/> },
  ];


    
const Footer = () => {
  return (
    <footer className="bg-violet-300 py-4">
<div className="container mx-auto flex flex-col items-center justify-between px-4 gap-4 md:flex-row">
    <p className="text-center text-sm md:text-left"> &copy;Nova 2024. All rights Reserved</p>
    <div className="flex justify-center gap-4 md:justify-start">
{links.map((link) => (
    <a 
    key={link.href} href={link.href} className="cursor-pointer text-black transition-colors duration-500 ease-in-out hover:text-white" target="_blank">{link.icon}</a>
))}
    </div>
    <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
</div>
    </footer>
  )
}

export default Footer