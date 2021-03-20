import * as Joi from "joi";

const Plantilla = [
    {
      nombre: "email",
      tipo: "email",
      placeholder: "email@ejemplo.com",
      validate: Joi.string().email({ tlds: { allow: false } })
    },
    {
      nombre: "password",
      tipo: "password",
      placeholder: "",
      validate: Joi.string().required().pattern(new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}"))
    }
]

export default Plantilla
