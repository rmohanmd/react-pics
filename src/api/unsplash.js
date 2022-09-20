import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ITZ-fs_vSak5Whh4vau0DnXitUZVmQN0zTUTnb_nJwY",
  },
});
