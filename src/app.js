const axios = require('axios');


const PORT = process.env.PORT || 3000;
const genreRequests = axios.create({
    baseURL: `http://localhost:${PORT}`
});
genreRequests.interceptors.request.use(
    config => {
        console.log(`${config.method.toUpperCase()} request sent to http://localhost:${PORT}${config.url}`);
        return config;
    },
    error => Promise.reject(error)
);
function requestInfo(res){
    console.log(`Status: ${res.status}`);
    console.log(res.data);
}

// REQUESTS (EXPORTING)
module.exports = {

    getGenreList: function getGenreList(){
        genreRequests.get('/api/genres')
        .then(res => requestInfo(res))
        .catch(err => console.log(err));
    },
    
    getGenre: function getGenre(id){
        genreRequests.get(`/api/genres/${id}`)
        .then(res => requestInfo(res))
        .catch(err => console.log(err));
    },
    
    postGenre: function postGenre(genre){
        genreRequests.post('/api/genres', { genre : genre})
        .then(res => requestInfo(res))
        .catch(err => console.log(err));
    },
    
    updateGenre: function updateGenre(id,genre){
        genreRequests.put(`/api/genres/${id}`,{ genre: genre})
        .then(res => requestInfo(res))
        .catch(err => console.log(err));
    },
    
    deleteGenre: function deleteGenre(id){
        genreRequests.delete(`/api/genres/${id}`)
        .then(res => requestInfo(res))
        .catch(err => console.log(err));
    }
}