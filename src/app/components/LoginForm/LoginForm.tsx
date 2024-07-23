'use client'
import axios from 'axios';
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', { username: email, password });
      console.log('Login successful:', response.data);
      // Armazene o token JWT e redirecione o usuário
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <h3 className='text-3xl mb-10 text-center'>Login</h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;