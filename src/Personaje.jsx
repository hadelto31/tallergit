import React from "react";

function Personaje(props)
{

    return(
        <di>
            <p> Nombre : { props.name}</p>
            <p> Genero : {props.genero}</p>
            <img alt='imagen-personaje' src={props.foto}></img>
        </di>
    );
}

export default Personaje;
