var express = require('express');
var router = express.Router();

var asgnController = require('asgn-controller');

//POST method
router.post('/assignments', asgnController.addAsgn);

//GET method
router.get('/assignments', asgnController.findAsgn);

//PUT method
router.put('/assignments', asgnController.updateAsgn);

//DELETE method
router.delete('/assignements', asgnController.deleteAsgn);