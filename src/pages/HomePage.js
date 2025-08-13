import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className='display-2'>Home</h1>
      <div class="wrapper">
      <Link to="/game">
        <Button variant="primary" className='Button' size="lg">
          Go to Game
        </Button>
      </Link>
      </div>
    </>
  );
}

export default Home;