import { useEffect,useState } from "react";
import { getAllPersonajesMarvel } from "./leerApis";
import useApiMarvel from "./useApiMarvel";
import CardsMarvel from "./CardsMarvel";
import Loading from "./Loading";

const ApiMarvel = () => {
    
    const[personajes,setPersonajes,isLoading,setIsLoading,nombreMarvel,setNombreMarvel,personajeBuscar,setPersonajeBuscar] = useApiMarvel();


    useEffect(() => {
        if(personajeBuscar!==""){
            setIsLoading(true);
        getAllPersonajesMarvel(nombreMarvel).then(getAllPersonajes=>{
            setPersonajes(getAllPersonajes);
            setIsLoading(false);
        })
        }
        
    },[personajeBuscar]);

    const guardarNombre = e => {
        setNombreMarvel(e.target.value);
    }

    const clickBuscarPersonaje = () =>{
        setPersonajeBuscar(nombreMarvel);
    }

    return(
        <>
        <div className="container">
        <h1 className="display-4">Api Marvel</h1>
        <hr/>
        {isLoading && <Loading/>}
        <h5>Ingresa el Personaje de Marvel que desea buscar:</h5>
        <div className="col-sm-3">
        <input type="text" className="form-control" onChange={guardarNombre}/>
        </div>
        <br/>
        <button className="btn btn-dark" onClick={clickBuscarPersonaje}>Buscar</button>
        <br/>
        <br/>
        <div className="contenedorTarjetaMarvel">
        {
            personajes.map(personaje => {
                const {id} = personaje;
                return <CardsMarvel key={id} personajeMarvel={personaje} nombrePersonaje={nombreMarvel}/>
            })
        }
        </div>
        </div>
        </>
    )
}

export default ApiMarvel;