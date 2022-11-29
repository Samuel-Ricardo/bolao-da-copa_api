import '@fastify/jwt'

declare module '@fastify/jwt' {
    interface IFastifyJWT {
        user: {
            sub:string;
            name: string;
            avatarURL?: string;
        }
    }
 }