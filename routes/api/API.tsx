import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
    GET: async (req: Request) => {
        try {
            const pelicula = await Axios.get("https://filmapi.vercel.app/api/films")
            return new Response(JSON.stringify(pelicula.data), {
                status: 200
            }
        )
        }catch(e){
            return new Response(JSON.stringify({error: e}), {
                status: 500
            }
        )
        }
    },
    POST: async (req: Request) => {
        try {
            const body = await req.json();
            const response = await fetch("https://filmapi.vercel.app/api/films", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },                
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                    status: 200
                }
            )
        }catch(e){
            return new Response(JSON.stringify({error: e}), {
                    status: 500
                }
            )
        }
    }
}