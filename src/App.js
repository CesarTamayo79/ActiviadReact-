import React, { useState } from "react";
import Titulo from "./components/Titulo";
import Imagen from "./components/Imagen";
import Parrafo from "./components/Parrafo";
import Enlace from "./components/Enlace";
import Lista from "./components/Lista";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import Boton from "./components/Boton";
import InputText from "./components/InputText";
import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import InputTel from "./components/InputTelefono";
import InputURL from "./components/InputURL";
import InputSearch from "./components/InputSearch";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    sitioWeb: "",
    busqueda: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Formulario enviado correctamente!");
  };

  const musicas = [
    "New Heart - Crash Adams",
    "Take Me to the Beach - Ado",
    "Rock DJ - Robbie Williams",
    "It's Time - Imagine Dragons",
  ];

  const estudiantes = [
    ["A1", "TV Sonic", "$1200"],
    ["A2", "Laptop HP", "$450"],
    ["A3", "PS5", "$1400"],
  ];

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{ backgroundColor: "#2c2c2c", color: "#f8f9fa", padding: "2rem" }}
    >
      <div className="container flex-grow-1">
        <Titulo
          nivel={1}
          texto="Tarea: Crear componentes React para representar elementos HTML"
          className="text-center mb-5"
        />

        {/* Quitar gap-3 para menos separación */}
        <div className="d-flex flex-wrap justify-content-between">

          {/* Quitar mx-auto para no centrar con márgenes */}
          <div className="col-md-4 p-2 bg-secondary bg-opacity-75 border rounded shadow text-center">
            <Imagen
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4BSd8c4203DFdrRMpkk9gRxPIdeidlItGQ&s"
              alt="Logo de la aplicación"
              className="img-thumbnail mb-4"
            />

            <Parrafo texto="Hollow Knight es un videojuego perteneciente al género metroidvania desarrollado y publicado por Team Cherry. El videojuego fue inicialmente lanzado para Microsoft Windows en febrero de 2017, y más tarde para macOS y Linux en abril de 2017." />

            <Enlace
              href="https://reactjs.org"
              texto="Documentación de React"
              target="_blank"
              className="btn btn-link text-light"
            />
          </div>

          <div className="col-md-4 p-2 bg-warning-subtle bg-opacity-75 border rounded shadow text-center text-dark">
            <Titulo nivel={2} texto="Mis Músicas" className="mb-3" />
            <Lista elementos={musicas} className="list-group mb-4" />

            <Titulo nivel={2} texto="Inventario" className="mb-3" />
            <div className="border rounded shadow-sm p-3 bg-light">
              <Tabla
                cabecera={["ID", "Producto", "Precio"]}
                datos={estudiantes}
                className="table table-bordered mb-0 text-center"
              />
            </div>
          </div>

          <div className="col-md-4 p-2 bg-info-subtle bg-opacity-75 border rounded shadow text-center text-dark">
            <Titulo nivel={2} texto="Formulario de Contacto" className="mb-3" />
            <Formulario
              onSubmit={handleSubmit}
              className="p-3 bg-white rounded shadow-sm w-100"
            >
              <InputText
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
                className="mb-3"
              />

              <InputEmail
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
                className="mb-3"
              />

              <InputPassword
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                required
                minLength={6}
                className="mb-3"
              />

              <InputTel
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="mb-3"
              />

              <InputURL
                name="sitioWeb"
                value={formData.sitioWeb}
                onChange={handleChange}
                placeholder="Sitio web personal"
                className="mb-3"
              />

              <InputSearch
                name="busqueda"
                value={formData.busqueda}
                onChange={handleChange}
                placeholder="Buscar..."
                className="mb-3"
              />

              <Boton texto="Enviar" type="submit" className="btn btn-primary w-100" />
            </Formulario>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-center text-muted">
        © {new Date().getFullYear()} - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
