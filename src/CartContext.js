import React, { useState, createContext } from "react";

export const Carrito = createContext()

const carrito = []

export const CarritoProvider = ({children}) => {

    const [carr, setCarr] = useState(carrito)
    const addItem = (item, quantity) => {
        let carga = {...item, quantity: quantity}
        setCarr(carrito.push(carga))
    }

    const removeItem = (itemId) => {
        let list = carr.filter((prod) => prod.id !== itemId)
        setCarr(list)
    }

    const clear = () => setCarr([])

    const isInCart = (id) => {
        return carrito.some((prod) => prod.id == id)
    }

    return (
        <Carrito.Provider value={[carr, setCarr, addItem, removeItem, clear, isInCart]} >
            {children}
        </Carrito.Provider>
    )
}