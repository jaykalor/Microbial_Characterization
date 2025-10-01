import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

//const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {

        const [user, setUser] = useState({
          email : "",
          password : "",
        });

        const navigate = useNavigate();
        const {storeTokenInLS} = useAuth();

        const handleInput = (e) => {
          let name = e.target.name;
          let value = e.target.value;

          setUser ({
            ...user,
            [name] : value,
          })
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
          //console.log(user);

          try {
           const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type" : "application/json",
            },
            body: JSON.stringify(user),
           });

           const responseData = await response.json();

           if (response.ok) {
            toast.success("Login Successfully");
            storeTokenInLS(responseData.token);
            setUser({email : "", password : ""});
            navigate("/");
           }
           else{
            toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message);
            console.log("Invalid credantial");
            
           }
           
          } catch (error) {
            console.log(error);
          }
        };

    return <>
        <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/login.png" 
              alt="a Person is trying to registration"
              width="500" height="400"
              />
            </div>
            {/*registration form*/}
            <div className="registration-form">
              <h1 className="main-heading mb-3">
                Login Form
              </h1>
              <br />

              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-submit">Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
    </>;
};