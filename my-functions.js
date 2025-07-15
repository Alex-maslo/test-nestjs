module.exports = {
  generateRandomUser(userContext, events, done) {
    const uniqueSuffix =
      Date.now().toString() + Math.floor(Math.random() * 10000);
    userContext.vars.name = 'TestUser' + uniqueSuffix;
    userContext.vars.email = 'testuser' + uniqueSuffix + '@example.com';
    return done();
  },
};
