import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 85yGrmvy-Vsf2bCwUScrsP9c6E6FQVbohgRZ8KNhZzA",
  },
});
