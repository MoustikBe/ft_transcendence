import Fastify from 'fastify';
import { db } from './db.js';

const fastify = Fastify({ logger: true });

fastify.get('/api/ping', async (request, reply) => 
{
    return{ pong: 'it works! '};
});

fastify.get('/users', async(request, reply) =>
{
    const rows = db.prepare('SELECT * FROM users').all();
    return rows;
});

fastify.post('/api/login', async(request, reply) =>
{
    const { username, password } = request.body;
    if(username === 'Admin' && password === 'root')
    {
        return reply.send({
            message: 'Login successful',
            user: { username }
        });
    }
    reply.code(401).send({ message: 'invalid credential' });  
});

fastify.listen({port: 3000, host: '0.0.0.0'}, (err) =>
{
    if(err)
    {
        fastify.log.error(err);
        process.exit(1);
    }
});