import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <img
            src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6"
            alt="AI Studio Banner"
            className="banner"
          />
          <h1>Built with AI Studio</h1>
          <p className="tagline">The fastest path from prompt to production with Gemini.</p>
          <a
            href="https://aistudio.google.com/apps"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start building
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
