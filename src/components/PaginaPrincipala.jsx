import React from "react";
import Navigatie from "./Navigatie";
import Content from "./Content";
import Footer from "./Footer";

const PaginaPrincipala = () => {
    const arr = ["blblfdb", "sdfsdfsd", "s2143543tgf"]

    return <>
        <Navigatie />
        <Content texte={arr} repeat={2} />
        <Footer />
    </>
}

export default PaginaPrincipala;