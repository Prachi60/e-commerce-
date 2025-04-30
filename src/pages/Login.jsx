import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Photo from "./image.png";
import "./Login.css";
import { postData } from "../service/service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isLogin,setIsLogin]=useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    try {
      const response = await postData("user/login-web", {
        email,
        password,
      });

      if (response.status) {
        setMessage("Login successful!");
        console.log("User Data:", response.data);
    
        localStorage.setItem("token", response.data.token);
        console.log("Redirecting to home page...");
       setIsLogin(true);
       window.location.href = "/"
        // navigate("/");
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error(error);
    }
  };
  return (
    <div>
      <div className="colors">
        <div className="bottomm">
          <div className="left-sidee">
            <span>Log In</span>
          </div>
          <div className="rightt">
            <i class="fas fa-home"></i>
            <Link to="/">Home</Link>
          </div>
          <div className="mycartt">
            <i class="fas fa-chevron-right"></i>
            <span> Log In</span>
          </div>
        </div>

        <div className="login_sec">
          <div className="container-weidge">
            <div className="left-contain">
              <img src={Photo} alt="" />
            </div>
            <div className="right-conatin">
              <div className="login_page">
                <h4>Welcome To Kulies</h4>
                <div className="email">
                  <span>Log In Your Account</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="remember">
                  <label>
                    {" "}
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <span>Forgot Password?</span>
                </div>
                <div className="loginbtn">
                  <button type="button" onClick={handleLogin}
                  className = {isLogin ? "logged In":"Login"}>
                     {isLogin ? "logged In":"Login"}
                    
                  </button>
                </div>
                <hr />
                <div className="signup_link">
                  <span>Don't Have An Account?</span>
                </div>
                <div className="signup">
                  <Link to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
