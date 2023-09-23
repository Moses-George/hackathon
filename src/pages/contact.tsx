import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
import { ReactComponent as Back } from "@/assets/images/back.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ReactComponent as Twitter } from "@/assets/images/twitter.svg";
import { ReactComponent as LinkedIn } from "@/assets/images/linkedIn.svg";
import { ReactComponent as Facebook } from "@/assets/images/facebook.svg";
import { ReactComponent as Instagram } from "@/assets/images/instagram.svg";
import { useContactForm } from "@/hooks/useForm";
import { initialContactData } from "@/utils/formData";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "@/utils/baseUrl";




const Contact = () => {

    const navigate = useNavigate();

    const { userData, handleChange, setUserData } = useContactForm(initialContactData);

    const sendContactInfo = async () => {

        const id = toast.loading("Sending your information...");

        try {
            const payload = {
                "email": userData.email,
                "phone_number": userData.phoneNumber,
                "first_name": userData.firstName,
                "message": userData.message
            }
            const response = await fetch(`${baseUrl}/hackathon/contact-form`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'content-type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            toast.update(id, { render: "Successfully sent!", type: "success", isLoading: false, autoClose: 4000 });
            setUserData(initialContactData);
        } catch (err: any) {
            toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 2000 });
            console.error(err);
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await sendContactInfo();
    }
 
    return (
        <section className="container sm:px-8 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-x-20 my-10 items-center shadow-md w-full">
            <Back className="hidden sm:block md:block mb-8 w-8 h-8" onClick={() => navigate(-1)} />
            {/* <PurpleLensFlare className="absolute top-[20%] -left-[20%] " /> */}
            {/* <PurpleLensFlare className="absolute -bottom-[80%] -right-[30%] " /> */}
            <motion.div
                className="space-y-5 text-white justify-self-center sm:hidden md:hidden"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                <h1 className="text-2xl text-heading-text font-semibold">Get in touch</h1>
                <p className="max-w-[2rem]">Contact Information</p>
                <p className="max-w-[7rem]">27, Alara street, Yaba 100012 Lagos State</p>
                <p>Call us: 08165960182</p>
                <div className="">
                    <p>We are open from Monday-Friday</p>
                    <p>8:00 am - 6:00pm</p>
                </div>
                <div className="space-y-2 sm:hidden">
                    <p className="text-peach font-semibold">Share on</p>
                    <div className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        <Twitter className="w-4 h-4" />
                        <Facebook className="w-4 h-4" />
                        <LinkedIn className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>

            <div className="bg-[rgba(0,0,0,0.15)] shadow-[0px_4px_4px_0px_#00000040] sm:bg-transparent p-16 sm:p-0 space-y-8 w-[90%] w-full">
                <motion.div
                    className="text-2xl font-semibold text-heading-text"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                    <h1>Questions or need assistance ?</h1>
                    <h1>Let's us know about it!</h1>
                </motion.div>
                <motion.p
                    className="text-white text-sm hidden sm:block md:block max-w-xs"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                    Email us below to any question related to our events
                </motion.p>
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full space-y-6 flex flex-col"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                    <Input
                        id="first-name"
                        className="w-full border-white text-white"
                        type="text"
                        placeholder="First name"
                        value={userData.firstName}
                        onChange={handleChange}
                        name="firstName" required />
                    <Input
                        className="w-full border-white text-white"
                        type="email"
                        placeholder="Mail"
                        value={userData.email}
                        onChange={handleChange}
                        name="email" required />
                    <Input
                        className="w-full border-white text-white"
                        type="text"
                        placeholder="Phone Number"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        name="phoneNumber" required />
                    <Textarea
                        className="w-full border-white text-white"
                        placeholder="message"
                        value={userData.message}
                        onChange={handleChange}
                        name="message" required />
                    <Button className="bg-gradient-to-r from-peach to-purple px-4 h-12 w-40 self-center md:self-start text-white rounded-[.2rem] btn-border-gradient " >Submit</Button>
                </motion.form>
                <div className="space-y-2 hidden sm:flex flex-col items-center">
                    <p className="text-peach font-semibold">Share on</p>
                    <div className="flex items-center gap-3 mx-auto">
                        <Instagram className="w-4 h-4" />
                        <Twitter className="w-4 h-4" />
                        <Facebook className="w-4 h-4" />
                        <LinkedIn className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;