import React, { useState } from 'react';
import MovieSearch from './MovieSearch';
import MovieBrowser from './MovieBrowser';

const MoviesPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'search' | 'browse'>('browse');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Page Header */}
      <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Header Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Movies
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Discover, search, and explore thousands of movies from around
                the world
              </p>
            </div>

            {/* View Selector */}
            <div className="flex bg-white/10 rounded-xl p-1 backdrop-blur-md border border-white/20">
              <button
                onClick={() => setActiveView('browse')}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeView === 'browse'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeView === 'browse'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                Browse
              </button>

              <button
                onClick={() => setActiveView('search')}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeView === 'search'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeView === 'search'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'search' ? (
          <MovieSearch className="" />
        ) : (
          <MovieBrowser className="" />
        )}
      </main>

      {/* Page Footer */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-4xl">🎬</span>
              <div>
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-white/70 font-medium">Movies</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-4xl">🌟</span>
              <div>
                <div className="text-2xl font-bold text-white">Daily</div>
                <div className="text-white/70 font-medium">Updates</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-4xl">🎭</span>
              <div>
                <div className="text-2xl font-bold text-white">All Genres</div>
                <div className="text-white/70 font-medium">Covered</div>
              </div>
            </div>
          </div>

          {/* Powered By Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/10">
            <span className="text-white/70 font-medium">Powered by</span>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database"
                width="80"
                height="auto"
                className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MoviesPage;
