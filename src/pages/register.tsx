import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Success from "@/components/ui/modals/success";
import designer from "@/assets/images/designer.png";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { useRegisterForm } from "@/hooks/useForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialRegisterData, categories } from "@/utils/formData";
import { baseUrl } from "@/utils/baseUrl";
import flare from "@/assets/images/Purple-Lens-Flare-PNG.png";
import star from "@/assets/images/star.png";
import starPu from "@/assets/images/star-pu.png";
import starGra from "@/assets/images/star-gra.png";
import { registerValidator } from "@/utils/validator";




const Register = () => {

    const [isSuccess, setIsSuccess] = useState(false);

    const { userData, handleChange, setUserData } = useRegisterForm(initialRegisterData);


    const register = async () => {

        const invalidFields = registerValidator(userData);


        if (invalidFields) {
            toast.error(`Please fill the field(s) ${invalidFields}`, { autoClose: 3000 });
            return;
        }

        const id = toast.loading("Your data is being registered...");

        try {
            const categoryId = categories.find(category => category.category === userData.category)?.id;
            console.log(userData)
            const payload = {
                "email": userData.email,
                "phone_number": userData.phoneNumber,
                "team_name": userData.teamName,
                "group_size": userData.groupSize,
                "project_topic": userData.projectTopic,
                "category": categoryId,
                "privacy_policy_accepted": true
            }
            const response = await fetch(`${baseUrl}/hackathon/registration`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'content-type': 'application/json',
                },
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            toast.update(id, { render: data.message, type: "success", isLoading: false, autoClose: 4000 });
            setIsSuccess(true);
            setUserData(initialRegisterData);
        } catch (err: any) {
            toast.update(id, { render: err.message, type: "error", isLoading: false, autoClose: 3000 });
            console.error(err);
            setIsSuccess(false);
        }
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await register();
    }


    return (
        <>
            {isSuccess && <Success onClose={() => setIsSuccess(false)} />}

            <section className="container relative sm:px-6 grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-8 sm:gap-x-0 my-10 sm:my-4  w-full">

                <img className="absolute -rotate-90 -left-28 sm:bottom-[52% left-10 sm:-left-10  w-[100vh] sm:w-full z-[-1] " src={flare} alt="" />
                <img className="absolute bottom-0  -right-20 sm:-left-10 rotate-90  w-[100vh] sm:hidden z-[-1]" src={flare} alt="" />

                <img className="absolute top-10 left-44 sm:left-10 sm:top-20 w-6 h-6 sm:w-4 sm:h-4" src={starPu} alt="" />
                <img className="absolute right-[50%] sm:left-16 bottom-[65%] sm:top-80 sm:w-4 sm:h-4" src={starGra} alt="" />
                <img className="absolute right-36 sm:right-10 top-16 w-6 h-6" src={star} alt="" />

                <motion.div
                    className="justify-self-start self-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                >
                    <img className="sm:hidden md:hidden" src={designer} alt="" />
                </motion.div>
                <div className="bg-[rgba(20,0,0,233) shadow-[0px_4px_4px_0px_#00000040] sm:shadow-none sm:bg-transparent p-16 sm:p-4 sm:w-full">
                    <motion.h1
                        className="text-2xl text-heading-text font-semibold mb-6"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>Register</motion.h1>
                    <motion.img
                        className="hidden sm:block md:block md:w-4/5 "
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}
                        src={designer} alt="" />
                    <motion.div
                        className="text-white mb-4"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeIn" }}>
                        <p className="text-sm">Be part of this movemnt!🚶‍♀️🚶‍♂️</p>
                        <h1 className="text-xl font-semibold">CREATE YOUR ACCOUNT</h1>
                    </motion.div>
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        initial={{ scale: 0, opacity: 0, y: 300 }}
                        transition={{ duration: 1 }}>
                        <div className="flex justify-between md:flex-col sm:flex-col gap-y-4 gap-x-8">
                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="teamName" className="text-white text-sm">Team's name</label>
                                <Input
                                    className=""
                                    type="text"
                                    placeholder="Enter the name of your group"
                                    value={userData.teamName}
                                    onChange={handleChange}
                                    id="teamName"
                                    name="teamName" required />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="phoneNumber" className="text-white text-sm">Phone</label>
                                <Input
                                    className=""
                                    type="number"
                                    placeholder="Enter your phone number"
                                    value={userData.phoneNumber}
                                    onChange={handleChange}
                                    id="phoneNumber"
                                    name="phoneNumber" required />
                            </div>
                        </div>

                        <div className="flex justify-between md:flex-col sm:flex-col gap-y-4 gap-x-8">
                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="email" className="text-white text-sm">Email</label>
                                <Input
                                    className=""
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={userData.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email" required />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="projectTopic" className="text-white text-sm">Project Topic</label>
                                <Input
                                    className=""
                                    type="text"
                                    placeholder="What is your group project topic?"
                                    value={userData.projectTopic}
                                    onChange={handleChange}
                                    id="projectTopic"
                                    name="projectTopic" required />
                            </div>
                        </div>

                        <div className="flex justify-between md:flex-col sm:flex-col gap-y-4 gap-x-8">
                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="category" className="text-white text-sm">Category</label>
                                <select required className="w-full bg-transparent border border-gray-200 text-gray-300 py-2.5 px-4 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-gray-500 focus:ring-2 focus:ring-heading-text"
                                    id="category"
                                    name="category"
                                    onChange={handleChange}
                                    value={userData.category}>
                                    <option className="font-bold" disabled>Categories</option>
                                    {categories.map(category => <option key={category.id} className="text-gray-700">{category.category}</option>)}
                                </select>
                            </div>

                            <div className="grid w-full items-center gap-1.5">
                                <label htmlFor="groupSize" className="text-white text-sm">Group Size</label>
                                <select required className="block w-full bg-transparent border border-gray-200 text-gray-300 py-2.5 px-4  rounded leading-tight focus:outline-none focus:bg-transparent focus:ring-2 focus:ring-heading-text focus:border-gray-500"
                                    id="groupSize"
                                    name="groupSize"
                                    onChange={handleChange}
                                    value={userData.groupSize}>
                                    <option className="font-bold" disabled>Group size</option>
                                    {[10, 20, 30, 40, 50, 60].map(size => <option key={size} className="text-gray-700">{size}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="italic text-sm sm:text-xs text-peach">Please review your registration details before submitting</p>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="privacyAccepted"
                                    required
                                    className="w-6 h-6 text-blue-600  bg-gray-100 border-gray-100 rounded-lg focus:ring-blue-500 focus:ring-2"
                                    name="privacyAccepted"
                                    onChange={handleChange}
                                />
                                <label htmlFor="privacyAccepted" className="text-sm text-white font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">I agreed with the events terms and conditions and privacy policy</label>
                            </div>
                        </div>
                        <Button className="bg-gradient-to-r from-peach to-purple px-4 h-12 w-full md:w-4/5 text-white rounded-[.2rem] btn-border-gradient ">Register Now</Button>
                    </motion.form>
                </div>
            </section>
        </>
    )
}

export default Register; 