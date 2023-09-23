// import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
import partners from "@/assets/images/partners.png";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";


const Partners = () => {

    return (
        <section className="relative container sm:px-8 py-10 flex flex-col items-center gap-y-20 sm:gap-y-10">
            <img className="absolute top-44 sm:top-48 left-12 sm:left-16 sm:w-4 sm:h-4" src={starPu} alt="" />
            <img className="absolute right-[43%] sm:right-24 bottom-20 sm:bottom-12 sm:w-4 sm:h-4" src={star} alt="" />
            {/* <PurpleLensFlare className="absolute top-[0%] -left-[50%]" /> */}
            {/* <PurpleLensFlare className="absolute bottom-[0%] -right-[50%] transform rotate-180 z-[10]" /> */}
            <motion.div
                className="text-white text-center space-y-5 sm:space-y-2"
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: -100, opacity: 0 }}>
                <h1 className="text-3xl sm:text-2xl font-bold">Partners and Sponsors</h1>
                <p className="max-w-lg sm:text-sm">GetLinked Hackathon 1.0 is honoured to have the following major companies as its partners ans sponsors</p>
            </motion.div>
            <motion.div
                className=""
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: 100, opacity: 0 }}>
                <img className="" src={partners} alt="" />
            </motion.div>
        </section>
    )
}

export default Partners;