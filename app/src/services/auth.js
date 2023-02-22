import axios from '../helpers/axios';
import { store } from '../store';
import { appRouter } from '../router';
import { setUser } from '../store/userSlice';
import { toast } from 'react-toastify';

class AuthService {

  async register(data) {
    try {
      const { data: result } = await axios.post('register', data);
      if (result.success) {
        store.dispatch(setUser(result.data))
        toast.success('You have successfully registered.')
      } else {
        result.data.forEach(error => toast.error(error.msg))
      }
    } catch (e) {
      console.log(e);
    }
  }

  async login(data) {
    try {
      const { data: result } = await axios.post('login', data);
      if (result.success) {
        toast.success('You have successfully logged in.')
        store.dispatch(setUser(result.data))
        setTimeout(() => {
          appRouter.navigate('/account')
        }, 1500)
      } else {
        result.data.forEach(error => toast.error(error.msg))
      }
    } catch (e) {
      console.log(e);
    }
  }
}

const authService = new AuthService();

export default authService;
