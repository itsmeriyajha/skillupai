import styles from "./dashboard.module.css";
import Sidebar from "../../components/sidebar";
import { Link ,useNavigate } from "react-router-dom";

const Dashboard =()=> {

  const navigate=useNavigate();

  const starthandler=()=>{
    navigate('/Projects')
  };
  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>SkillUp AI</h2>

        
       <Sidebar/>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.topbar}>
          <h1>Welcome Back 👋</h1>

          <input
            type="text"
            placeholder="Search courses, projects..."
          />
        </div>

        {/* Stats */}
        <section className={styles.stats}>
          <div className={styles.statCard}>
            <h3>🔥 Current Streak</h3>
            <span>18 Days</span>
          </div>

          <div className={styles.statCard}>
            <h3>📚 Courses Completed</h3>
            <span>12</span>
          </div>

          <div className={styles.statCard}>
            <h3>🚀 Projects Built</h3>
            <span>7</span>
          </div>
        </section>

        {/* Action Cards */}
        <section className={styles.cards}>
          <div className={styles.card}>
            <h3>Create Project</h3>
            <p>Build your next portfolio project.</p>
            <button onClick={starthandler} >Start Now</button>
          </div>

          <div className={styles.card}>
            <h3>Today's AI Plan</h3>
            <p>3 Tasks Remaining</p>
            <button>View Tasks</button>
          </div>

          <div className={styles.card}>
            <h3>Weekly Progress</h3>
            <p>82% Completed</p>
            <button>See Report</button>
          </div>

          <div className={styles.card}>
            <h3>Skill Assessment</h3>
            <p>Take a quick AI-generated quiz.</p>
            <button>Start Quiz</button>
          </div>
        </section>

        {/* Chat Section */}
        <section className={styles.chatbox}>
          <div className={styles.chatHeader}>
            <h3>AI Mentor</h3>
          </div>

          <div className={styles.chatMessages}>
            <div className={styles.bot}>
              Hello! What would you like to learn today?
            </div>

            <div className={styles.user}>
              Help me become a React Developer.
            </div>
          </div>

          <div className={styles.chatInput}>
            <input
              type="text"
              placeholder="Ask your AI Mentor..."
            />
            <button>Send</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;