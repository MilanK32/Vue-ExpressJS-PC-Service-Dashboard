 const express = require('express');
 const serviceController = require('../../controllers/serviceController');
 const router = express.Router();

//  Get Service
router.get('/', serviceController.service_index);

// Get Single Service
router.get('/:id', serviceController.service_details);

// Update Service
router.put('/:id', serviceController.service_update);

// Add Service
router.post('/', serviceController.service_create_post);

// Delete Service
router.delete('/delete/:id', serviceController.service_delete);

module.exports = router;