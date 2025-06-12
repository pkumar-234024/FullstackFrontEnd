import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MyApp</h1>
        <p>Your one-stop solution for everything you need</p>
      </div>
      <div className="content-section">
        <div className="feature-card">
          <h2>Easy to Use</h2>
          <p>Simple and intuitive interface for the best user experience</p>
        </div>
        <div className="feature-card">
          <h2>Secure</h2>
          <p>Your data is protected with the latest security measures</p>
        </div>
        <div className="feature-card">
          <h2>Fast</h2>
          <p>Lightning-fast performance for smooth operation</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
