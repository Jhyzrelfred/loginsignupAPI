import React, { useState } from 'react'
import './Login.css'
import { Loginservice} from '../Service/APIService';


const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const alertMessage = (mes) => {
        alert(`${mes}`);
    };
      const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await Loginservice({ username, email });
            alertMessage(response.Message);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alertMessage(`Login failed: ${error.response.data.Message}`);
            } else {
                alertMessage(`Login failed: ${error.message}`);
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <form >
                    <div className="Username">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div className="Email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="signup">
                        <input type="submit" onClick={handleLogin} value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;