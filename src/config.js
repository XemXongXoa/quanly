export const config = {
    cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
    port : process.env.PORT || 3000,
    mongo: {
        uri: 'mongour;',
    },
    jwt: {
        secret: process.env.SECRET||'secret',
        expiresIn:process.env.EXPIRES_IN || '1h',
    },
}