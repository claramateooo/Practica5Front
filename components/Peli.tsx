import { FunctionComponent } from "preact";
import { Pelicula } from "../Pelicula.ts";



const Peli: FunctionComponent<Pelicula> = (props) => {
  const { name, staticImageUrl } = props;
  return (
    <div class="pelicula-card">
      <img class="pelicula-image" src={staticImageUrl} alt={name} />
      <h2 class="pelicula-name">{name}</h2>
    </div>
  );
};


export default Peli;