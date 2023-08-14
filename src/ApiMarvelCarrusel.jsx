import "./style.css"
import useCarrusel from "./useCarrusel";
import Carrusel from "./Carrusel";
import useApiMarvel from "./useApiMarvel";
import { getAllMarvel } from "./leerApis";
import { useEffect } from "react";


const ApiMarvelCarrusel = () => {

    const [num,incrementar,decrementar] = useCarrusel();
    const [personaje,setPersonaje] = useApiMarvel();


    useEffect(() => {
        getAllMarvel().then(allCharacters => {
            if (allCharacters && allCharacters.length > 0) {
                const selectedCharacter = allCharacters[num];
                setPersonaje(selectedCharacter);
                console.log(selectedCharacter);
            }
        });
    }, [num]);

    return(
        <>
        <Carrusel key={num} marvel={personaje} incrementar={incrementar} decrementar={decrementar} num={num} />
        </>
    )

}

export default ApiMarvelCarrusel;