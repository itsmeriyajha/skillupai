import styles from "./Profile.module.css";
import {Link,useNavigate} from "react-router-dom";

function Profile() {
  const user = {
    name: "Riya Sharma",
    email: "riya@gmail.com",
    phone: "+91 9876543210",
    college: "ABC Institute of Technology",
    course: "B.Tech CSE",
    year: "3rd Year",
    location: "Kolkata, India",
    joined: "June 2026",
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>

        <div className={styles.header}>
          <div className={styles.avatar}>
            
          </div>

          <div>
            <h2>{user.name}</h2>
            <p>Student Profile</p>
          </div>

          <button className={styles.editBtn}>
            Edit Profile
          </button>
        </div>

        <div className={styles.detailsGrid}>

          <div className={styles.detailCard}>
            <span>Email</span>
            <h4>{user.email}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>Contact Number</span>
            <h4>{user.phone}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>College</span>
            <h4>{user.college}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>Course</span>
            <h4>{user.course}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>Current Year</span>
            <h4>{user.year}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>Location</span>
            <h4>{user.location}</h4>
          </div>

          <div className={styles.detailCard}>
            <span>Member Since</span>
            <h4>{user.joined}</h4>
          </div>

        </div>

        <div className={styles.actions}>
          <button className={styles.updateBtn}>
            Update Details
          </button>

          <Link to='/forgotpassword'><button className={styles.passwordBtn} >
            Change Password
          </button></Link>
        </div>

      </div>
    </div>
  );
}
import { Form } from "react-router-dom";

export default Profile;