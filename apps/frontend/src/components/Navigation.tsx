import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigation() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-primary-400 transition-colors duration-200 no-underline"
            >
              Movie Vibes
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
            >
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/movies"
                  className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
                >
                  Movies
                </Link>
                <span className="px-4 py-2 text-white/70 font-medium">
                  Welcome, {user?.displayName || user?.username}!
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 ml-2 bg-primary-500/80 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 font-medium hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 ml-2 bg-primary-500/80 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 no-underline font-medium hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default - would need state management for full functionality) */}
      <div className="md:hidden hidden bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="px-4 py-6 space-y-3">
          <Link
            to="/"
            className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
          >
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/movies"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
              >
                Movies
              </Link>
              <div className="px-4 py-2 text-white/70 font-medium border-t border-white/10 mt-4 pt-4">
                Welcome, {user?.displayName || user?.username}!
              </div>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 bg-primary-500/80 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 no-underline font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 bg-primary-500/80 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 no-underline font-medium text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
