import rules from "@/assets/images/rules.png";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import flare from "@/assets/images/Purple-Lens-Flare-PNG.png";


const RulesSection = () => {

    return (
        <section className="container w-full sm:px-8 relative py-10 sm:py-8 grid grid-cols-2 sm:grid-cols-1 gap-12 ">

            <img className="absolute bottom-40 sm:top-20 right-[50%] sm:left-8 sm:w-6 sm:h-6" src={star} alt="" />

            <img className="absolute -bottom-[30%] sm:bottom-[60%] -right-36 sm:-left-10 rotate-90 sm:-rotate-90 w-[40rem] sm:w-full z-[-1] " src={flare} alt="" />
            <img className="absolute bottom-[-10%] sm:bottom-[23%] left-10 sm:right-0 sm:rotate-90  w-[45rem] sm:w-full z-[-1] " src={flare} alt="" />

            <div className="space-y-5 w-ful justify-self-end self-center max-w-lg sm:text-center sm:row-start-2 sm:row-end-3 ">
                <motion.div
                    className="space-y-2"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <h2 className="text-white text-3xl font-bold">Rules and</h2>
                    <h2 className="text-heading-text text-3xl font-bold">Guidelines</h2>
                </motion.div>
                <motion.p
                    className="text-white leading-7"
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ y: 100, opacity: 0 }}>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
                    Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real world problems, pushing the boundaries of technology and, creating
                    solutions that can change the world, that's what we're all about!
                </motion.p>
            </div>
            <motion.div
                className="w-ful justify-self-end"
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: 100, opacity: 0 }}>
                <img className="sm:row-start-1 sm:row-end-2 sm:w-full w-" src={rules} />
            </motion.div>
        </section>
    )
}

export default RulesSection;