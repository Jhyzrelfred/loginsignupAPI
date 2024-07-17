import axios from 'axios';

const API_URL = 'quicoy-sb.yeems214.xyz';

export const Loginservice = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const SignUpService = async (accDetails) => {
    try {
        const response = await axios.post(`${API_URL}/SignUp`, accDetails);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};