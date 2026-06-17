import styles from "./sidebar.module.css"
import { memo } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    return currentPath === path ? styles.active : '';
  };

  const isLearningPath = currentPath === '/learningpath';

  return (
<<<<<<< HEAD

    <div>
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
=======
    <div className={`${styles.sidebar} ${isLearningPath ? styles.glassSidebar : ''}`}>
      {/* Brand Logo inside the sidebar */}
      <h2 className={styles.logo}>SkillUp AI</h2>

      <div className={styles.profile}>
        <div className={styles.avatar}></div>
        <h4>Riya</h4>
      </div>

      <nav>
        <ul>
          <li className={isActive('/dashboard')} onClick={() => navigate('/dashboard')}>Dashboard</li>
          <li className={isActive('/profile')} onClick={() => navigate('/profile')}>My Profile</li>
          <li className={isActive('/learningpath')} onClick={() => navigate('/learningpath')}>Learning Path</li>
          <li className={isActive('/mentor')} onClick={() => navigate('/mentor')}>AI Mentor</li>
          <li className={isActive('/streaks')} onClick={() => navigate('/streaks')}>Streaks</li>
          <li className={isActive('/calendar')} onClick={() => navigate('/calendar')}>Calendar</li>
          <li className={isActive('/settings')} onClick={() => navigate('/settings')}>Settings</li>
>>>>>>> fb6581261b568c603cf58e344b1c85ba2f0a4ae1
        </ul>
      </nav>
    </div>
  );
};

export default sidebar;
