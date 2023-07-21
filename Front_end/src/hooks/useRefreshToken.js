import { axiosNormal } from '../services/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axiosNormal.get(`/auth/refresh`, {headers: {'Content-Type': 'application/json'},
        withCredentials: true});

        await setAuth(prev => {
            return {...response.data};
        });
        return response.data.data.token;
    }
    return refresh;
};

export default useRefreshToken;