import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d281f1ac36024a638112d29c94675450" },
});
