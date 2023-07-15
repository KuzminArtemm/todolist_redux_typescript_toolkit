import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-success-subtle
    "
    >
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              style={{ color: 'white' }}
              className="nav-link mx-5"
              to="/about"
            >
              About
            </Link>
            <Link
              style={{ color: 'white' }}
              className="nav-link"
              to="todopages"
            >
              TodoPages
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
