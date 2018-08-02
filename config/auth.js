require('dotenv').config();
const passport = require('passport');
const passportJwtStrategy = require('passport-jwt').Strategy;
const passportExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  // Get the JWT from the "Authorization" header.
  // By default this looks for a "JWT " prefix
  jwtFromRequest: passportExtractJwt.fromAuthHeaderAsBearerToken(),
  // The secret that was used to sign the JWT
  secretOrKey: process.env.JWT_SECRET,
  // The issuer stored in the JWT
  issuer: process.env.JWT_ISSUER,
  // The audience stored in the JWT
  audience: process.env.JWT_AUDIENCE
};

passport.use(new passportJwtStrategy(jwtOptions, (payload, done) => {
  const user = users.getUserById(parseInt(payload.sub));
  if (user) {
      return done(null, user, payload);
  }
  return done();
}));
