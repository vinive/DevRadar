const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//DEV CONTROLLER
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
//SEARCH CONTROLLER
routes.get('/search', SearchController.index);



module.exports = routes;