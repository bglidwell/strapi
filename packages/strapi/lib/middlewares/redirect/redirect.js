'use strict';

module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
				if(!strapi.config.middleware.settings.redirect) return next(); // return if no configuration set
				
				const config = strapi.config.middleware.settings.redirect; // shortcut for redirect config

				if(config.https){  // if forcing https
					if (ctx.secure) {  
						// if connection is secure, return 
						return next();
					} else{ 
						// if connection is not secure, overwrite the protocol with custom or https
						ctx.request.URL.protocol = config.protocol ? config.protocol : 'https';
					}
				} else {
					// if not forcing https, check if protocol needs to be overwritten with custom
					if(config.protocol) ctx.request.URL.protocol = config.protocol;
				}

				if(config.port) ctx.request.URL.port = config.port;  // set port to custom if speficied
				if(config.hostname) ctx.request.URL.hostname = config.hostname; // set hostname if specified
				ctx.response.status = config.statusCode ? config.statusCode : 301; // set status to custom or 301
		
				ctx.response.redirect(redirected.href); // redirect the request 
			});
    },
  };
};