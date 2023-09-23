import { Link, NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "@/assets/images/getlinked.svg";
import { ReactComponent as Hamburger } from "@/assets/images/hambuger.svg";
import { Button } from "../ui/button";
import { navLinks } from "@/utils/navLinks";
import { useEffect, useState } from "react";
import NavMenu from "../ui/modals/navMenu";


const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);

    const { pathname } = useLocation();

    const isRegisterPage = pathname.split("/").includes("register");
    const isContactPage = pathname.split("/").includes("contact");

    useEffect(() => {
        setIsVisible(false);
    }, [pathname]);

    return (
        <>
            {isVisible && <NavMenu onClose={() => setIsVisible(false)} />}
            <header className={`container sm:px-8  w-full ${(isRegisterPage || isContactPage) && "sm:hidden md:hidden"}`} >
                <nav className="grid grid-cols-[5.5fr_4.5fr] sm:grid-cols-2 py-8">
                    <div className="">
                        <Logo className="sm:w-4/5" />
                    </div>
                    <Hamburger className="hidden sm:block justify-self-end w-6 h-6" onClick={() => setIsVisible(true)} />
                    <div className="text-white flex items-center justify-between gap-x-16">
                        <ul className="flex items-center justify-between md:gap-4 flex-1 sm:hidden">
                            {navLinks.map(navLink =>
                                <li key={navLink.id}>
                                    <NavLink to={navLink.path} className={({ isActive }) => (!isActive ? "unselected" : "active")}> {navLink.name}</NavLink>
                                </li>)}
                        </ul>
                        <Link to="/register">
                            <Button className="bg-gradient-to-r from-peach to-purple  px-4 w-32 rounded-[.2rem] btn-border-gradient sm:hidden" >Register</Button>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;