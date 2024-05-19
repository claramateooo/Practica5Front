
import Axios from "npm:axios";
import UnaPelicula from "../../islands/UnaPelicula.tsx";
import { Pelicula } from "../../Pelicula.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Info = {
    id: string;
    peli: Pelicula[];
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, {id: string, peli: Pelicula[]}>) => {
        const { id } = ctx.params;
        try{
            const pelis = await Axios.get<Pelicula[]>("https://filmapi.vercel.app/api/films")
    
            return ctx.render({
                id: id,
                peli: pelis.data
            })
        }catch(e){
            return ctx.render({
                id: id,
                peli: []
            })
        }
    },
}

const Page = (props: PageProps<Info>) => {
    const id = props.data.id;
    const peli = props.data.peli;
    return <UnaPelicula id={id} peli={peli}/>
}

export default Page;