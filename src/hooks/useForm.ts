import { ChangeEvent, useState } from "react";

export interface InitialRegisterData {
    teamName: string;
    phoneNumber: string;
    email: string;
    projectTopic: string;
    category: string;
    groupSize: number;
    privacyAccepted: boolean;
}

export interface InitialContactData {
    email: string;
    phoneNumber: string;
    firstName: string;
    message?: string;
}




export const useRegisterForm = (initialUserData: InitialRegisterData) => {

    const [userData, setUserData] = useState<InitialRegisterData>(initialUserData);


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;


        setUserData(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });
    }

    return { userData, handleChange, setUserData };
}



export const useContactForm = (initialUserData: InitialContactData) => {

    const [userData, setUserData] = useState<InitialContactData>(initialUserData);


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;


        setUserData(prevValues => {
            return {
                ...prevValues,
                [name]: value
            }
        });
    }

    return { userData, handleChange, setUserData };
}
