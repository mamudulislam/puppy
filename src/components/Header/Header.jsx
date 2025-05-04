import { Link } from 'react-router';
import logo from '../../assets/Logo/Logo.png';
import LinkList from '../Header/Listlink';
import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div className="flex items-center container mx-auto">
            <div className="w-[20%]">
                <img src={logo} alt="" />
            </div>
            <div className="w-[60%]">
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
            <div className="w-[20%] space-x-4 text-end">
                <Button className="bg-[#F9CE3B] hover:bg-[#F9CE3B] font-Poppins px-[20px] py-[20px]">Sign Up</Button>
                <Button className="bg-[#F9CE3B] hover:border-2 hover:bg-[#fff] hover:text-[#F9CE3B] font-Poppins px-[20px] py-[20px]">Log In</Button>
            </div>
        </div>
    );
};

export default Header;