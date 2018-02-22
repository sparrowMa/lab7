var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
    projects['viewAlt'] = false;
    response.render('index', projects);





};

// a new controller that exports the function "viewAlt". It should also render index.handlebars
exports.viewAlt = function(request, response){
    projects['viewAlt'] = true;
    response.render('index', projects);


};

