module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '797320e0db6991420f79a655fbe2cf5d'),
  },
});
