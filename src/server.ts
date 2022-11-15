import cors from '@fastify/cors'
import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import ShortUniqueId from 'short-unique-id';
import { z } from 'zod';


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
    fastify.get('/users/count', async () => {count: await prisma.user.count()})
    fastify.get('/guesses/count', async () => {count: await prisma.guess.count()})
    
    fastify.post('/pools', async (request, reply) => {
        const createPoolBody = z.object({
            title: z.string()
        })

        const {title} = createPoolBody.parse(request.body);

        const generate = new ShortUniqueId({length: 6})
        const code = String(generate()).toUpperCase()
        
        await prisma.pool.create({
            data: {
                title,
                code
            }
        })

        return reply.status(201).send({code})
    })

await fastify.listen({port: 3333, /*host: '0.0.0.0'*/})
}

bootstrapi()