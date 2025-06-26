import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigation() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">Movie Vibes</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span>Welcome, {user?.displayName || user?.username}!</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
