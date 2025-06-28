import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Welcome to Movie Vibes
        </h1>
        <p className="text-xl text-white/80 mb-12 text-center">
          Discover and share your favorite movies with friends
        </p>

        {/* Test Tailwind Components */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LoadingSpinner Test */}
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Loading Spinner Test
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <LoadingSpinner size="small" color="primary" />
              <span className="text-white">Small Primary</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <LoadingSpinner size="medium" color="secondary" />
              <span className="text-white">Medium Secondary</span>
            </div>
            <div className="flex items-center gap-4">
              <LoadingSpinner size="large" color="white" />
              <span className="text-white">Large White</span>
            </div>
          </div>

          {/* ErrorMessage Test */}
          <div className="space-y-4">
            <ErrorMessage
              type="error"
              title="Error Message Test"
              message="This is an error message with our new Tailwind styling."
            />
            <ErrorMessage
              type="warning"
              title="Warning Message Test"
              message="This is a warning message with improved design."
            />
            <ErrorMessage
              type="info"
              title="Info Message Test"
              message="This is an info message with custom variants."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
