module.exports = {
  apps : [{
    name   : "Overspace strapi",
    script : "npm start",
    env_production: {}
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/overspace-strapi.git',
      path : '/var/www/overspace/strapi',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
