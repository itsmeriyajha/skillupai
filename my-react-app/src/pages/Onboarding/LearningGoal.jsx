import {Link, useNavigate } from "react-router-dom";
import  styles from "./Onboarding.module.css";

const LearningGoal = () => {
const navigate = useNavigate();
  const handlenext=()=>{
    navigate('/time')
  };
  return (
    <div>
       <div className={styles.parent}>
            <div className={styles.container}>
              <h1>What do you want </h1>
            <h2> to learn ?</h2>
              <p>Select all that apply</p>
      
              <input
                type="text"
                placeholder="Search skills..."
                className={styles.search}
              />
      
              <div className={styles.skills}>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Python</button>
                <button>Java</button>
                <button>C++</button>
                <button>SQL</button>
                <button>UI/UX Design</button>
                <button>Node.js</button>
                <button>Express.js</button>
                <button>MongoDB</button>
                <button>Git</button>
                <button>C</button>
                <button>Web devlopment</button>

              </div>
      
              <div className={styles.footer}>
                <button className={styles.back} onClick={() => navigate(-1)}>Back</button>
                <button className={styles.next } onClick={handlenext}>Next</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default LearningGoal;