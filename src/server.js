const Hapi = require('@hapi/hapi');
const routes = require('./api/notes/routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    // host: 'localhost',
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'], // agar bisa diakses oleh semua origin
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalana pada ${server.info.uri}`);
};

init();