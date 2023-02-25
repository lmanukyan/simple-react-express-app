import axios from '../helpers/axios';
import { store } from '../store';
import { setUser } from '../store/userSlice';
import { toast } from 'react-toastify';

class UserService {
  
  async getProfile() {
    try {
      const { data: result } = await axios.get('/users/me');
      if (result.success) {
        store.dispatch(setUser(result.data));
      } 
    } catch (e) {
      console.log(e);
    }
  }

  async update(data) {
    try {
      const { data: result } = await axios.post('users/update', data);
      if (result.success) {
        store.dispatch(setUser(result.data));
        toast.success('Your data has been successfully changed.');
      } else {
        result.data.forEach(error => toast.error(error.msg));
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getPeople(data) {
    try {
      const { data: result } = await axios.get('users/people', { params: data });
      if (result.success) {
        return result.data;
      } else {
        result.data.forEach(error => toast.error(error.msg));
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  }

}

const userService = new UserService();

export default userService;
