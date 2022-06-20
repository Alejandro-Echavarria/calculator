import React from "react";
import '../stylesheets/ClearButton.css';

const ClearButton = (props) => (

    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default ClearButton;
