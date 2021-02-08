'use strict';

const http = require('http');
const PORT = process.env.PORT || 3000;
const url = require('url');
const querystring = require('querystring');
const parseBody = require('./parse-body.js');

const Router = function(){
  this.routes = {
    HEAD: {},
    GET: {}
  }
}

Router.prototype.get = function(endpoint, callback){
  this.routes.GET[endpoint] = callback;
}

Router.prototype.head = function(endpoint, callback){
  this.routes.HEAD[endpoint] = callback;
}

Router.prototype.route = function(){
  return (req, res) => {
    // do the logic for invoking a route callback
    req.url = url.parse(req.url);
    req.url.query = querystring.parse(req.url.query);

    // parse the body only on PUT AND POST
    parseBody(req)
    .then(body => {

      req.body = body;

      // if we find a callback registered for a route call it
      //if(typeof this.routes[req.method][req.url.pathname] == 'function'){
        this.routes['GET'][req.url.pathname](req, res);
        return;
      //}

      // if no route callback was found reject a 404 error
      //let err = new Error('route not found');
      //err.status = 404;
      //return Promise.reject(err);

    })

    .catch(err => {
      console.error(err);
      if(err.status){
        res.statusCode = err.status;
        res.end();
        return;
      }

      res.status = 500;
      res.end();
    })
  };
}

let router = new Router();

router.get('/', function(req, res){
    res.end('jek')
})

router.head('/', function(req, res){
    res.end('tok')
})

const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log('server up (::)-<-<',PORT);
});
