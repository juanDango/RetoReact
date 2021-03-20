import * as Joi from "joi";

const Plantilla = [
    {
      nombre: "nombre",
      tipo: "text",
      placeholder: "Nombre",
      validate: Joi.string().min(3).max(20).required()
    },
    {
      nombre: "apellido",
      tipo: "text",
      placeholder: "Apellido",
      validate: Joi.string().min(3).max(20).required()
    },
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