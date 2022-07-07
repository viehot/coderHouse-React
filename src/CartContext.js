import React, { useState, createContext } from "react";

export const Carrito = createContext()

export const CarritoProvider = ({children}) => {

    const [carr, setCarr] = useState([])

    const addItem = (item, quantity) => {
        let carga = {...item, quantity: quantity}
        setCarr(carr.concat(carga))
    }

    const removeItem = (itemId) => {
        setCarr(carr.filter((prod) => prod.id !== itemId))
    }

    const clear = () => setCarr([])

    const isInCart = (id) => {
        return carr.some((prod) => prod.id == id)
    }

    return (
        <Carrito.Provider value={[carr, setCarr, addItem, removeItem, clear, isInCart]} >
            {children}
        </Carrito.Provider>
    )
}