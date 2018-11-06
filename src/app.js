module.exports = (server, database) => ({
  start: function() {
    if (server) server.start();
    if (database) database.authenticate();
  }
});
