import useHandleForm from "./hooks";

import {Form, Button} from "react-bootstrap"

import * as Joi from "joi";


function Formulario (props){

    const elementos = props.plantilla

    let reglas = {};

    for(let i = 0; i < elementos.length; i++){
        reglas = {...reglas, [elementos[i].nombre]:elementos[i].validate}
    }

    const schema = Joi.object(reglas)

    const { handleSubmit, handleInputChange, errors} = useHandleForm(schema);

    let i = -1;
    return (
        <Form onSubmit={handleSubmit}>
            {
                elementos.map(item => {
                    i++;
                    return (
                        <Form.Group key = {i} htmlFor={item.nombre}>
                            <Form.Label>{item.nombre}</Form.Label>
                            <Form.Control 
                                type={item.tipo} 
                                placeholder={item.placeholder} 
                                onChange={handleInputChange}
                                id={item.nombre}
                                name={item.nombre}/>
                        </Form.Group>
                    )
                })
            }
        <div>
            <p>{errors.toString()}</p>
        </div>
          <div>
            <Button variant = "primary" type="submit">Register</Button>
          </div>
        </Form>
      );
}

export default Formulario;