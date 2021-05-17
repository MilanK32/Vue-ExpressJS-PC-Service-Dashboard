import axios from 'axios';

const url = 'http://localhost:5000/api/parts'

export default {
    // Create
    createPart(data) {
        axios.post(url, data)
            .then(() => {
                window.location.replace('/')
            });
    },

    // Get all 
    async getParts() {
        let res = await axios.get(url);
        return res.data;
    },

    // Get single
    async getSinglePart(id) {
        let res = await axios.get(url + '/' + id);
        return res.data;
    },

    // Update 
    updatePart(id, data) {
        axios.put(url + '/' + id, data)
        .then(() => {
            window.location.replace('/')
        });
    },

    // Delete
    deletePart(id) {
        axios.delete(url + '/delete/' + id)
        .then(() => {
            window.location.replace('/')
        });
    }
};