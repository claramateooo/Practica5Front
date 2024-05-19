import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <>
        <div class = "center">
            <a class = "b" href = "/">Peliculas</a>
            <a class = "b" href = "/proyect">Proyects</a>
            </div>
        <Component /> 
    </>
  );
}