
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import Axios from "npm:axios";
import { getCookies } from "$std/http/cookie.ts";
import { Pelicula, Project } from "../Pelicula.ts";
import ShowProyects from "../islands/ShowProyects.tsx";

type Info = {
    proyectos: Project[];
    peli: Pelicula[];
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown | Info>) => {
        try{
            const pelis = await Axios.get<Pelicula[]>("https://filmapi.vercel.app/api/films")
            const projectsCookie = getCookies(req.headers).proyectos;
            if (!projectsCookie) {
            return ctx.render({ 
                projects: [], 
                peli: pelis.data 
            });
            }
            const projects = JSON.parse(projectsCookie);
            return ctx.render({
                peli: pelis.data,
                proyectos: projects
            })
        }catch(e){
            return ctx.render({
                peli: []
            })
        }
    },
}


const Page = (props: PageProps<Info>) => {
    return (
        <>
            <ShowProyects film={props.data.peli} proyecto={props.data.proyectos} />
        </>
    );
}

export default Page;