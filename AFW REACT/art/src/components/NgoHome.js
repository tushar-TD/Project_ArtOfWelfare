import { Link, Outlet, Route, Routes } from "react-router-dom";
import artlogo from "../images/artlogo1.png";
import ViewNgoFund from "./ViewNgoFund";
import NgoProfile from "./NgoProfile";

export default function NgoHome() {

  return (
    <div>
      <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src={artlogo}
              height="66"
              alt="logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Add navigation links here */}
              <li>
                  <Link to="/ngo_home/ngofund" className="m-4" style={{ textDecoration: 'none', fontWeight: 'bold' }}>View Fund</Link>
              </li>
              <li>
                  <Link to="/ngo_home/viewprofile" className="m-4" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Profile</Link>
              </li>
             
            </ul>
          </div>
          <Link className="btn btn-danger white px-3" to="/logout">
            <b>Logout</b>
          </Link>
        </div>
      </nav>
      <div className="container">
</div>
<div>
  <Outlet/>
      </div>
          <Routes>
              <Route path="/ngofund" element={<ViewNgoFund></ViewNgoFund>}></Route>
              <Route path="/viewprofile" element={<NgoProfile></NgoProfile>}></Route>
          </Routes>
      </div>
  );
}