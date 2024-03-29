import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { authenticate } from '../plugins/authenticate';
import fetch from 'node-fetch';

export async function authRoutes(fastify: FastifyInstance) {
  fastify.get('/me', 
  		{ onRequest: [authenticate] },
    	async request => {return {user: request.user}}
    )

	fastify.post('/users', async request => {
		
      console.log("")
      console.log({body: request.body})

			const createuserBody = z.object({ access_token: z.string() })

			const { access_token } = createuserBody.parse(request.body)

    console.log("")
    console.log({access_token})
			
			const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
				method: 'GET', 
				headers: { 'Authorization': `Bearer ${access_token}` }
			})
		
    console.log("")
    console.log({userResponse})

			const userData = await userResponse.json()

			const userInfoSchema = z.object({
				id: z.string(),
				email: z.string().email(),
				name: z.string(),
				picture: z.string().url()
			})
			const userInfo = userInfoSchema.parse(userData)
		
    console.log("")
    console.log({userInfo})


			let user = await prisma.user.findUnique({
				where: {
					googleId: userInfo.id,
				}
			})

			if (!user) user = await prisma.user.create({
				data: {
					googleId: userInfo.id,
					name: userInfo.name,
					email: userInfo.email,
					avatarUrl: userInfo.picture
				}
			}) 
		
			const token = fastify.jwt.sign(
				{
					name: user.name,
					avatarUrl: user.avatarUrl,
				}, 
				{ 
					sub: user.id,
					expiresIn: '7 days'
				}
			)

			return {token};
		})

}
