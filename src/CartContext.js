import React, { useState, createContext } from "react";

export const Carrito = createContext()

export const CarritoProvider = ({children}) => {

    const [carr, setCarr] = useState([])

    const ver = () => {
        console.log(carr.length)
    }

    return (
        <Carrito.Provider value={[carr, setCarr, ver]} >
            {children}
        </Carrito.Provider>
    )
}