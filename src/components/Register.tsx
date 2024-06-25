import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import axios from 'axios';
import SuccessMessageChip from './SuccessMessageChip'; // Importe o componente SuccessMessageChip

interface RegisterProps {
  onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false); // Alterar para booleano
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/auth/register', data);
      const userName = response.data.username;
      setSuccess(true);
      setErrorMessage(null);

      localStorage.setItem('userName', userName);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 4000); 
    } catch (error) {
      console.error('Erro ao registrar:', error);

      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || 'Erro ao registrar');
      } else {
        setErrorMessage('Erro ao registrar');
      }
      setSuccess(false);
    }
  };

  return (
    <div className="modal-content">
      <h2 className="modal-title">Register</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {success && <SuccessMessageChip />} {}
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label>Username</label>
          <input
            className={`form-input ${errors.username && 'input-error'}`}
            type="text"
            placeholder="Your username"
            {...register('username', { required: true })}
          />
          {errors.username && <p className="error-message">Username is required.</p>}
        </div>

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
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <p className="error-message">Password must be at least 6 characters long.</p>}
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;