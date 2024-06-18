import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to Bopl Battle Merchandise!</h1>
            <p>Your one-stop shop for the best Bopl Battle merchandise!</p>
            <a href="/products" className="cta-button">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
