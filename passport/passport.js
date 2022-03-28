const passport = require('passport');

let GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy(
   {
    clientID:  "761347088789-rllmfv9jd0p99g814h0n5o15r4kac92t.apps.googleusercontent.com",
    clientSecret: "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",
   },
   ()=>{
       
   }
))