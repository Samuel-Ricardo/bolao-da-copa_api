import {FastifyInstance} from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';

export async function poolRoutes(fastify: FastifyInstance){
    fastify.get('/pool/count', async _ => await prisma.pool.count())

    fastify.post('/pools',async (request, response) => {
        const createPoolBody = z.object({title: z.string()})

        const {title} = createPoolBody.parse(request.body);

        const generate = new ShortUniqueId({length: 6})
        const code = String(generate()).toUpperCase();

        try {
            await request.jwtVerify()

            await prisma.pool.create({
                data: {
                    title, 
                    code,
                    ownerId: request.user.sub,
                    
                    participants: {create: {userId: request.user.sub}}
                }
            })
        } catch (error) {
            await prisma.pool.create({ data: { title, code } })
        }

        return response.status(201).send({code})
    })

    
}