exports.configureRoutes = server => {
  // server.route accepts an object or an array
  return server.route([
    {
      method: 'GET',
      path: '/users/{id}',
      handler: () => {
        return Article.findAll();
      }
    }
  ]);
};
