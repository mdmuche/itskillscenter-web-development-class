import axios from "../utils/axios"

class AuthService {
    constructor() {
        this.tokenKey = 'token',
        this.userKey = 'user'
    }

    async register(userData) {
      try {
        const response = await axios.post('/auth/login', userData);
        return {
            success: true,
            message: response.data.message
        }
      } catch (err) {
        return {
            success: false,
            message: err.response?.data?.message || 'Registration failed'
        }
      }
    }

    async login(credentials) {
        try {
            const response = await axios.post('/auth/login', credentials);
            this.saveAuthData(response.data.token, response.data.user);
            return {
                success: true,
                user: response.data.user
            }
        } catch (err) {
            return {
            success: false,
            message: err.response?.data?.message || 'Login failed'
        }
        }
    }

    saveAuthData(token, user) {
        localStorage.setItem(this.tokenKey, token)
        localStorage.setItem(this.userKey, JSON.stringify(user))
    }

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
    }
}

const authService = new AuthService();

export default authService;