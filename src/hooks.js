import { useState } from "react";

const useHandleForm = (schema) => {
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const { error } = validate();
        if (!error) {
            console.log("Form submitted!", inputs);
            setErrors("");
        } else {
            console.log("Errors", error);
            setErrors(error);
        }
    }

    const handleInputChange = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const validate = () => {
        return schema.validate(inputs);
    };

    return {handleSubmit, handleInputChange, errors}
}

export default useHandleForm