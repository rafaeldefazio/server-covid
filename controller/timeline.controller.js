var City = require('../model/city.model');


  
exports.all =  function(req, res, next) {  
 City.find({}) 
 .sort({"date": 1})
 .then(function(doc) {  
   res.json(doc);  
 })
};  


exports.filter =  function(req, res, next) {  

	city =  req.params.city;
	city = city.charAt(0).toUpperCase() + city.slice(1);


 City.find({city: city})
 .sort({"date": 1})
 .then(function(doc) {  
   res.json(doc);  
 })
};  

