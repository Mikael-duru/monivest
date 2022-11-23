import { Outlet, Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="#">MoniVest</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Packages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About</Link>
              </li>
            </ul>
            <div className="d-flex gap-4">
              <Link to='/login'>
                <button className="btn btn-link">Sign IN</button>
              </Link>
              <Link to='/register'>
                <button className="btn btn-md btn-primary">Sign UP</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </header>
  );
}

export default Header;