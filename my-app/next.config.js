// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Priyanka",
        mongodb_password: "lcqOW79pLf7zPXl3",
        mongodb_clustername: "cluster0",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Priyanka",
      mongodb_password: "lcqOW79pLf7zPXl3",
      mongodb_clustername: "cluster0",
    },
  };
};
