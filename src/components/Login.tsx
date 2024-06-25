import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import axios from 'axios';
import { useAuth } from '@/context/authContext';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/auth/login', data);
      const token = response.data.token;
      const userName = response.data.user.username; // Assuming your API response includes the user name

      localStorage.setItem('authToken', token);
      localStorage.setItem('userName', userName);

      login(userName);

      setErrorMessage(null);
      onClose();
    } catch (error) {
      console.error('Erro ao logar:', error);

      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || 'Erro ao logar');
      } else {
        setErrorMessage('Erro ao logar');
      }
    }
  };

  return (
    <div className="modal-content">
      <h2 className="modal-title">Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label>Email</label>
          <input
            className={`form-input ${errors.email && 'input-error'}`}
            type="email"
            placeholder="Your email"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="error-message">Email is required.</p>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            className={`form-input ${errors.password && 'input-error'}`}
            type="password"
            placeholder="Your password"
            {...register('password', { required: true })}
          />
          {errors.password && <p className="error-message">Password is required.</p>}
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;