const Service = require('../models/service');

const service_index = (req, res) => {
    Service.find()
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
}

const service_details = (req, res) => {
    const id = req.params.id
    Service.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
}

const service_create_post = (req, res) => {
    const service = new Service(req.body);
    service.save()
        .then((result) => {
            res.json('Service created succesfully')
        })
        .catch(err => {
            console.log(err);
        })
}

const service_update = (req, res) => {
    const id = req.params.id;
    Service.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.json('Service updated succesfully');
        })
        .catch(err => {
            console.log(err);
        });
}

const service_delete = (req, res) => {
    const id = req.params.id;
    Service.findByIdAndDelete(id)
        .then((result) => {
            res.json('Service deleted succesfully');
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    service_index,
    service_details,
    service_create_post,
    service_update,
    service_delete
}