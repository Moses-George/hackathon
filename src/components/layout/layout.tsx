import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";

const routeVariants = {
    initial: {
        y: "100vh",
    },
    final: {
        y: "0vh",
        transition: {
            type: "spring",
            mass: 0.4
        }
    }
}



const Layout = ({ children }: PropsWithChildren) => {

    return (
        <>
            <Navbar />
            <AnimatePresence>
                <motion.main
                    className="contaner sm:-8 w-ful"
                    initial="initial"
                    animate="final"
                    variants={routeVariants}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </>
    )
}

export default Layout;