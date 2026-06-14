import { memo } from 'react';
import Login from './pages/auth/login';
import Singup from './pages/auth/singup';
import ForgotPassword from './pages/auth/ForgotPassword';
import PersonalInfo from './pages/Onboarding/PersonalInfo';
import Skill from './pages/Onboarding/skill';
import LearningGoal from './pages/Onboarding/LearningGoal';
import Time from './pages/Onboarding/Time';
import Dashboard from './pages/Dashboard/Dashboard';
import Quiz from './pages/Quiz/Quiz';
import Projects from './pages/projects/Projects';
import Profile from './pages/profile/Profile';
import LearningPath from './pages/learningpath/learningpath';
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* Onboarding */}
      <Route path="/personalinfo" element={<PersonalInfo />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/learninggoal" element={<LearningGoal />} />
      <Route path="/time" element={<Time />} />

      {/* Main App */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/learningpath"element={<LearningPath/>}/>
    </Routes>
    
  );
  
};

export default memo(App);
