import styles from "./Project.module.css";
import { Link ,useNavigation } from "react-router-dom";

const Projects = () => {
  const projects = [
    "To-Do List",
    "Weather App",
    "Quiz App",
    "Calculator",
    "Expense Tracker",
    "Movie Search",
    "Portfolio Website",
    "Notes App",
    "E-Commerce Landing Page",
    "Chat Application",
  ];

  return (
    <div className={styles.dashboard}>

      {/* Sidebar */}

      <aside className={styles.sidebar}>
        <h1 className={styles.logo}>SkillUp AI</h1>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📁 Projects</li>
          <li>🗺 Roadmaps</li>
          <li>🏆 Achievements</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}

      <main className={styles.main}>

        <div className={styles.stats}>

          <div className={styles.statCard}>
            <h3>🔥 Streak</h3>
            <p>12 Days</p>
          </div>

          <div className={styles.statCard}>
            <h3>📚 Completed</h3>
            <p>3 Projects</p>
          </div>

          <div className={styles.statCard}>
            <h3>⭐ Resume Score</h3>
            <p>78%</p>
          </div>

        </div>

        {/* Start Project */}

        <div className={styles.startProject}>
          <h2>Start New Project</h2>

          <div className={styles.modeBtns}>
            <button>Solo Project</button>
            <button>Team Project</button>
          </div>
        </div>

        {/* Project Ideas */}

        <h2 className={styles.heading}>Project Ideas</h2>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{project}</h3>

              <span>Beginner</span>

              <p>HTML • CSS • JS • React</p>

              <button>Start Project</button>
            </div>
          ))}
        </div>

        {/* Current Project */}

        <div className={styles.currentProject}>
          <h2>Current Project</h2>

          <h3>Weather App</h3>

          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
          </div>

          <p>Step 8 / 10 - Connect Weather API</p>

          <button>View Current Step</button>
        </div>

        {/* Deployment */}

        <div className={styles.deploy}>
          <h2>Deployment Center</h2>

          <div className={styles.deployCards}>
            <div>
              <h4>GitHub</h4>
              <p>Not Uploaded</p>
              <button>Upload</button>
            </div>

            <div>
              <h4>Netlify</h4>
              <p>Pending</p>
              <button>Deploy</button>
            </div>
          </div>
        </div>

      </main>

      {/* AI Mentor */}

      <aside className={styles.aiPanel}>
        <h2>🤖 AI Mentor</h2>

        <div className={styles.chat}>
          <div className={styles.bot}>
            Current Step: Create Navbar Component
          </div>

          <div className={styles.bot}>
            Need help?
          </div>
        </div>

        <button>Explain Step</button>
        <button>Generate Code</button>
        <button>Debug Code</button>
        <button>Show Example</button>

        <input
          type="text"
          placeholder="Ask AI anything..."
        />
      </aside>

    </div>
  );
};

export default Projects;