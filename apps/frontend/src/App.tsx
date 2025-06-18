import { useState } from 'react';
import { formatDate } from '@movie-vibes/shared';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Vibes</h1>
        <p>A social media application for movie enthusiasts</p>
        <p>Today is {formatDate(new Date())}</p>
      </header>
      <main>
        <div className="counter">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;