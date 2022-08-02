import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ItemCart from "../ItemCart/ItemCart";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { Carrito } from "../../CartContext";

const usuario = {
  name: "",
  phone: "",
  email: "",
};

const ItemCartContainer = () => {
  const [carr, setCarr, addItem, removeItem, clear] = useContext(Carrito);

  const [total, setTotal] = useState(0);

  const [user, setUser] = useState(usuario);

  const [idSuccess, setIdSuccess] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const compra = await addDoc(collection(db, "purchase"), {
      buyer: user,
      items: carr,
      date: Timestamp.now(),
      total: total,
    });
    setIdSuccess(compra.id);
    setUser(usuario);
    setCarr([]);
  };

  useEffect(() => {
    let suma = 0;

    carr.forEach((item) => {
      suma = suma + parseInt(item.price) * parseInt(item.quantity);
    });

    setTotal(suma);
  }, [carr]);

  return (
    <div className="container">
      {idSuccess ? (
        <div className="alert alert-success" role="alert">
          Su compra fue realizada correctamente. Su numero de seguimiento es{" "}
          {idSuccess}
        </div>
      ) : (
        <div className="row g-6">
          {carr[0] ? (
            <div className="col-md-7">
              <button onClick={() => clear()} className="btn btn-danger m-4 ">
                Borrar todo
              </button>
              {carr.map((item) => (
                <ItemCart item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="col-md-12">
              <h1>No has seleccionado ningun producto</h1>
              <Link to="/" className="btn btn-primary">
                Volver a Comprar
              </Link>
            </div>
          )}
          {carr[0] && (
            <div className="col-md-5">
              <h1>Total de venta: {total}$</h1>
              <form onSubmit={onSubmit}>
                <div className="form-floating m-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Nombre"
                    name="name"
                    value={user.name}
                    onChange={handleOnChange}
                    required
                  />
                  <label htmlFor="floatingInput">Nombre</label>
                </div>
                <div className="form-floating m-2">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPhone"
                    placeholder="Telefono"
                    name="phone"
                    value={user.phone}
                    onChange={handleOnChange}
                    required
                  />
                  <label htmlFor="floatingPhone">Telefono</label>
                </div>
                <div className="form-floating m-2">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="ejemplo@gmail.com"
                    name="email"
                    value={user.email}
                    onChange={handleOnChange}
                    required
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <button className="btn btn-primary m-2">Terminar compra</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemCartContainer;
