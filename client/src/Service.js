import axios from 'axios';

const url = 'http://localhost:5000/api/services'

export default {
    // Create
    createService(data) {
        axios.post(url, data)
            .then(() => {
                window.location.replace('/services')
            });
    },

    // Get all 
    async getServices() {
        let res = await axios.get(url);
        return res.data;
    },

    // Get single
    async getSingleService(id) {
        let res = await axios.get(url + '/' + id);
        return res.data;
    },

    // Update 
    updateService(id, data) {
        axios.put(url + '/' + id, data)
        .then(() => {
            window.location.replace('/services')
        });
    },

    // Delete
    deleteService(id) {
        axios.delete(url + '/delete/' + id)
        .then(() => {
            window.location.replace('/services')
        });
    }
};