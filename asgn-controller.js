var Assignment = require('asgn-model');

//Add assignments
exports.addAsgn = (req, res) => {
    if(!req.body) {
        return res.status(400).send('No assignement info submitted.');
    }
    var asgn = new Assignment(req.body);
    asgn.save()
        .then((doc) => {
            if(!doc || doc.length === 0) {
                return res.status(500).send('Server error.');
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

//Find one assignment
exports.findAsgn = (req, res) => {
    if(!req.body) {
        return res.status(400).send('Missing assignment info.');
    }
    Assignment.findOne({
        assignmentName: req.query.assignmentName
    })  
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
}

//Update assignment
exports.updateAsgn = (req, res) => {
    if(!req.body){
        return res.status(400).send('Missing assignment info.');
    }
    Assignment.findOneAndUpdate({
        assignmentName: req.query.assignmentName
    }, req.body, {new:true})
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}

//Delete one assignment
exports.deleteAsgn = (req, res) => {
    if(!req.body) {
        return res.status(400).send('Missing assignment info.');
    }
    Assignment.findOneAndDelete({
        assignmentName: req.query.assignmentName
    })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
}