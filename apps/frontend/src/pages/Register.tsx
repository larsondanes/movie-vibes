import { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AuthForm from '../components/AuthForm';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    displayName: '',
  });
  const [error, setError] = useState('');

  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Registration failed';
      setError(message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <AuthForm
          title="Register"
          onSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
        >
          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 text-base box-border focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 text-base box-border focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              placeholder="Choose a username"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="displayName"
              className="block mb-2 font-medium text-white"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 text-base box-border focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              placeholder="Your display name (optional)"
            />
          </div>

          <div className="mb-4 text-left">
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-white/50 text-base box-border focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
              placeholder="Create a password"
            />
          </div>
        </AuthForm>

        <div className="text-center mt-6">
          <p className="text-white/80">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary-400 hover:text-primary-300 no-underline hover:underline font-medium transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
