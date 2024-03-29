import {FastifyInstance} from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';
import ShortUniqueId from 'short-unique-id';
import { authenticate } from '../plugins/authenticate';

export async function poolRoutes(fastify: FastifyInstance){
    fastify.get('/pool/count', async _ => {return {count: await prisma.pool.count()}})

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
    
    fastify.get('/pools', {
        onRequest: [authenticate]
      }, async (request) => {
        const pools = await prisma.pool.findMany({
          where: {
            participants: {
              some: {
                userId: request.user.sub,
              }
            }
          },
          include: {
            _count: {
              select: {
                participants: true,
              }
            },
            participants: {
              select: {
                id: true,
    
                user: {
                  select: {
                    avatarUrl: true,
                  }
                }
              },
              take: 4,
            },
            owner: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        })
    
        return { pools }
      })

      fastify.get('/pools/:id', {
        onRequest: [authenticate]
      }, async (request) => {
        const getPoolParams = z.object({
          id: z.string(),
        })
    
        const { id } = getPoolParams.parse(request.params)
    
        const pool = await prisma.pool.findUnique({
          where: {
            id,
          },
          include: {
            _count: {
              select: {
                participants: true,
              }
            },
            participants: {
              select: {
                id: true,
    
                user: {
                  select: {
                    avatarUrl: true,
                  }
                }
              },
              take: 4,
            },
            owner: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        })
    
        return { pool }
      })
}
