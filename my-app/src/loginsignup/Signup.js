import React, { useState } from 'react'
import './Signup.css'
import { SignUpService } from '../Service/APIService';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        Username: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const Submit = async (e) => {
        e.preventDefault();
        try {
            const response = await SignUpService(formData);
            alert(`Account created: ${response.Message}`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                alert(`Account creation failed: ${error.response.data.Message}`);
            } else {
                alert(`Account creation failed: ${error.message}`);
            }
        }
    };


    return (
        <div>
            <h1>Login</h1>
            <div>
                <form>
                    <div className='input'>
                        <label htmlFor="email">Username</label>
                        <input type="text" name="username" placeholder='Username' onChange={handleChange} required/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Email' onChange={handleChange} required/>
                    </div>
                    <div className='input'>
                        <label htmlFor="email">Password</label>
                        <input type="email" name="password" placeholder='Password' onChange={handleChange} required/>
                    </div>

                    <div className="signup">
                        <input type="submit" onClick={Submit} value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;