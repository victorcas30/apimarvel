import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMarvel } from "./leerApis";
import "./style.css"

const SubRutasMarvel = () => {

    const [personajes,setPersonajes] = useState([]);

    useEffect(() => {
        getAllMarvel().then(getPersonajesM => {
            setPersonajes(getPersonajesM);
            console.table(personajes);
        })
    },[]);

    return(
        <>
        <div className="container">
        <h1 className="display-4">Sub Rutas Marvel</h1>
        <hr/>
        <div className="container containerrutas">
            <div className="columna1">
                <div className="tableContainer">
                <table className="table table-secondary">
                    <thead></thead>
                    <tbody>
                    {
                        personajes.map(personajesMarvel => {
                            const {id,name} = personajesMarvel;
                            return <tr key={id}>
                                <td>
                                    <NavLink className={({isActive}) => isActive ? "navLink activeNavLink" : "navLink"} to={`cardmarvelsubruta/${id}`} >{name}</NavLink>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <div className="columna2">
                <Outlet/>
            </div>
        </div>
        </div>
        </>
    )
}

export default SubRutasMarvel;