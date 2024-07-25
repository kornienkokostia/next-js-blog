const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER === phase) {
    return {
      env: {
        mongodb_username: 'kornienkokostia',
        mongodb_password: 'C3YvAabZuBwYXkQe',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev'
      }
    }
  }
  return {
    env: {
      mongodb_username: 'kornienkokostia',
      mongodb_password: 'C3YvAabZuBwYXkQe',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site'
    }
  }

}

module.exports = nextConfig