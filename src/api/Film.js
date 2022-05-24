import axios from 'axios';
import { urls } from './urls';

class Film {
  static async getAll() {
    const { data } = await axios.get(urls.allFilms);
    return data;
  }
}

export default Film;
