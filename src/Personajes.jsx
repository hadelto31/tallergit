import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from "./Personaje";
import './App.css';



function Personajes(props)
{
    const [pagina, setPagina] = useState(1);
    const [buscar, setBuscar] = useState(false);
    const [personajes, setPersonajes] = useState([]);
    


    useEffect(() => {
        //Petición
        async function request() {

 //           const res = await axios.get("https://rickandmortyapi.com/api/character/?page2=");
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`);

            console.log(res.data.results);

        setPersonajes (res.data.results);
    

        }

        request();

    }, [buscar]);
      
    const handleChange = (e) => {
        setPagina(e.target.value); 
    }

    const handleClick = () => {
        setBuscar(!buscar);
    }

    return(
        <div>
            <input type="text" value = {pagina} onChange = {handleChange} />
            <button onClick={handleClick}>Buscar</button>
            {personajes.map((personaje) => 
            (<Personaje 
                name={personaje.name} 
                genero = {personaje.gender}
                foto = {personaje.image}
                />))}
            
        </div>
    );
}

export default Personajes;
