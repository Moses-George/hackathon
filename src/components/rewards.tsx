// import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
import championCup from "@/assets/images/champion-cup.png";
import reward from "@/assets/images/rewards.png";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";

const Rewards = () => {

    return (
        <section className="relative container sm:px-8 py-10 sm:py-8 grid grid-cols-[4fr_6fr] sm:grid-cols-1 gap-12">
            <img className="absolute top-10 left-44 sm:left-10 w-6 h-6 sm:w-4 sm:h-4" src={starPu} alt="" />
            <img className="absolute right-32 sm:right-10 bottom-[50%] sm:w-4 sm:h-4" src={star} alt="" />
            <img className="absolute right-[50%] sm:left-10 bottom-[65%] sm:w-4 sm:h-4" src={star} alt="" />
            {/* <PurpleLensFlare className="absolute top-[0%] -left-[15%] w-4/5 h-4/5 z-[-1] " /> */}
            {/* <PurpleLensFlare className="absolute top-[20%] -right-[50%] w-4/5 h-4/5 transform rotate-180 z-[-1] " /> */}
            <div className="w-fit self-center">
                <motion.img className="z-[1000] sm:hidden" src={championCup} alt=""
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: 100, opacity: 0 }} />
            </div>
            <div className="space-y-20 justify-self-end flex flex-col sm:text-center">
                <div className="space-y-6 sm:space-y-2 self-center">
                    <motion.div
                        className="space-y-2 text-3xl sm:text-2xl font-bold"
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        initial={{ x: -100, opacity: 0 }}>
                        <h2 className="text-white">Prizes and</h2>
                        <h2 className="text-heading-text ">Rewards</h2>
                    </motion.div>
                    <p className="text-white max-w-sm">Highlight of the prizes or reward for the winners and participants</p>
                    <motion.img
                        className="z-[1000] hidden sm:block sm:pt-8" src={championCup} alt="champion-cup"
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        initial={{ x: 100, opacity: 0 }} />
                </div>
                <motion.img className="w-4/5 sm:w-full z-[1000] " src={reward} alt="reward"
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    initial={{ scale: 0, opacity: 0, y: 300 }} />
            </div>
        </section>
    )
}

export default Rewards;