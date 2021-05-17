 const express = require('express');
 const partController = require('../../controllers/partController');
 const router = express.Router();

//  Get Part
router.get('/', partController.part_index);

// Get Single Part
router.get('/:id', partController.part_details);

// Update Part
router.put('/:id', partController.part_update);

// Add Part
router.post('/', partController.part_create_post);

// Delete Part
router.delete('/delete/:id', partController.part_delete);

module.exports = router;