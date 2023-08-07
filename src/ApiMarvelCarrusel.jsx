import "./style.css"
import useCarrusel from "./useCarrusel";
import Carrusel from "./Carrusel";
import useApiMarvel from "./useApiMarvel";
import { getPersonajeMarvel } from "./leerApis";
import { useEffect } from "react";


const ApiMarvelCarrusel = () => {

    const [num,incrementar,decrementar] = useCarrusel();
    const [personaje,setPersonaje] = useApiMarvel();


    useEffect(() => {
        getPersonajeMarvel(num).then(personajeM => {
            setPersonaje(personajeM);
        })
    },[num])

    return(
        <>
        <Carrusel key={num} rick={personaje} incrementar={incrementar} decrementar={decrementar} num={num} />
        </>
    )

}

export default ApiMarvelCarrusel;