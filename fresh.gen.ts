// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_API from "./routes/api/API.tsx";
import * as $id_id_ from "./routes/id/[id].tsx";
import * as $index from "./routes/index.tsx";
import * as $proyect from "./routes/proyect.tsx";
import * as $Botones from "./islands/Botones.tsx";
import * as $PeliculaL from "./islands/PeliculaL.tsx";
import * as $Proyects from "./islands/Proyects.tsx";
import * as $ShowProyects from "./islands/ShowProyects.tsx";
import * as $UnaPelicula from "./islands/UnaPelicula.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/API.tsx": $api_API,
    "./routes/id/[id].tsx": $id_id_,
    "./routes/index.tsx": $index,
    "./routes/proyect.tsx": $proyect,
  },
  islands: {
    "./islands/Botones.tsx": $Botones,
    "./islands/PeliculaL.tsx": $PeliculaL,
    "./islands/Proyects.tsx": $Proyects,
    "./islands/ShowProyects.tsx": $ShowProyects,
    "./islands/UnaPelicula.tsx": $UnaPelicula,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
