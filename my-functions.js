module.exports = {
  generateRandomUser(userContext, events, done) {
    const randomInt = Math.floor(Math.random() * 1000000);
    userContext.vars.name = 'TestUser' + randomInt;
    userContext.vars.email = 'testuser' + randomInt + '@example.com';
    return done();
  },
};
