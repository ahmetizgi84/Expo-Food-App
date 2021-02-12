import axios from "axios";
import { API_KEY } from "../../app.config";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
