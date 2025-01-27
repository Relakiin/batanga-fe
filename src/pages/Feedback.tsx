import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <Link to="/play">
      <button className="btn">Vai alla ruota</button>
    </Link>
  );
}

export default Feedback;
