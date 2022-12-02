import { FastifyInstance } from 'fastify';
import { prisma } from "../lib/prisma";
import { authenticate } from '../plugins/authenticate';
import { z } from 'zod';

export function guessRoutes(fastify: FastifyInstance){
    
    fastify.get('/guesses/count', async () => await prisma.user.count());

    

}