import { memo } from 'react';
import styles from "./auth.module.css";
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
   <div>
         <div className={styles.main}>
          <div className={styles.card}>
          <h1>Forgot Password</h1>
          
           
           <input type="email" placeholder="Email" />
           
           
   
           <button>Reset Password</button>
   
          <Link to="/"><button className={styles.homebtn}>
             Go back to Login page 
           </button></Link> 
           
         </div>
   
         </div>
        
       </div>
  );
};

export default ForgotPassword;