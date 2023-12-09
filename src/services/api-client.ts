import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ae75f923b3334ecea3caaf6bda06c693",
  },
});
