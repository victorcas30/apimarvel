import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="container">
            <h1 className="display-4">Home</h1>
            <hr/>
            <h2>Mis Proyectos</h2>
            <div className="row">
                        <div className="col-md-4">
                <div className="card project-card">
                <img src="https://raw.githubusercontent.com/victorcas30/apimarvel/main/src/assets/img/marvel1.png" className="card-img-top" alt="Proyecto 1"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 1</h5>
                    <p className="card-text">Api Marvel.</p>
                    <Link to="/api-marvel" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card project-card">
                <img src="https://raw.githubusercontent.com/victorcas30/apimarvel/main/src/assets/img/marvel2.png" className="card-img-top" alt="Proyecto 2"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 2</h5>
                    <p className="card-text">Sub Ruta - Marvel.</p>
                    <Link to="/subrutasmarvel" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card project-card">
                <img src="https://raw.githubusercontent.com/victorcas30/apimarvel/main/src/assets/img/marvel3.png" className="card-img-top" alt="Proyecto 3"/>
                <div className="card-body">
                    <h5 className="card-title">Proyecto 3</h5>
                    <p className="card-text">Tarjetas.</p>
                    <Link to="/" className="btn btn-dark">Ver más</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;