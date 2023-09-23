import { ReactComponent as Logo } from "@/assets/images/getlinked.svg";
import { ReactComponent as Twitter } from "@/assets/images/twitter.svg";
import { ReactComponent as LinkedIn } from "@/assets/images/linkedIn.svg";
import { ReactComponent as Facebook } from "@/assets/images/facebook.svg";
import { ReactComponent as Instagram } from "@/assets/images/instagram.svg";
import { ReactComponent as Phone } from "@/assets/images/phone.svg";
import { ReactComponent as Location } from "@/assets/images/location.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {

    return (
        <footer className="py-10 sm:space-y-10 text-white">
            <div className="container grid grid-cols-3 sm:grid-cols-1 sm:gap-8 justify-items-center sm:justify-items-start py-4">
                <motion.div
                    className="text-sm space-y-2"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <Logo />
                    <p className="">GetLinked tech Hackathon is a technology innovation program
                        established by a group of organizations with the aim of showcasing young and talented
                        individuals in the field of technology.
                    </p>
                    <div className="pt-10 space-x-3">
                        <span className="">Terms of use</span>
                        <span className="w-[2px] h-[2px] bg-heading-text p-[1px]"></span>
                        <span className="">Privacy Policy</span>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-3"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <p className="text-heading-text font-semibold">Useful Links</p>
                    <div className="flex flex-col gap-y-2 text-sm">
                        <Link to="/">Overview</Link>
                        <Link to="/">Timeline</Link>
                        <Link to="/">FAQs</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-heading-text">Follow us</p>
                        <div className="flex items-center gap-2">
                            <Instagram className="w-4 h-4" />
                            <Twitter className="w-4 h-4" />
                            <Facebook className="w-4 h-4" />
                            <LinkedIn className="w-4 h-4" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="space-y-3"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <p className="text-heading-text font-semibold">Contact us</p>
                    <div className="text-sm flex  gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="">+234 81 659 60 182</span>
                    </div>
                    <div className="text-sm flex  gap-2">
                        <Location />
                        <span className="w-[6rem] self-cnter">27, Alara street, Yaba 100012 Lagos State</span>
                    </div>
                </motion.div>
            </div>
            <p className="text-center text-sm">All rights reserved © getlinked ltd.</p>
        </footer >
    )
}

export default Footer;