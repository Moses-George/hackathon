import { ReactComponent as QuestionMark } from "@/assets/images/question.svg";
import { ReactComponent as QuestionMarkSm } from "@/assets/images/question-sm.svg";
import cwork from "@/assets/images/cwok-casual.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faQs } from "@/utils/faQs";
import { motion } from "framer-motion";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";
import starGra from "@/assets/images/star-gra.png";





const FaQs = () => {

    return (
        <section className="container sm:px-8 relative py-20 sm:py-8 w-full grid grid-cols-2 sm:grid-cols-1 gap-20">
            <img className="absolute top-8 sm:top-0 left-10 sm:w-4 sm:h-4" src={starPu} alt="" />
            <img className="absolute right-96 sm:right-20 top-28 sm:top-48" src={starGra} alt="" />
            <img className="absolute right-[40%] sm:left-10 top-40" src={starGra} alt="" />
            <img className="absolute right-24 bottom-16 sm:bottom-0" src={star} alt="" />
            <div className="space-y-12">
                <div className="space-y-5 sm:text-center">
                    <motion.div
                        className="space-y-2"
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        initial={{ x: -100, opacity: 0 }}>
                        <h2 className="text-white text-3xl sm:text-2xl font-bold">Frequently asked</h2>
                        <h2 className="text-heading-text text-3xl sm:text-2xl font-bold">Questions</h2>
                    </motion.div>
                    <motion.p
                        className="text-white text-sm leading-normal max-w-xs"
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        initial={{ y: 100, opacity: 0 }}>
                        We got answers to the questions that you might
                        want to ask about <span className="font-bold">getlinked Hackathon 1.0</span>
                    </motion.p>
                </div>
                <div className="w-full max-w-md text-white text-sm text-start space-y-3">
                    {faQs.map((faq, index) =>
                        <motion.div
                            className=""
                            key={faq.id}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                            initial={{ x: (index % 2 === 0 ? 100 : -100), opacity: 0 }}>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1" className="border-solid border-b-2 border-purple">
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    )}
                </div >
            </div >
            <div className="self-center">
                <div className="flex gap-20 sm:gap-8 -mb-10 sm:-mb-8">
                    <QuestionMarkSm />
                    <QuestionMark className="-mt-10" />
                    <QuestionMarkSm />
                </div>
                <motion.img
                    className="" src={cwork} alt=""
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }} />
            </div>
        </section >
    )
}

export default FaQs;