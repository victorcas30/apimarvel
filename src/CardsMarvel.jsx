const CardsMarvel = props => {

    const {id,name,description,modified,thumbnail} = props.personajeMarvel;
    const {path,extension} = thumbnail;
    const image = `${path}.${extension}`;
    const nombrePersonaje = props;

    
    return(
        <>
        <div className="card mb-3" style={{"max-width": "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." style={{ height: '175px', width: '175px', objectFit: 'cover' }}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Nombre: {name}</h5>
                <p className="card-text">Descripcion: {description.length > 0
                  ? (description.length > 100
                      ? `${description.substring(0, 100)}...`
                      : description)
                  : "No hay descripción"}</p>
                
                <p className="card-text"><small className="text-body-secondary">Fecha: {modified}</small></p>
            </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default CardsMarvel;