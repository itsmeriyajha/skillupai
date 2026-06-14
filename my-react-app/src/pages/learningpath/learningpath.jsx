import React from "react";
import styles from "./learningpath.module.css";
import Sidebar from "../../components/sidebar";


const roadmap = [
  { day: 1, title: "Introduction to HTML" },
  { day: 2, title: "HTML Structure" },
  { day: 3, title: "Text Elements" },
  { day: 4, title: "Links & Navigation" },
  { day: 5, title: "Images & Media" },
  { day: 6, title: "Lists" },
  { day: 7, title: "Tables" },
  { day: 8, title: "Forms Basics" },
  { day: 9, title: "Advanced Forms" },
  { day: 10, title: "Semantic HTML" },
  { day: 11, title: "Accessibility" },
  { day: 12, title: "Portfolio Project" },
  { day: 13, title: "Landing Page" },
  { day: 14, title: "Responsive Structure" },
  { day: 15, title: "Final Project" },
];

const LearningPath = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <section className={styles.roadmapContainer}>
        <h1 className={styles.roadmapTitle}>
          🚀 HTML Mastery Roadmap
        </h1>

        <div className={styles.progressCard}>
          <h3>Your Progress</h3>

          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>

          <p>0 / 15 Days Completed</p>
        </div>

        <div className={styles.roadmap}>
          {roadmap.map((item, index) => (
            <div
              key={item.day}
              className={`${styles.roadmapItem} ${
                index % 2 === 0
                  ? styles.left
                  : styles.right
              }`}
            >
              <div className={styles.dayBubble}>
                {item.day}
              </div>

              <div className={styles.dayCard}>
                <span className={styles.dayLabel}>
                  Day {item.day}
                </span>

                <h3>{item.title}</h3>

                <p>
                  Complete today's lesson and move
                  one step closer to becoming an
                  HTML expert.
                </p>

                <button className={styles.startBtn}>
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.aiCard}>
          <h3>🤖 SkillUp AI Coach</h3>

          <p>
            Based on your learning speed, today's
            lesson should take around 40 minutes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearningPath;