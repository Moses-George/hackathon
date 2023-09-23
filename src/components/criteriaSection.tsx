import criterion from "@/assets/images/criteria.png";
import { JudgingCriteria } from "@/utils/judgingCriteria";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";



const CriteriaSection = () => {

    return (
        <section className="container relative py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-1 gap-12">
            <img className="absolute top-8 sm:top-0 left-36 sm:w-6 sm:h-6" src={starPu} alt="" />
            <div className="absolute sm:hidden top-20 left-36 z-[-1] bg-gradient-to-r from-peach to-purple p-12 rounded-full"></div>
            <img className="absolute right-[52%] sm:right-10 bottom-10 sm:bottom-0 sm:w-4 sm:h-4" src={star} alt="" />
            <motion.div
                className="self-center"
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: 100, opacity: 0 }}
            >
                <img src={criterion} alt="" />
            </motion.div>
            <div className="space-y-5 sm:text-center">
                <motion.div
                    className="space-y-2"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <h2 className="text-white text-3xl font-bold">Judging criteria</h2>
                    <h2 className="text-heading-text text-3xl font-bold">Key attributes</h2>
                </motion.div>
                <div className="space-y-5 max-w-lg">
                    {JudgingCriteria.map(criterion =>
                        <motion.div
                            className="" key={criterion.id}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                            initial={{ y: 100, opacity: 0 }}>
                            <span className="font-semibold text-[#FF26B9] text-md">{criterion.heading}</span>
                            <span className="text-sm text-white"> {criterion.description}</span>
                        </motion.div>
                    )}
                </div>
                <Button className="bg-gradient-to-r from-peach to-purple px-4 w-32 rounded-[.2rem] text-white btn-border-gradient ">Read more</Button>
            </div>
        </section>
    )
}

export default CriteriaSection;