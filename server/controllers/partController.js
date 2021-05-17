const Part = require('../models/parts');

const part_index = (req, res) => {
    Part.find()
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
}

const part_details = (req, res) => {
    const id = req.params.id
    Part.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const part_create_post = (req, res) => {
    const part = new Part(req.body);
    part.save()
        .then((result) => {
            res.send(result)
        })
        .catch(err => {
            console.log(err);
        })
}

const part_update = (req, res) => {
    const id = req.params.id;
    Part.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const part_delete = (req, res) => {
    const id = req.params.id;
    Part.findByIdAndDelete(id)
        .then((result) => {
            res.send(result)
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    part_index,
    part_details,
    part_create_post,
    part_update,
    part_delete
}