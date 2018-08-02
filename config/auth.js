const passport = require('passport');
const passportJwt = require('passport-jwt').Strategy;

const jwtOptions = {
  // Get the JWT from the "Authorization" header.
  // By default this looks for a "JWT " prefix
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
  // The secret that was used to sign the JWT
  secretOrKey: config.get('authentication.token.secret'),
  // The issuer stored in the JWT
  issuer: config.get('authentication.token.issuer'),
  // The audience stored in the JWT
  audience: config.get('authentication.token.audience')
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
  const user = users.getUserById(parseInt(payload.sub));
  if (user) {
      return done(null, user, payload);
  }
  return done();
}));
