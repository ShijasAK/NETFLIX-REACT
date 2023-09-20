const key = '18788b6b8b6c626730133621dfbca0ec'

const requests ={

    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestNowPlaying :`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpcoming :`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestTrending : `https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTv :`https://api.themoviedb.org/3/discover/tv?api_key=${key}`

}

export default requests