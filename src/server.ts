import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";

const prisma = new PrismaClient({
    log: ['query', 'error']
});

async function bootstrapi() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true // allowed domains
    });

    fastify.get('/pools/count', async () => {
        const pools = await prisma.pool.count()

        return {count: pools}
    })

await fastify.listen({port: 3333, /*host: '0.0.0.0'*/})
}

bootstrapi()