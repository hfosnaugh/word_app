import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div class="container" style={{height: '40vh'}}><h1 class='display-2'>Home</h1></div>
    <div class="container">
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