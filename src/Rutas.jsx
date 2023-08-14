import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import ApiMarvel from "./ApiMarvel";
import SubRutasMarvel from "./SubRutasMarvel";
import Acerca from "./Acerca";
import Loading from "./Loading";
import Error404 from "./Error404";
import CardMarvelSubRuta from "./CardMarvelSubRuta";
import ApiMarvelCarrusel from "./ApiMarvelCarrusel";

const Rutas = () => {
    return(
        <>
        <Menu/>
        <Routes>
            <Route path="/apimarvel" element={<Home/>} />
            <Route path="/subrutasmarvel/*" element={<SubRutasMarvel/>}>
                <Route path="cardmarvelsubruta/:id" element={<CardMarvelSubRuta/>} />
            </Route>
            <Route path="/api-marvel" element={<ApiMarvel/>} />
            <Route path="/carruselmarvel" element={<ApiMarvelCarrusel/>} />
            <Route path="/acerca" element={<Acerca/>} />
            <Route path="/loading" element={<Loading/>} />
            <Route path="*" element={<Error404/>} />
        </Routes>
        </>
    )
}

export default Rutas;