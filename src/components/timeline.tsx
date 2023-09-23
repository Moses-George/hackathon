import { timeline } from "@/utils/timeline";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";

const Timeline = () => {

    return (
        <section className="container relative grid pt-10 pb-20 space-y-20 w-full sm:justify-items-start">
            <img className="absolute top-72 sm:top-56 left-44 sm:w-6 sm:h-6" src={starPu} alt="" />
            <img className="absolute right-32 sm:right-10 bottom-[50%] sm:bottom-[55%] sm:w-4 sm:h-4" src={star} alt="" />
            <div className="max-w-xs text-center text-white justify-self-center space-y-3">
                <h1 className="text-3xl sm:text-2xl font-bold">Timeline</h1>
                <p className="text-sm">Here's th breakdown of the time we anticipate using for the upcoming event.</p>
            </div>

            <div className="px-8 sm:p-0 space-y-5 ">
                {timeline.map((timeline, index) =>
                    (index + 1) % 2 !== 0 ?
                        <motion.div
                            className="grid grid-cols-3 sm:grid-cols-[1fr_9fr] sm:gap-x-4 sm:gap-y-2 sm:justify-items-start sm:text-sm items-end"
                            key={timeline.id}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                            initial={{ x: 100, opacity: 0 }}>
                            <div className="space-y-2 text-end sm:text-start ">
                                <h1 className="text-2xl text-heading-text font-bold sm:text-sm">{timeline.heading}</h1>
                                <p className="text-white text-sm max-w-sm  sm:text-sm">{timeline.message}</p>
                            </div>
                            <div className="flex flex-col items-center sm:row-start-1 sm:row-end-3 align-self-end">
                                <div className="h-28 sm:h-24 w-1 p-[1px] bg-heading-text rounded-lg"></div>
                                <div className="px-5 py-3 sm:py-2 sm:px-3.5 rounded-full text-white bg-gradient-to-r from-peach to-heading-text text-md font-bold">{index + 1}</div>
                            </div>
                            <div className="">
                                <h1 className="text-2xl text-heading-text font-bold sm:text-sm">November 18, 2023</h1>
                            </div>
                        </motion.div>
                        :
                        <motion.div
                            className="grid grid-cols-3 sm:grid-cols-[1fr_9fr] sm:gap-x-4 sm:gap-y-2 sm:justify-items-start sm:text-sm items-end"
                            key={timeline.id}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                            initial={{ x: -100, opacity: 0 }}>
                            <div className="sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3">
                                <h1 className="text-2xl sm:text-sm text-heading-text font-bold text-end sm:text-start">November 18, 2023</h1>
                            </div>
                            <div className="flex flex-col items-center sm:col-start-1 sm:col-end3 align-self-end">
                                <div className="h-28 sm:h-24 w-1 p-[1px] bg-heading-text rounded-lg"></div>
                                <div className="px-5 py-3 sm:py-2 sm:px-3.5 rounded-full text-white bg-gradient-to-r from-peach to-heading-text
                                 text-md font-bold">{index + 1}</div>
                            </div>
                            <div className="space-y-1 text-start sm:text-sm">
                                <h1 className="text-2xl text-heading-text font-bold sm:text-sm">{timeline.heading}</h1>
                                <p className="text-white text-sm max-w-sm">{timeline.message} </p>
                            </div>
                        </motion.div>
                )}
            </div>
        </section>
    )
}

export default Timeline;