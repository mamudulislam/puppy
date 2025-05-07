import { Link } from 'react-router';
import logo from '../../assets/Logo/Logo.png';
import LinkList from '../Header/Listlink';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
const Header = () => {
    const [shonav, setShonav] = useState(false)


    useEffect(() => {
        // logic
        const StickyNavbar = () => {
            if (window.scrollY > 200) {
                setShonav(true)
            } else {
                setShonav(false)
            }
        }
        window.addEventListener("scroll", StickyNavbar)
        // cleanup funtion
        return () => window.removeEventListener('scroll', StickyNavbar)
    }, [])
    return (
        <nav className={shonav ? "StickyNavbar" : ""}>
            <div className="flex items-center justify-between md:justify-normal container pt-2.5">
                <div className="w-[40%] md:w-[20%]">
                    <img src={logo} alt="" />
                </div>
                <TiThMenu className='md:hidden' size={20} />
                <div className="w-[60%] hidden md:block">
                    <ul className="flex gap-x-[30px] justify-center">
                        {LinkList.map(link => (
                            <li key={link.id}>
                                <Link to={link.path} className="font-Poppins hover:text-[#F9CE3B] duration-200">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[20%] space-x-4 text-end hidden md:block">
                    <Button className="bg-[#F9CE3B] hover:bg-[#F9CE3B] font-Poppins px-[20px] py-[20px]">Sign Up</Button>
                    <Button className="bg-[#F9CE3B] hover:border-2 hover:bg-[#fff] hover:text-[#F9CE3B] font-Poppins px-[20px] py-[20px]">Log In</Button>
                </div>
            </div>
        </nav>
    );
};

export default Header;