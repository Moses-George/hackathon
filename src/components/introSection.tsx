import TheBigIdea from "@/assets/images/the-big-idea.png";
import { ReactComponent as Arrow } from "@/assets/images/arrow.svg";
import { motion } from "framer-motion";
import starGra from "@/assets/images/star-gra.png";
import starPu from "@/assets/images/star-pu.png";


const IntroSection = () => {

    return (
        <section className="container sm:px-8 relative py-10 sm:py-8 grid grid-cols-2 sm:grid-cols-1 gap-12">
            <img className="absolute top-56 left-20 sm:left-6 " src={starGra} alt="" />
            <img className="absolute top-32 right-44 sm:right-6" src={starPu} alt="" />
            <motion.div
                className="flex flex-col justify-self-end sm:gap-4"
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: -100, opacity: 0 }}>
                <img className="w-3/4 sm:w-full" src={TheBigIdea} />
                <Arrow className="self-center ml-80 sm:m-0 md:m-0 -mt-10" />
            </motion.div>
            <div className="space-y-5 self-center w-full max-w-lg sm:text-center">
                <motion.div
                    className="space-y-2"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: 100, opacity: 0 }}>
                    <h2 className="text-white text-3xl font-bold">Intoduction to getLinked</h2>
                    <h2 className="text-heading-text text-3xl font-bold">techHackathon 1.0</h2>
                </motion.div>
                <motion.p
                    className="text-white leading-7"
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ y: 100, opacity: 0 }}>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </motion.p>
            </div>
        </section>
    )
}

export default IntroSection;