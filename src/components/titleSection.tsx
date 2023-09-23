import HackathonGuy from "@/assets/images/hackathon-guy.png";
import { ReactComponent as CountDown } from "@/assets/images/countdown-time.svg";
// import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
import { ReactComponent as Curve } from "@/assets/images/curve.svg";
import flare from "@/assets/images/Purple-Lens-Flare-PNG.png";
import star from "@/assets/images/star.png";
// import starGra from "@/assets/images/sata-gra.png";
import title from "@/assets/images/title.png";
import { Button } from "./ui/button";
import { motion } from "framer-motion";   
import { Link } from "react-router-dom";


const TitleSection = () => {

    return (
        <section className="relative sm:pt-8">
            <img className="absolute left-40 top-10 sm:top-36 smw-6 sm:h-6" src={star} alt="" />
            <img className="absolute bottom-[30%] sm:bottom-[52%] left-10 sm:-left-10  w-[100vh] sm:w-full z-[-1] " src={flare} alt="" />
            <motion.div
                className="flex flex-col gap-1 items-end md:items-center px-[3rem] sm:px-4 py-8 md:py-12"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                <h1 className="text-4xl sm:text-lg text-white italic tracking-wide sm:text-center md:text-center">Igniting a revolution in HR Innovation</h1>
                <Curve className="sm:w-32 sm:self-center" />
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-1 container sm:px-8">
                <motion.div
                    className="relative w-full space-y-12 flex flex-col sm:py-8 sm:-mt-10 bg-[url('./assets/images/Purple-Lens-Flare-PNG.png') "
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ y: 100, opacity: 0 }}
                >
                    {/* <PurpleLensFlare className="absolute bottom-[40%] -left-[0%] h-4/5 w-4/5  " /> */}
                    <div className="text-white space-y-6 flex flex-col sm:items-center">
                        <img
                            className="sm:w-full -mb-3" src={title} alt=""
                        />
                        <p className="">Participate in getLinked tech Hackathon 2023 stand a chance to win a big price</p>
                        <Link to="/register">
                            <Button className="bg-gradient-to-r from-peach to-purple px-4 w-32 rounded-[.2rem] btn-border-gradient z-[100] " >Register</Button>
                        </Link>
                    </div>
                    <CountDown className="sm:self-center" />
                </motion.div>
                <div className="relative justify-self-end w-full -mr-20 sm:mr-0">
                <img className="absolute bottom-[10%] -right-10 w-[100vh] rotate-90 z-[-1] sm:hidden " src={flare} alt="" />
                    <motion.img
                        className="w-[150%] h-full justify-self-end align-self-center sm:hidden"
                        src={HackathonGuy}
                        alt="hackathon guy"
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        initial={{ y: 100, opacity: 0 }} />
                </div>
            </div>
            <motion.img
                className="w-[120%] h-full justify-self-end align-self-center hidden sm:block"
                src={HackathonGuy}
                alt="hackathon guy"
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ y: 100, opacity: 0 }} />
        </section>
    )
}

export default TitleSection;