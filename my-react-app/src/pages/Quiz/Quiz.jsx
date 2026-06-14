import styles from "./quiz.module.css";

function Quiz() {
  return (
    <div className={styles.quizPage}>
      <div className={styles.quizContainer}>

        <div className={styles.header}>
          <h1>SkillUp AI Assessment</h1>
          <p>Question 5 of 20</p>
        </div>

        <div className={styles.progress}>
          <div className={styles.progressFill}></div>
        </div>

        <div className={styles.questionCard}>
          <span className={styles.badge}>HTML</span>

          <h2>
            Which HTML tag is used to create a hyperlink?
          </h2>

          <div className={styles.options}>
            <label className={styles.option}>
              <input type="radio" name="q1" />
              &lt;link&gt;
            </label>

            <label className={styles.option}>
              <input type="radio" name="q1" />
              &lt;a&gt;
            </label>

            <label className={styles.option}>
              <input type="radio" name="q1" />
              &lt;href&gt;
            </label>

            <label className={styles.option}>
              <input type="radio" name="q1" />
              &lt;url&gt;
            </label>
          </div>
        </div>

        <div className={styles.navigation}>
          <button>Previous</button>
          <button>Skip</button>
          <button className={styles.nextBtn}>
            Next Question
          </button>
        </div>

        <div className={styles.questionNumbers}>
          {[...Array(20)].map((_, index) => (
            <div key={index} className={styles.number}>
              {index + 1}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Quiz;