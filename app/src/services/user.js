import axios from '../helpers/axios';
import { store } from '../store';
import { setUser } from '../store/userSlice';

class UserService {
  
  async getProfile() {
    try {
      const { data: result } = await axios.get('/users/me');
      if (result.success) {
        store.dispatch(setUser(result.data))
      } 
    } catch (e) {
      console.log(e);
    }
  }
}

const userService = new UserService();

export default userService;
