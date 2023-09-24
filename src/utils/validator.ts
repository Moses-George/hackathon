import { ContactData, RegisterData } from "@/hooks/useForm";

export const registerValidator = (userData: RegisterData) => {

    const invalidFields = Object.keys(userData).filter((data, index) => data !== "privacyAccepted" && (!Object.values(userData)[index] || Object.values(userData)[index].trim().length === 0 )).join(" , ");

    return  invalidFields;
}

export const contactValidator = (userData: ContactData) => {

    const invalidFields = Object.keys(userData).filter((_data, index) => (!Object.values(userData)[index] || Object.values(userData)[index].trim().length === 0 )).join(" , ");

    return  invalidFields;
}