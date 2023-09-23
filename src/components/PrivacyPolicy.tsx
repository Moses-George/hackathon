// import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
import privacy from "@/assets/images/privacy.png";
import { ReactComponent as Mark } from "@/assets/images/mark.svg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";



const PrivacyPolicy = () => {

    return (
        <section className="container py-10 sm:py-8 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-12 w-full text-sm">
            <div className="relative w-full space-y-12">
                {/* <PurpleLensFlare className="absolute -bottom-[50%] -left-[50%] mb-0" /> */}
                <motion.div
                    className="w-full space-y-5 sm:text-center"
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                    initial={{ x: -100, opacity: 0 }}>
                    <h1 className="text-3xl text-white font-bold max-w-xs">Privacy Policy and <span className="text-peach">Terms</span></h1>
                    <p className="text-gray-300">Last updated on september 12, 2023</p>
                    <p className="text-white max-w-md">Below are our privacy and policy, which outline alot of goodies, it's our aim to always take care of our participants</p>
                </motion.div>
                <motion.div
                    className="border-gradient px-20 sm:px-6 py-16 sm:py-8  text-white space-y-10"
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                    initial={{ scale: 0, opacity: 0, y: 300 }}>
                    <p className="leading-7 sm:text-center">
                        At getlinked tech hackathon 1.0, we value your privacy and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent to the prectices described in this policy.
                    </p>
                    <div className="gap-y-5 flex flex-col">
                        <div className="space-y-2">
                            <h3 className="text-xl text-heading-text font-bold">Licensing Policy</h3>
                            <p className="font-semibold">Here are terms of our standard License:</p>
                        </div>
                        <div className="flex gap-x-3">
                            <Mark className="w-8 h-8" />
                            <p>The standard License grants you a non-exclusive right to navigate and register for our event</p>
                        </div>
                        <div className="flex gap-x-3">
                            <Mark className="w-8 h-8" />
                            <p>You're licensed to use the item available at any fee source sites, for your project development!.</p>
                        </div>
                        <Button className="bg-gradient-to-r from-peach to-purple px-4 w-32 rounded-[.2rem] text-white btn-border-gradient self-center">Read more</Button>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="bg-[url('./assets/images/Vector.svg')] bg-no-repeat bg-top sm:bg-contain justify-self-end md:justify-self-center"
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                initial={{ x: 100, opacity: 0 }}>
                <img className="h-2/3 sm:h-3/4 mt-48 sm:mt-24" src={privacy} alt="" />
            </motion.div>
        </section>
    )
}

export default PrivacyPolicy;