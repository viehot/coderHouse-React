import React, { useState, createContext } from "react";

export const Carrito = createContext()

export const CarritoProvider = ({children}) => {

    const [carr, setCarr] = useState([])

    const addItem = (item, quantity) => {
        let carga = {...item, quantity: quantity}
        setCarr(carr.push(carga))
        console.log(carr)
    }

    return (
        <Carrito.Provider value={[carr, setCarr, addItem]} >
            {children}
        </Carrito.Provider>
    )
}