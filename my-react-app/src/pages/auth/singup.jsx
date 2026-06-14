import { memo } from 'react';
import styles from "./auth.module.css";
import { Link } from 'react-router-dom';
const Singup = () => {
  return (
    <div>
      <div className={styles.main}>
       <div className={styles.card}>
       <h1>Create Account</h1>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Sign Up</button>
       <Link to="/">  <p>
          Already have an account? <span>Login</span>
        </p>
       </Link>
      
        
      </div>

      </div>
     
    </div>
  );
};

export default Singup;