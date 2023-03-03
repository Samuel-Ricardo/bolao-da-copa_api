import cors from '@fastify/cors';
import Fastify from "fastify";
import jwt from '@fastify/jwt';   
import {ENV} from './config'
import { routes } from './routes';

async function bootstrapi() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(jwt, {secret: ENV.JWT_SECRET});
    await fastify.register(routes)

await fastify.listen({port: 3333, host: '0.0.0.0'})
}

bootstrapi()
