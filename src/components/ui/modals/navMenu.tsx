import React from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "./backdrop";
import { ReactComponent as Close } from "@/assets/images/close.svg";
import { ReactComponent as CloseBorder } from "@/assets/images/back-(3).svg";
import { navLinks } from "@/utils/navLinks";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../button";
import { motion } from "framer-motion";

interface navMenuProps {
    onClose: () => void
}

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}



const NavMenuOverlay = ({ onClose }: navMenuProps) => {

    return (
        <motion.div
            className="fixed bg-bgColor z-[9999] top-16 p-8 pb-28 space-y-6 w-4/5"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="relative float-right w-fit" onClick={onClose}>
                <CloseBorder className="" />
                <Close className="absolute top-1.5 left-1.5" />
            </div>
            <ul className="pt-8 space-y-3">
                {navLinks.map(navLink =>
                    <li key={navLink.id}>
                        <NavLink to={navLink.path} className={({ isActive }) => (!isActive ? "unselected" : "active")}> {navLink.name}</NavLink>
                    </li>)}
            </ul>
            <Link className="" to="/register">
                <Button className="bg-gradient-to-r from-peach to-purple text-white px-4 w-32 mt-6 rounded-[.2rem] btn-border-gradient" >Register</Button>
            </Link>
        </motion.div>
    )
}

const NavMenu = ({ onClose }: navMenuProps) => {

    const root = document.getElementById('success-modal-root') as HTMLElement;

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <>
                    <Backdrop />
                    <NavMenuOverlay onClose={onClose} />
                </>, root)}
        </React.Fragment>
    )
}

export default NavMenu;