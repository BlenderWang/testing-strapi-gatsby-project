import axios from 'axios';

class News {
  static all() {
    return axios.get('../mockData.json').then(resp => resp.data);
  }
}

export default News 