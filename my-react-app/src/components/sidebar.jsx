import styles from "./sidebar.module.css"
import { memo } from 'react';
import { Link, useNavigate } from "react-router-dom";

const sidebar = () => {
  const navigate = useNavigate();

  const dashboardhandle = () => {
    navigate('/dashboard')
  };
  const myprofile = () => {
    navigate('/profile')
  };

  return (
    <div className={styles.sidebar}>
      {/* Brand Logo inside the sidebar */}
      <h2 className={styles.logo}>SkillUp AI</h2>

      <div className={styles.profile}>
        <div className={styles.avatar}></div>
        <h4>Riya</h4>
      </div>

      <nav>
        <ul>
          <li className={styles.active} onClick={dashboardhandle}>Dashboard</li>
          <li onClick={myprofile}>My Profile</li>
          <li>Learning Path</li>
          <li>AI Mentor</li>
          <li>Streaks</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default sidebar;
