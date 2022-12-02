import {FastifyInstance} from 'fastify';
import { prisma } from '../lib/prisma';

export async function poolRoutes(fastify: FastifyInstance){
    fastify.get('/pool/count', async _ => await prisma.pool.count())
}