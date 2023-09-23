import { ReactComponent as Congratulations } from "@/assets/images/congratulation.svg";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";
import { Backdrop } from "./backdrop";
import { motion } from "framer-motion";


const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

interface SuccessProps {
    onClose: () => void;
}

const SuccessOverlay = ({ onClose }: SuccessProps) => {

    return (
        <motion.div
            className="fixed border-gradient bg-transparent z-[9999] top-16 px-8 pb-8 sm:p-4 w-[35rem] sm:w-4/5  flex flex-col items-center"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit">
            <Congratulations className="w-3/4 sm:w-full mx-auto sm:-mt-10" />
            <div className="w-full space-y-3 -mt-5 sm:-mt-10">
                <div className="text-3xl sm:text-2xl text-white font-semibold text-center">
                    <h1 className="">Congratulations</h1>
                    <h1 className="">you have successfully registered!</h1>
                </div>
                <p className="text-white text-sm w-[50%] sm:w-full text-center mx-auto">Yes it was easy and you did it!. check your mail box for next step.</p>
                <Button onClick={onClose} className="bg-gradient-to-r from-peach to-purple px-4 h-12 w-full text-white rounded-[.2rem] btn-border-gradient " >Back</Button>
            </div>
        </motion.div>
    )
}

const Success = ({ onClose }: SuccessProps) => {

    const root = document.getElementById('success-modal-root') as HTMLElement;

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <>
                    <Backdrop />
                    <SuccessOverlay onClose={onClose} />
                </>, root)}
        </React.Fragment>
    )
}

export default Success;