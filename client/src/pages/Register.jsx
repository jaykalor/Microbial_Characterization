import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

//const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput= (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };
//handling form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);
  
  try {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method:"POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(user),
    });

      const responseData = await response.json();
      console.log("res from server ", responseData.extraDetails);
      

    if (response.ok) {
      // const responseData = await response.json();
      toast.success("Registration Successfully");
      storeTokenInLS(responseData.token);
      setUser({ username: "", email: "", phone: "",date: "", password: "" });
      console.log(responseData);
      navigate("/")
    } else {
      toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
    }
  } catch (error) {
    console.log("register", error);
  }
};

  return <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/register.png" 
              alt="a Person is trying to registration"
              width="500" height="400"
              />
            </div>
            {/*registration form*/}
            <div className="registration-form">
              <h1 className="main-heading mb-3">
                Registration Form
              </h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input 
                    type="text" 
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Your Email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input 
                    type="number" 
                    name="phone"
                    placeholder="Enter Your Number"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                {/* <div>
                  <label htmlFor="date">date</label>
                  <input 
                    type="date" 
                    name="date"
                    id="date"
                    required
                    autoComplete="off"
                    value={user.date}
                    onChange={handleInput}
                  />
                </div> */}

                <div>
                  <label htmlFor="password">password</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Enter Password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>;
};