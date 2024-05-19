// Archivo Unapelicula.tsx

import {  useState } from "preact/hooks";
import { Peli } from "../Peli.ts";
import { Pelicula } from "../Pelicula.ts";
import Botones from "./Botones.tsx";
import Proyects from "./Proyects.tsx";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const CoolMovie: FunctionComponent<Peli> = ({ peli, id }) => {
  const pelicula: Pelicula | undefined = peli.find((pelicula) => pelicula._id === id);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {pelicula !== undefined && (
        <div class="cool-movie">
          <h2>{pelicula.name}</h2>
          <img src={pelicula.staticImageUrl} />
          <div class="movie-info">
            <p>
              <strong>Brand:</strong> {pelicula.brand}
              <br />
              <strong>ISO:</strong> {pelicula.iso}
              <br />
              <strong>Color:</strong> {pelicula.color ? "Si" : "Black&White"}
              <br />
              <strong>Formato:</strong> {pelicula.formatOneTwenty && "3.5mm"} {pelicula.formatOneTwenty && pelicula.formatThirtyFive && " y "} {pelicula.formatThirtyFive && "120mm"}
              <br />
              {pelicula.color && <div><strong>Proceso:</strong> {pelicula.process}</div>}
            </p>
            <div class="description">
              <strong>Descripcion:</strong> <br /> {pelicula.description}
            </div>
            <button class="btn btn-blue" onClick={() => setShowModal(true)}>Meter a un Proyecto</button>
            <div class="date"><strong>Date:</strong> {pelicula.dateAdded}</div>
            <Botones />
          </div>
        </div>
      )}

      {showModal && (
        <div class="modal-backdrop" onClick={() => setShowModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Proyects film={pelicula} />
          </div>
        </div>
      )}
    </>
  );
};

export default CoolMovie;
