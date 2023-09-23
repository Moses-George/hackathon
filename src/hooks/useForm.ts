import { ChangeEvent, useState } from "react";

export interface RegisterData {
    teamName: string;
    phoneNumber: number;
    email: string;
    projectTopic: string;
    category: string;
    groupSize: number;
    privacyAccepted: boolean;
}

export interface ContactData {
    email: string;
    phoneNumber: number;
    firstName: string;
    message?: string;
}




export const useRegisterForm = (initialUserData: RegisterData) => {

    const [userData, setUserData] = useState<RegisterData>(initialUserData);


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



export const useContactForm = (initialUserData: ContactData) => {

    const [userData, setUserData] = useState<ContactData>(initialUserData);


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
