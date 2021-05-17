const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    
    part_type: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    days_to_fix: {
        type: Number,
        required: true
    },
    
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Part = mongoose.model('Part', partSchema);

module.exports = Part;