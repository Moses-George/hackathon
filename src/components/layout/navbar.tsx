import { NavLink } from "react-router-dom";
// import { ReactComponent } from "@/custom"
import { ReactComponent as Logo } from "@/assets/images/getlinked.svg";
import { Button } from "../ui/button";


const Navbar = () => {

    return (
        <header className="container border-solid border-b-[1px] border-purple w-full">
            <nav className="grid grid-cols-[5.5fr_4.5fr] py-8">
                <div className="">
                    <Logo />
                </div>
                <div className="text-white flex items-center justify-between gap-x-16">
                    <ul className="flex items-center justify-between flex-1">
                        <li>
                            <NavLink to="/timeline">Timeline</NavLink>
                        </li>
                        <li>
                            <NavLink to="/overview">Overview</NavLink>
                        </li>
                        <li>
                            <NavLink to="/faqs">FAQs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (!isActive ? "unselected" : "active")}> Contact</NavLink>
                        </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-peach to-purple  px-4 w-32 rounded-[.2rem] border-gradient" >Register</Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;