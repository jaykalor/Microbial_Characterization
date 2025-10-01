import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  console.log("login or not ", isLoggedIn);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Microbial Characterization</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">AboutUs</NavLink>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/contact">ContactUs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/micro-organism">Microorganisms</NavLink>
                  </li>
                  <li>
                    <NavLink to="/vaccination">Vaccination</NavLink>
                  </li>
                  <li>
                    <NavLink to="/case-study">CaseStudy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/info">Data</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/service">Services</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
