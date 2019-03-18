module.exports = {
  apps: [{
    name: 'hf_web',
    script: './src/server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    node_args: '--inspect=localhost:9224',
    instances: 1,
    autorestart: true,
    watch: false,
    exp_backoff_restart_delay: 20,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'app,app:*'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    name: 'hf_users_api',
    script: './apps/hf_users_api_v2/src/server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    node_args: '--inspect=localhost:9225',
    instances: 1,
    autorestart: true,
    watch: false,
    exp_backoff_restart_delay: 20,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'app,app:*'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },{
    name: 'hf_quotes_api',
    script: './apps/hf_quotes_api/src/server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    node_args: '--inspect=localhost:9226',
    instances: 1,
    autorestart: true,
    watch: false,
    exp_backoff_restart_delay: 20,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'app,app:*'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
  ],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
