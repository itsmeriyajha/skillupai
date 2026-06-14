
import  styles from "./Onboarding.module.css";
import { Link,useNavigate } from "react-router-dom";

const Time = () => {

 const navigate = useNavigate();

   const handlenext=()=>{
    navigate('/learningpath')
  };
  return (
    <div>
           <div className={styles.parent}>
                <div className={styles.container}>
                  <h1>In how many  </h1>
                <h2> DAYS?</h2>
                  <p>Select from bellow</p>
          
                  
          
                  <div className={styles.days}>
                    <button>15 Days</button>
                    <button>30 Days</button>
                    <button>45 Days</button>
                    <button>60 Days</button>
                    
    
                  </div>
          
                  <div className={styles.footer}>
                    <button className={styles.back } onClick={() => navigate(-1)}>Back</button>
                    <button className={styles.next} onClick={handlenext}>Next </button>
                  </div>
                </div>
              </div>
        </div>
  );
};

export default Time;