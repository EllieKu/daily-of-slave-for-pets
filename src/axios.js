import axios from "axios";

axios.defaults.proxy = {
  protocol: 'https',
  host: 'daily-of-slave-for-pets-server.herokuapp.com'
}

axios.defaults.baseURL = 'https://daily-of-slave-for-pets-server.herokuapp.com/'

export default axios