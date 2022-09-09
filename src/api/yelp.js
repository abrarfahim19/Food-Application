import axios, { Axios } from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer rgXKn0q-KTkWf1j_6ZFU5p9tC_IA3q7TeAO7C4BD8pXc-zPrjb92GYgNXcBDr56sVh1itHWUha9_jj9wLYrqaZwEkLjSE9HHU0x6jCKfb_SPY9SIIHMSm36v8skdY3Yx"
    }
})

// https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco

// GET https://api.yelp.com/v3/businesses/{id} 