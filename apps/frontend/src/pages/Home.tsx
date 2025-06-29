function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
          Welcome to Movie Vibes
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-medium">
          Discover and share your favorite movies with friends
        </p>
      </div>
    </div>
  );
}

export default Home;
