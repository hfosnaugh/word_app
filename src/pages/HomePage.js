import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/game">
        <Button variant="primary" size="lg">
          Go to Game
        </Button>
      </Link>
    </>
  );
}

export default Home;