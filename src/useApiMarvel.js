import { useState } from "react"

const useApiMarvel = () => {
    const [personajes,setPersonajes] = useState([]);
    const [nombreMarvel,setNombreMarvel] = useState("");
    const [personajeBuscar,setPersonajeBuscar] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    
    return [personajes,setPersonajes,isLoading,setIsLoading,nombreMarvel,setNombreMarvel,personajeBuscar,setPersonajeBuscar];
}

export default useApiMarvel