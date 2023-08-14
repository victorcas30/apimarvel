import "./style.css";
import useCarrusel from "./useCarrusel";

const Carrusel = props => {
    const {id,name,thumbnail} = props.marvel;
    let image = '';
    if (thumbnail) {
        const { path, extension } = thumbnail;
        image = `${path}.${extension}`;
    }
    const {incrementar,decrementar,num} = props;

    return(
        <>
        <div className="container">

        <h1 className="display-4">Carrusel Marvel </h1>
        <hr/>
        <h4>{`${id} - ${name} - ${num}`}</h4>
        <div className="d-flex justify-content-center align-items-center">
        <div id="carouselExampleCaptions" className="carousel slide carruselSize">
        <div className="carousel-inner">
            <div className="carousel-item active">
            {thumbnail && <img src={image} className="d-block w-100" alt="..."/>}
            <div className="carousel-caption d-none d-md-block cajaCarrusel">
                <h4>{`${id} - ${name} - ${num}`}</h4>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" onClick={decrementar} data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={incrementar} data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
        </div>

        </>
    )

}

export default Carrusel;