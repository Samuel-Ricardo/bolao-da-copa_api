import { FastifyInstance } from 'fastify';
export * from './user'
export * from './auth'
export * from './user'
export * from './guess'
export * from './pool'
export * from './game'

import {
    authRoutes,
    gameRoutes,
    guessRoutes,
    poolRoutes,
    userRoutes
} from '.'

export async function routes(fastify: FastifyInstance) {
    await fastify.register(poolRoutes)
    await fastify.register(authRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(userRoutes)
}