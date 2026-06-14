import { memo } from 'react';
import styles from "./auth.module.css";
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

   const handleLogin = () => {
 
  navigate('/Personalinfo');


    };


  return (
    <div> <div className={styles.Parent}>
      <div className={styles.left}>
      
              <img className={styles.logo} src="/logo.png" alt="logo" />

      <div >
        <p>Everything you need to learn and grow.
Personalized learning paths, daily action plans,
 quizzes, and AI mentoring
  <h4>
  <span className={styles.highlightText}>All in one</span> platform
</h4></p>
      
      </div> 
      </div>
      <div>
         <div className={styles.right}>
          <h2> ~ Login ~ </h2>
          <h3>Email</h3>
          <input type="text" placeholder='Enter your name'/>
          <h3>Password</h3>
          <input type='Password' placeholder='Enter password'></input>
          <button className={styles.loginBtn} onClick={handleLogin}>
  Login
</button>
       <Link to="/forgotpassword">
        <button className={styles.forgetbtn}>Forgot Password</button>
             </Link>
          
          <h4>Don't have an account?</h4>
      <Link to="/signup"><button  className={styles.signupBtn}>SIGN UP</button></Link>
      </div>
      </div>
     
    </div> </div>
    
  );
};

export default Login;