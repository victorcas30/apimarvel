import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonajeMarvel } from "./leerApis";

const CardMarvelSubRuta = () => {
    const [personaje,setPersonaje] = useState({});
    const {id} = useParams();
    const {name,description,modified,thumbnail} = personaje;    
    useEffect(() => {
        getPersonajeMarvel(id).then(personajeMarvel => {
            setPersonaje(personajeMarvel);
        })
    },[id])
    
    return(
        <>
        <div className="card" style={{"width": "18rem"}}>
        {thumbnail && <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="card-img-top" />}
        <div className="card-body">
            <h5 className="card-title h5Name">{name}</h5>
            <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
            {description &&
            <li className="list-group-item">
                Descripcion: {description.length > 0
                  ? (description.length > 100
                      ? `${description.substring(0, 100)}...`
                      : description)
                  : "No hay descripción"}
            </li>
            }
            <li className="list-group-item">Modificado: {modified} </li>
        </ul>
        </div>
        </>
    )
}

export default CardMarvelSubRuta;