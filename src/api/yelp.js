import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DmmdOs5ICWu6iGri-L7ef0St15q67olnwOZS11yfelzaUrqBqvI-LPSQntMuXzJN1Fi71gpkq17b7id8fiU4iw5-jV6zFe-K3hE2wV4AdkzttPNlrnQAiPtbQwImYHYx",
  },
});
