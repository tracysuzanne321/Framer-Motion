import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <h2>Home</h2>
      <Link to="animate">
        <button>Go To Animate</button>
      </Link>
    </div>
  );
};

export default Home;
