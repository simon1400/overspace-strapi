module.exports = {
  apps: [
    {
      name: 'overspace-strapi',
      script: './node_modules/@strapi/strapi/bin/strapi.js',
      args: 'start',
      cwd: '/opt/overspace/strapi',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 1334,
      },
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      time: true,
    },
  ],

  deploy: {
    production: {
      user: 'root',
      host: ['157.90.169.205'],
      ref: 'origin/main',
      repo: 'git@github.com:simon1400/overspace-strapi.git',
      path: '/opt/overspace/strapi',
      ssh_options: 'StrictHostKeyChecking=no',
      'pre-deploy-local': 'echo "Deploying to production..."',
      'post-deploy':
        'npm ci && ' +
        'npm run build && ' +
        'mkdir -p logs && ' +
        'pm2 reload ecosystem.config.js --env production && ' +
        'pm2 save',
      'pre-setup': 'mkdir -p /opt/overspace/strapi',
    },
  },
};
