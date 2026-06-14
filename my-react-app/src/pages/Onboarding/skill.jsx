import { memo } from 'react';
import  styles from "./Onboarding.module.css";
import { Link ,useNavigate } from 'react-router-dom';


const Skills = () => {

  const navigate=useNavigate();
   
  const handleback=()=>{
    navigate('/Personalinfo')
  };
  const handlenext=()=>{
    navigate('/learninggoal')
  };
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <h1>What skills do you  </h1>
      <h2>already have?</h2>
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
          <button>Figma</button>
          <button>Node.js</button>
          <button>Express.js</button>
          <button>MongoDB</button>
          <button>Git</button>
          <button>C</button>
        </div>

        <div className={styles.footer}>
          <button className={styles.back} onClick={handleback}>Back</button>
          <button className={styles.next} onClick={handlenext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;