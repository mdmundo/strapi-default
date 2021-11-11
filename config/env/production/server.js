module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 1337),
  url: env("URL", ""),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "48f5812e71164fbe609c452b6a9a1b4d"),
    },
  },
});
