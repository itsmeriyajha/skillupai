import { memo } from 'react';
import  styles from "./Onboarding.module.css";
import {Link ,useNavigate}from  "react-router-dom";

const PersonalInfo = () => {
const navigate = useNavigate();

    const Handlenext =()=>{
     navigate("/skills")
    };


  return ( 

    <div className={styles.parent}>
     <div className={styles.card}>
      <h1>Let's know more </h1>
      <h2>about you</h2>
       <h5>This helps us create your perfect plan</h5>

    <h3>Full Name</h3>
    <input type="text" placeholder="🧑‍💼 Enter your name" />
    <h3>Age</h3>
    <input type="number" placeholder="📆 Enter Age" />
    <h3>Occupation</h3>
    <input type='text' placeholder="💼 Enter what you do" />
    <h3>Phone No</h3>
    <input type='tel' placeholder="📞Enter your phone number" />

    

     </div>
    <div className={styles.btn}>
        <h3>What describes </h3>
        <h2>you best?</h2>
        <div className={styles.button}>
            <button> 🎒School Student</button>
         <button>🎓 College Student</button>
          <button> 💼Working Professional</button>


          <button onClick={Handlenext}> Next</button>

          </div>
        
    </div>
     
    </div>
  );
};

export default PersonalInfo;