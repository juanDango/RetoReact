import React from 'react';
import ReactDOM from 'react-dom';

import Formulario from "./form";
import Plantilla from "./esquemaForm"

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Formulario plantilla = {Plantilla}/>,
  document.getElementById('root')
);

